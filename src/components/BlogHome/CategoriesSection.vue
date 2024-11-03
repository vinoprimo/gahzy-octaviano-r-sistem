<script setup lang="ts">
import CategoryCard from './CategoryCard.vue';
import BusinessIcon from '@/assets/images/misc/businessicon.svg';
import StartupIcon from '@/assets/images/misc/startupicon.png';
import EconomyIcon from '@/assets/images/misc/economyicon.png';
import TechIcon from '@/assets/images/misc/techicon.png';

const categories = [
  {
    title: 'Business',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    iconSrc: BusinessIcon,
  },
  {
    title: 'Startup',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    iconSrc: StartupIcon,
    isHighlighted: true,
  },
  {
    title: 'Economy',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    iconSrc: EconomyIcon,
  },
  {
    title: 'Technology',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    iconSrc: TechIcon,
  },
];
</script>

<template>
  <section class="flex flex-col mt-28 max-w-full w-[1280px] max-md:mt-10">
    <h2 class="self-center text-4xl font-bold tracking-tighter leading-none text-gray-800">
      Choose A Category
    </h2>
    <div class="mt-12 max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <CategoryCard
          v-for="category in categories"
          :key="category.title"
          v-bind="category"
        />
      </div>
    </div>
  </section>
</template>