<script lang="ts" setup></script>

<template>
  <header class="header_layout">
    <span class="fs-h2 header_layout-logo">$sperme</span>

    <nav class="header_layout-nav">
      <a href="https://pump.fun/board" target="_blank">
        <h3 class="header_layout-nav-link" target="_blank">BUY</h3>
      </a>
      <a href="https://t.me/solanabrick">
        <h3 class="header_layout-nav-link" target="_blank">TELEGRAM</h3>
      </a>
      <a href="https://x.com/solanabrick">
        <h3 class="header_layout-nav-link" target="_blank">TWITTER</h3>
      </a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header_layout {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-nav {
    display: flex;
    align-items: center;
    gap: 60px;
    a {
      text-decoration: none;
    }
    &-link {
      color: transparent;
      background-color: var(--n-base);
      padding: 0 12px;
      border-radius: 10px;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }
  }
}
</style>
