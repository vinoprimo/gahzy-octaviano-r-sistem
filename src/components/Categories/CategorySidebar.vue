<template>
    <aside class="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
      <div class="flex flex-col w-full text-3xl font-bold tracking-tighter leading-none text-gray-800 whitespace-nowrap max-md:mt-10">
        <h3 class="self-start text-4xl tracking-tighter leading-none">Categories</h3>
        <div class="flex gap-4 p-6 mt-10 text-white bg-blue-600 max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cdb0f39105b8db04e819c5705d2c16f9d34a257f4671e9d403c93fe8bda9f9a?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3" alt="" class="object-contain shrink-0 w-12 aspect-square" />
          <span class="grow shrink my-auto w-[174px]">Startup</span>
        </div>
        <div class="flex gap-4 p-6 mt-6 border-2 border-solid border-stone-300 max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f1c2a4aaec462aeb2d3546218e687d6333070aaf180c01c1ea48ec878c15048?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3" alt="" class="object-contain shrink-0 w-12 aspect-square" />
          <span class="grow shrink my-auto w-[174px]">Business</span>
        </div>
      </div>
      <div class="flex flex-col w-full text-sm font-bold leading-8 text-gray-800 max-md:mt-10">
        <div class="flex gap-4 p-6 text-3xl tracking-tighter leading-none whitespace-nowrap border-2 border-solid border-stone-300 max-md:px-5 max-md:mr-0.5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fad59694eb8ea9bd60462f6aaab06cca9b980bfd207e3eb6ca9977969fe3843d?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3" alt="" class="object-contain shrink-0 w-12 aspect-square" />
          <span class="grow shrink my-auto w-[174px]">Economy</span>
        </div>
        <div class="flex gap-4 p-6 mt-6 text-3xl tracking-tighter leading-none whitespace-nowrap border-2 border-solid border-stone-300 max-md:px-5 max-md:mr-0.5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9356494b9256725ddf0fdf52edb7076ee6741e80d1f9be22b5413548c3fd64c3?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3" alt="" class="object-contain shrink-0 w-12 aspect-square" />
          <span class="grow shrink my-auto w-[174px]">Technology</span>
        </div>
        <h3 class="self-start mt-12 text-4xl tracking-tighter leading-none max-md:mt-10">All Tags</h3>
        <div class="flex gap-4 mt-6 w-full whitespace-nowrap">
          <button class="gap-2.5 self-stretch px-10 py-2 rounded-3xl border-2 border-solid border-zinc-500 max-md:px-5">
            Business
          </button>
          <button class="gap-2.5 self-stretch px-9 py-2 rounded-3xl border-2 border-solid border-zinc-500 max-md:px-5">
            Experience
          </button>
        </div>
        <div class="flex gap-4 mt-4 w-full whitespace-nowrap">
          <button class="gap-2.5 self-stretch py-2 pr-7 pl-7 rounded-3xl border-2 border-solid border-zinc-500 min-h-[48px] max-md:px-5">
            Screen
          </button>
          <button class="gap-2.5 self-stretch px-12 py-2 rounded-3xl border-2 border-solid border-zinc-500 min-h-[48px] max-md:px-5">
            Technology
          </button>
        </div>
        <div class="flex gap-4 mt-4 w-full whitespace-nowrap">
          <button class="gap-2.5 px-14 py-2 rounded-3xl border-2 border-solid border-zinc-500 max-md:px-5">
            Marketing
          </button>
          <button class="gap-2.5 px-10 py-2 rounded-3xl border-2 border-solid border-zinc-500 max-md:px-5">
            Life
          </button>
        </div>
      </div>
    </aside>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'CategorySidebar',
  });
  </script>