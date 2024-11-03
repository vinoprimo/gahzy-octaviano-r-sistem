<script setup lang="ts">
interface AuthorProps {
  name: string;
  imageSrc: string;
  ratingSrc: string;
}

defineProps<AuthorProps>();
</script>

<template>
  <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div class="flex flex-col grow items-center px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8">
      <img :src="imageSrc" :alt="name" class="object-contain w-32 max-w-full rounded-full aspect-square" />
      <h3 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">{{ name }}</h3>
      <p class="self-stretch text-sm text-center text-zinc-500">Content Writer @Company</p>
      <img :src="ratingSrc" alt="" class="object-contain mt-5 w-28 max-w-full aspect-[6.58]" />
    </div>
  </article>
</template>