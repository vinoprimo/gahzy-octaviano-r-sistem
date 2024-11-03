<template>
    <section class="flex flex-col self-center mt-20 max-w-full rounded-none w-[1282px] max-md:mt-10">
      <div class="max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <ImageColumn />
          <div class="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col w-full max-md:mt-8 max-md:max-w-full">
              <div class="max-md:mr-0.5 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col">
                  <ArticleColumn />
                  <CategorySidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturedArticle />
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ImageColumn from '@/components/Categories/ImageColumn.vue';
  import ArticleColumn from '@/components/Categories/ArticleColumn.vue';
  import CategorySidebar from '@/components/Categories/CategorySidebar.vue';
  import FeaturedArticle from '@/components/Categories/FeaturedArticle.vue';
  
  export default defineComponent({
    name: 'CategoryContent',
    components: {
      ImageColumn,
      ArticleColumn,
      CategorySidebar,
      FeaturedArticle,
    },
  });
  </script>