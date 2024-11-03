<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import BlogHome from '@/components/BlogHome/BlogHome.vue'
import FeaturedPosts from '@/components/BlogHome/FeaturedPosts.vue'
import AboutUsSection from '@/components/BlogHome/AboutUsSection.vue'
import CategoriesSection from '@/components/BlogHome/CategoriesSection.vue'
import SpecialPost from '@/components/BlogHome/SpecialPost.vue'
import AuthorsList from '@/components/BlogHome/AuthorsList.vue'
import TestimonialSection from '@/components/BlogHome/TestimonialSection.vue'
import LogoFeature from '@/components/BlogHome/LogoFeature.vue'
import JoinTeam from '@/components/BlogHome/JoinTeam.vue'
// @ts-ignore
import Form from '@/components/Form/Form.vue'

</script>

<template>
  <HeaderContent />
  <main>
    <RouterView/>
  </main>
  <FooterContent />
</template>

