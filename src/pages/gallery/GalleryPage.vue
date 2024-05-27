<script lang="ts" setup>
import { Gallery1Img, Gallery2Img, Gallery3Img, Gallery4Img, Gallery5Img } from '@/app'
</script>

<template>
  <div class="gallery_page">
    <span class="fs-h1">GALLERY</span>
    <div class="gallery_page-images">
      <img :src="Gallery1Img" />
      <img :src="Gallery2Img" />
      <img :src="Gallery3Img" />
      <img :src="Gallery4Img" />
      <img :src="Gallery5Img" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery_page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  &-images {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: space-between;
    img {
      height: 424px;
    }
  }
}
</style>
