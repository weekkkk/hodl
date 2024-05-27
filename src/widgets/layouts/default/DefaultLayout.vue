<script lang="ts" setup></script>

<template>
  <div class="default_layout">
    <div class="default_layout-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default_layout {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  &-content {
    max-width: 1920px;
    padding: 60px 120px;
    width: 100%;
    display: flex;
    // align-items: center;
    flex-direction: column;
    gap: 120px;
  }
}
</style>
