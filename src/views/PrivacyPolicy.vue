<template>
    <div class="privacy-policy flex overflow-hidden flex-col items-center bg-white">
      <Header />
      <HeroSection />
      <MainContent />
      <Footer />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import HeroSection from '@/components/PrivacyPolicy/HeroSection.vue';
  import MainContent from '@/components/PrivacyPolicy/MainContent.vue';
  
  export default defineComponent({
    name: 'PrivacyPolicy',
    components: {
      HeroSection,
      MainContent,
    },
  });
  </script>