<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  import CloseBtn from "./CloseBtn.svelte";

  export let width = 420;
  export let height = 140;
  export let offsetX = 16;
  export let offsetY = 16;
  export let animationDuration = 0.5;
  export let horizontalPosition: "left" | "right" = "right";
  export let verticalPosition: "bottom" | "top" = "bottom";

  export let adLayoutKey = "";
  export let adSlot = "";
  export let adClient = "";

  let adsElement: HTMLElement;

  $: containerStyle = `
    width: ${width}px;
    height: ${height}px;
    ${horizontalPosition}: ${offsetX}px;
    ${verticalPosition}: ${offsetY}px;
    transform: translateY(${verticalPosition === "bottom" ? 50 : -50}%);
    transition-duration: ${animationDuration}s;
  `;

  let isVisible = false;

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      const { type, attributeName } = mutation;

      if (type === "attributes" && attributeName === "data-ad-status") {
        const adStatus = (
          mutation.target as HTMLElement
        ).attributes.getNamedItem("data-ad-status")?.value;

        if (adStatus === "unfilled") {
          isVisible = false;
          break;
        }
      }
    }
  });

  onMount(() => {
    // @ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({});

    setTimeout(() => {
      isVisible = true; // Set to false if ad fails to load
      observer.observe(adsElement, {
        attributes: true,
      });
    }, 1000); // Simulated load time
  });

  onDestroy(() => {
    observer.disconnect();
  });

  function closeAd() {
    isVisible = false;
  }
</script>

<div
  class={`ad-container ${isVisible ? "visible" : ""}`}
  style={containerStyle}
>
  <div class="close-btn">
    <CloseBtn onClick={closeAd} />
  </div>
  <ins
    class="adsbygoogle"
    data-ad-client={adClient}
    data-ad-slot={adSlot}
    data-ad-layout-key={adLayoutKey}
    data-full-width-responsive="true"
    bind:this={adsElement}
  ></ins>
</div>

<style>
  .ad-container {
    position: fixed;
    padding: 8px;
    visibility: hidden;
    box-shadow: 0 2px 8px hsla(0, 0%, 0%, 0.22);
    border-radius: 4px;
    opacity: 0;
  }

  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: #fff;
    cursor: pointer;
    padding: 4px;
  }

  .close-btn:hover {
    background-color: #f5f5f5;
  }

  .visible {
    transform: translateY(0) !important;
    opacity: 1;
    visibility: visible;
  }

  .adsbygoogle {
    display: block;
    height: 124px;
    background-color: #fff;
  }

  .adsbygoogle[data-ad-status="unfilled"] {
    /* 광고가 로드되지 않았으면 광고 영역을 숨긴다. */
    display: none !important;
  }
</style>
