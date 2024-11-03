<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import BlogHome from '@/components/BlogHome/BlogHome.vue'
import FeaturedPosts from '@/components/BlogHome/FeaturedPosts.vue'
import AboutUsSection from '@/components/BlogHome/AboutUsSection.vue'
import CategoriesSection from '@/components/BlogHome/CategoriesSection.vue'
import SpecialPost from '@/components/BlogHome/SpecialPost.vue'
import AuthorsList from '@/components/BlogHome/AuthorsList.vue'
import TestimonialSection from '@/components/BlogHome/TestimonialSection.vue'
import LogoFeature from '@/components/BlogHome/LogoFeature.vue'
import JoinTeam from '@/components/BlogHome/JoinTeam.vue'
</script>

<template>
  <main class="flex flex-col items-center">
          <BlogHome />
          <FeaturedPosts />
          <AboutUsSection />
          <CategoriesSection />
          <SpecialPost />
          <AuthorsList />
          <TestimonialSection />
          <JoinTeam />
  </main>
</template>
