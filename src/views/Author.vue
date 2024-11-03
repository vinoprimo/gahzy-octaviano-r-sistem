<template>
    <div>
      <TheHeader />
      <main>
        <HeroSection />
        <BlogPosts />
      </main>
      <TheFooter />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import HeroSection from '@/components/Author/HeroSection.vue'
  import BlogPosts from '@/components/Author/BlogPosts.vue';
  
  export default defineComponent({
    name: 'BlogPage',
    components: {
      HeroSection,
      BlogPosts,
    },
  });
  </script>