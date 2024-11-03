<template>
    <div class="mt-8 max-w-full w-[838px]">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16d1ec1b84f8dba41f05e790ec58853d56392fea1ea4ced7a737c6658dff697a?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3" alt="Business related image" class="object-contain grow w-full aspect-[0.94] max-md:mt-8" />
        </div>
        <div class="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
          <article class="flex flex-col self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full">
            <span class="self-start font-semibold leading-none text-amber-300 uppercase tracking-[3px]">Business</span>
            <h2 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
              What did I learn from doing 50+ design sprints?
            </h2>
            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
            </p>
          </article>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'FeaturedArticle',
  });
  </script>