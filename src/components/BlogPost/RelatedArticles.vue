<template>
    <section class="self-stretch mt-32 max-md:mt-10 max-md:max-w-full">
      <h2 class="text-4xl font-bold tracking-tighter leading-none text-center text-black">What to read next</h2>
      <div class="flex gap-5 mt-16 max-md:flex-col max-md:mt-10">
        <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full" v-for="(article, index) in articles" :key="index">
    <div class="flex flex-col grow text-gray-800 max-md:mt-8">
      <img :src="article.imageSrc" :alt="article.imageAlt" class="object-contain w-full aspect-[1.27]" loading="lazy" />
      <div class="self-start mt-8 text-sm font-medium leading-none text-amber-300">
        By <span class="text-amber-300">{{ article.author }}</span> l {{ article.date }}
      </div>
      <h3 class="self-start mt-4 text-3xl font-bold tracking-tighter leading-10">
        {{ article.title }}
      </h3>
      <p class="mt-4 text-base leading-7 opacity-70">
        {{ article.excerpt }}
      </p>
    </div>
  </div>
  </div>
  </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  interface Article {
    imageSrc: string;
    imageAlt: string;
    author: string;
    date: string;
    title: string;
    excerpt: string;
  }
  
  export default defineComponent({
    name: 'RelatedArticles',
    data() {
      return {
        articles: [
          {
            imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3207d0a827cedc46faf276d59f0fc8b2203d729821bbf0b889781c1700fa3c6d?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3',
            imageAlt: 'Related article image 1',
            author: 'John Doe',
            date: 'Aug 23, 2021',
            title: 'A UX Case Study Creating a Studious Environment for Students:',
            excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          },
          {
            imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f21d47a7185526169badde5681df772f45c5c99a9c4124d397268574371d146b?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3',
            imageAlt: 'Related article image 2',
            author: 'John Doe',
            date: 'Aug 23, 2021',
            title: 'A UX Case Study Creating a Studious Environment for Students:',
            excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          },
          {
            imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ec7288a92a97f1e00bd699d9b2121638bad2b50b8b7018140f5618da7fa1d8fe?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3',
            imageAlt: 'Related article image 3',
            author: 'John Doe',
            date: 'Aug 23, 2021',
            title: 'A UX Case Study Creating a Studious Environment for Students:',
            excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          }
        ] as Article[]
      };
    }
  });
  </script>