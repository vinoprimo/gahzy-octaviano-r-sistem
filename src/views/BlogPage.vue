<template>
    <div class="flex overflow-hidden flex-col items-center bg-white">
      <FeaturedPost />
      <AllPosts />
      <BlogPosts />
      <Pagination />
      <Categories />
      <JoinTeam />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import FeaturedPost from '@/components/Blog/FeaturedPost.vue';
  import AllPosts from '@/components/Blog/AllPosts.vue';
  import BlogPosts from '@/components/Blog/BlogPosts.vue';
  import Pagination from '@/components/Blog/Pagination.vue';
  import Categories from '@/components/Blog/Categories.vue';
  import JoinTeam from '@/components/Blog/JoinTeam.vue';

  export default defineComponent({
  name: 'BlogPage',
  components: {
    FeaturedPost,
    AllPosts,
    BlogPosts,
    Pagination,
    Categories,
    JoinTeam,
  },
});
</script>