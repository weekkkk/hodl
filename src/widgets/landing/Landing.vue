<script lang="ts" setup>
import { MainPage, GalleryPage, SocialsPage } from '@/pages'
import { DefaultLayout, HeaderLayout } from '../layouts'
</script>

<template>
  <DefaultLayout>
    <HeaderLayout></HeaderLayout>
    <MainPage />
    <GalleryPage />
    <SocialsPage />
  </DefaultLayout>
</template>

<style lang="scss" scoped></style>
