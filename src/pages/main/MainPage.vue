<script lang="ts" setup>
import { SpermeImg } from '@/app'
</script>

<template>
  <div class="main_page">
    <div class="main_page-soon fs-h4">TOKEN ADDRESS: SOON</div>

    <div class="main_page-banner">
      <img :src="SpermeImg" class="main_page-banner-img" />

      <span class="fs-h2 fw-r">$SPERME IS THE FIRST BRICK ON SOLANA</span>
    </div>

    <div class="main_page-ticker-wrap">
      <div class="main_page-ticker" v-for="i in 2">
        <span class="main_page-ticker-text fs-h2" v-for="i in 20">$sperme</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes ticker {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 20px));
  }
}
.main_page {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 120px;
  &-soon {
    background-color: var(--n-brand);
    border-radius: 10px;
    padding: 0 12px;

    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
  &-banner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > span {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }

    &-img {
      height: 420px;
    }
  }

  &-ticker {
    &-wrap {
      display: flex;
      gap: 60px;
      width: 100vw;
      transform: translateX(calc((-100vw + 1680px) / 2));
      @media (max-width: 1920px) {
        transform: translateX(-120px);
      }
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    animation: ticker 10s infinite linear;
    &-text {
      width: 100%;
    }
  }
}
</style>
