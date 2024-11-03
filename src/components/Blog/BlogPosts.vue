<template>
    <section class="mt-16 max-w-full w-[1147px] max-md:mt-10">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
            <img v-for="(image, index) in images" :key="index" loading="lazy" :src="image" :alt="`Blog post image ${index + 1}`" class="object-contain w-full aspect-[1.54] max-md:max-w-full" :class="{ 'mt-16': index > 0, 'max-md:mt-10': index > 0 }" />
          </div>
        </div>
        <div class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full">
            <article v-for="(post, index) in posts" :key="index" :class="{ 'mt-44': index > 0, 'max-md:mt-10': index > 0 }">
              <p class="self-start uppercase tracking-[3px]">{{ post.category }}</p>
              <h3 class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                {{ post.title }}
              </h3>
              <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                {{ post.content }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import startupBlogPostImage from '@/assets/images/misc/startupblogpost.png';
  import businessBlogPostImage from '@/assets/images/misc/businessblogpost.png';
  import startupBlogPost2Image from '@/assets/images/misc/startupblogpost2.png';
  import techBlogPostImage from '@/assets/images/misc/techblogpost.png';
  
  interface BlogPost {
    category: string;
    title: string;
    content: string;
  }
  
  export default defineComponent({
    name: 'BlogPosts',
    data() {
      return {
        images: [
          startupBlogPostImage,
          businessBlogPostImage,
          startupBlogPost2Image,
          techBlogPostImage,
          startupBlogPostImage
        ],
        posts: [
          {
            category: 'Startup',
            title: 'Design tips for designers that cover everything you need',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          },
          {
            category: 'BUSINESS',
            title: 'How to build rapport with your web design clients',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          },
          {
            category: 'Startup',
            title: 'Logo design trends to avoid in 2022',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          },
          {
            category: 'TECHNOLOGY',
            title: '8 Figma design systems you can download for free today',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          },
          {
            category: 'ECONOMY',
            title: 'Font sizes in UI design: The complete guide to follow',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          }
        ] as BlogPost[]
      };
    }
  });
  </script>