<template>
    <div class="flex flex-col overflow-hidden bg-white">
      <TheHeader />
      <main class="flex flex-col items-center">
        <HeroSection class="w-full max-w-screen-lg px-4" />
        <CategoryContent class="w-full max-w-screen-lg px-4 mt-8" />
      </main>
      <TheFooter />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import HeroSection from '@/components/Categories/HeroSection.vue';
  import CategoryContent from '@/components/Categories/CategoryContent.vue';
  
  export default defineComponent({
    name: 'CategoryPage',
    components: {
      HeroSection,
      CategoryContent,
    },
  });
  </script>