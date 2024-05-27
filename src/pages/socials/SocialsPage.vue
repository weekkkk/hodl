<script lang="ts" setup>
import { DexIcon, PumpIcon, TelegramIcon, XIcon } from '@/app'
</script>

<template>
  <div class="socials_page">
    <span class="fs-h1">JOIN US</span>

    <div class="socials_page-links_block">
      <a href="https://t.me/solanabrick" target="_blank" class="socials_page-links_block-link">
        <img :src="TelegramIcon" />
      </a>
      <a href="https://x.com/solanabrick" target="_blank" class="socials_page-links_block-link">
        <img :src="XIcon" />
      </a>
      <a href="https://pump.fun/board" target="_blank" class="socials_page-links_block-link">
        <img :src="PumpIcon" />
      </a>
      <a href="https://dexscreener.com/" target="_blank" class="socials_page-links_block-link">
        <img :src="DexIcon" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.socials_page {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-links_block {
    width: 100%;
    display: flex;
    justify-content: space-between;
    &-link {
      img {
        height: 295px;
      }
    }
  }
}
</style>
