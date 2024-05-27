<script lang="ts" setup></script>

<template>
  <header class="header_layout">
    <span class="fs-h2 header_layout-logo">$sperme</span>

    <nav class="header_layout-nav">
      <h3 class="header_layout-nav-link">BUY</h3>
      <h3 class="header_layout-nav-link">TELEGRAM</h3>
      <h3 class="header_layout-nav-link">TWITTER</h3>
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
