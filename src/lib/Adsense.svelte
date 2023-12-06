<svelte:options
  customElement={{
    tag: "adsense-popover",
    shadow: "none",
  }}
/>

<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  import CloseBtn from "./CloseBtn.svelte";

  // Container style
  export let width = 360;
  export let height = 140;
  export let padding = 8;
  export let offsetX = 16;
  export let offsetY = 16;
  export let animationDuration = 0.5;
  export let horizontalPosition: "left" | "right" = "right";
  export let verticalPosition: "bottom" | "top" = "bottom";
  export let timeout = 2000;

  // Adsense Attributes
  export let layoutKey = "";
  export let slot = "";
  export let client = "";
  export let format = "auto";
  export let responsive: "true" | "false" = "true";

  let adsElement: HTMLElement;

  $: containerStyle = `
  width: ${width}px;
  height: ${height}px;
  ${verticalPosition}: ${offsetY}px;
  transition-duration: ${animationDuration}s;
  ${horizontalPosition}: ${offsetX}px;
  transform: translateY(${verticalPosition === "bottom" ? 50 : -50}%);
  padding: ${padding}px;
`;

  $: btnStyle = `
  margin: ${padding}px;
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
    observer.observe(adsElement, {
      attributes: true,
    });

    setTimeout(() => {
      isVisible = true;
    }, timeout);
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
  <div class="close-btn" style={btnStyle}>
    <CloseBtn onClick={closeAd} />
  </div>
  <ins
    class="adsbygoogle"
    data-ad-client={client}
    data-ad-slot={slot}
    data-ad-layout-key={layoutKey}
    data-ad-format={format}
    data-full-width-responsive={responsive}
    bind:this={adsElement}
  ></ins>
</div>

<style>
  .ad-container {
    position: fixed;
    visibility: hidden;
    box-shadow: 0 2px 8px hsla(0, 0%, 0%, 0.22);
    border-radius: 4px;
    opacity: 0;
    background-color: #fff;
    z-index: 9999;
  }

  .close-btn {
    position: absolute;
    z-index: 1;
    color: #000;
    background-color: #fff;
    cursor: pointer;
    top: 0;
    right: 0;
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
    background-color: #fff;
  }

  .adsbygoogle[data-ad-status="unfilled"] {
    /* 광고가 로드되지 않았으면 광고 영역을 숨긴다. */
    display: none !important;
  }
</style>
