<template>
    <section 
      class="flex flex-wrap gap-10 mt-28 max-w-full text-zinc-500 w-[1237px] max-md:mt-10"
      aria-labelledby="featured-section-title"
    >
      <header class="flex flex-col">
        <p class="self-start text-sm leading-none opacity-60">We are</p>
        <h2 
          id="featured-section-title"
          class="text-2xl font-bold leading-none"
        >
          Featured in
        </h2>
      </header>
      <img 
        loading="lazy" 
        src="@/assets/images/misc/featuredpostsbuilding.png" 
        alt="Featured companies logos"
        class="object-contain grow shrink-0 my-auto aspect-[31.25] basis-0 w-fit max-md:max-w-full"
      />
    </section>
  </template>
  
  <script lang="ts">
  export default {
    name: 'LogoFeature'
  }
  </script>