<script lang="ts">
  export let onClick: () => void;
</script>

<button on:click={onClick} class="close-btn">
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 6L6 18"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</button>

<style>
  .close-btn {
    background: transparent;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0px;
    outline: none;
  }

  .close-btn svg {
    width: 16px;
    height: 16px;
  }
</style>
