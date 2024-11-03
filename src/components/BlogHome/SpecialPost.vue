<template>
    <article data-layername="specialPost" class="flex flex-col items-start mt-28 max-w-full text-base font-bold w-[1280px] max-md:pr-5 max-md:mt-10">
      <section class="flex relative flex-col items-end px-20 pt-32 max-w-full min-h-[705px] w-[949px] max-md:pt-24 max-md:pl-5">
        <img 
          loading="lazy" 
          src="@/assets/images/misc/specialpost.png" 
          alt="Special post background image"
          class="object-cover absolute inset-0 size-full" 
        />
        <section data-layername="background" class="flex relative flex-col p-20 mr-0 max-w-full bg-white w-[706px] max-md:px-5">
          <h2 data-layername="whyWeStarted" class="self-start font-semibold leading-none text-gray-800 uppercase tracking-[3px]">
            Why we started
          </h2>
          <h3 data-layername="title" class="mt-6 text-5xl tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
            It started out as a simple idea and evolved into our passion
          </h3>
          <p data-layername="description" class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <button 
            data-layername="button" 
            class="gap-3 self-start px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 max-md:px-5"
            aria-label="Discover our story"
            tabindex="0"
          >
            Discover our story &gt;
          </button>
        </section>
      </section>
    </article>
  </template>
  
  <script lang="ts">
  export default {
    name: 'SpecialPost'
  }
  </script>