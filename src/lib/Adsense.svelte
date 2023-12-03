<script lang="ts">
  import { onMount } from "svelte";

  export let width = 420;
  export let height = 140;
  export let offsetX = 16;
  export let offsetY = 16;
  export let animationDuration = 0.5;

  export let adLayoutKey = "";
  export let adSlot = "";
  export let adClient = "";

  $: containerStyle = `
    width: ${width}px;
    height: ${height}px;
    right: ${offsetX}px;
    bottom: ${offsetY}px;
    transition-duration: ${animationDuration}s;
  `;

  let isVisible = false;

  onMount(() => {
    setTimeout(() => {
      isVisible = true; // Set to false if ad fails to load
    }, 1000); // Simulated load time
  });

  function closeAd() {
    isVisible = false;
  }
</script>

<div
  class={`ad-container ${isVisible ? "visible" : ""}`}
  style={containerStyle}
>
  <button on:click={closeAd} class="close-btn">x</button>
  <ins
    class="adsbygoogle"
    data-ad-client={adClient}
    data-ad-slot={adSlot}
    data-ad-layout-key={adLayoutKey}
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
</div>

<style>
  .ad-container {
    position: fixed;
    padding: 8px;
    transform: translateY(50%);
    visibility: hidden;
    background-color: #eaeaea;
    box-shadow: 0 2px 8px hsla(0, 0%, 0%, 0.22);
    border-radius: 4px;
    opacity: 0;
  }

  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 0;
    background-color: #fff;
    border: none;
    border-radius: 0px;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    width: 24px;
    height: 24px;
  }

  .close-btn:hover {
    background-color: #f5f5f5;
  }

  .visible {
    transform: translateY(0);
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
