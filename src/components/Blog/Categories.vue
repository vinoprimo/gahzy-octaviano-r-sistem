<template>
  <section class="mt-16 max-md:mt-10">
    <h2 class="self-stretch text-4xl font-bold tracking-tighter leading-none text-center text-gray-800 max-md:max-w-full">
      All Categories
    </h2>
    <div class="mt-16 max-w-full w-[1280px] max-md:mt-10">
      <div class="flex gap-5 max-md:flex-col">
        <router-link 
          v-for="(category, index) in categories" 
          :key="index" 
          to="/categorypage"
          class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
        >
          <article :class="['flex', 'flex-col', 'grow', 'items-start', 'p-8', 'w-full', 'max-md:px-5', 'max-md:mt-8', category.bgClass, category.borderClass]">
            <div v-if="category.iconWrapper" class="flex overflow-hidden relative flex-col w-12 aspect-square fill-orange-50">
              <img loading="lazy" :src="category.iconWrapper" alt="" class="object-cover absolute inset-0 size-full" />
              <img loading="lazy" :src="category.icon" :alt="`${category.title} category icon`" class="object-contain w-full aspect-square" />
            </div>
            <img v-else loading="lazy" :src="category.icon" :alt="`${category.title} category icon`" class="object-contain w-12 aspect-square fill-zinc-100" />
            <h3 :class="['mt-4', 'text-3xl', 'font-bold', 'tracking-tighter', 'leading-none', category.titleClass]">{{ category.title }}</h3>
            <p :class="['self-stretch', 'mt-1', 'text-base', 'leading-7', category.textClass]">
              {{ category.description }}
            </p>
          </article>
        </router-link>
      </div>
    </div>
  </section>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  interface Category {
    title: string;
    description: string;
    icon: string;
    iconWrapper?: string;
    bgClass: string;
    borderClass: string;
    titleClass: string;
    textClass: string;
  }
  
  export default defineComponent({
    name: 'Categories',
    data() {
      return {
        categories: [
          {
            title: 'Business',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/377e070279566959bb85afd144e3a1f93ec2aee13f55b1ed1154abe810997b05?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3',
            iconWrapper: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f6caa464f89441947adf7010f508de88e396385dc4e183a16249f0d3d4ce590?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3',
            bgClass: '',
            borderClass: 'border border-solid border-zinc-500',
            titleClass: 'text-gray-800',
            textClass: 'text-zinc-500'
          },
          {
            title: 'Startup',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2541bc3459cf00b591db109ef9bebc1f77898eb8598624242b2e00eb09b89183?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3',
            bgClass: 'bg-blue-600',
            borderClass: '',
            titleClass: 'text-orange-50',
            textClass: 'text-white'
          },
          {
            title: 'Economy',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5493c471e715d7eacf17e7047e68a050f5b3cb0ab9fe9a9147c0199fdb0f36b7?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3',
            bgClass: '',
            borderClass: 'border border-solid border-zinc-500',
            titleClass: 'text-gray-800',
            textClass: 'text-zinc-500'
          },
          {
            title: 'Technology',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f0317f360fc6b7451c80aabf16648201c0aad1405b64903ced4a998fefd6026d?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3',
            bgClass: '',
            borderClass: 'border border-solid border-zinc-500',
            titleClass: 'text-gray-800',
            textClass: 'text-zinc-500'
          }
        ] as Category[]
      };
    }
  });
  </script>