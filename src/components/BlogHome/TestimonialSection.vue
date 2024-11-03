<template>
    <section data-layername="background" class="flex flex-col justify-center items-center px-16 py-20 w-full bg-orange-50 max-md:px-5 max-md:max-w-full mt-16">
      <div class="flex flex-wrap gap-5 justify-between w-full max-w-[1057px] max-md:max-w-full">
        <article class="flex flex-col items-start self-start mt-3 text-base text-gray-800">
          <h2 data-layername="testimoniaLs" class="font-semibold leading-none uppercase tracking-[3px]">
            TESTIMONIALS
          </h2>
          <h3 data-layername="whatPeopleSayAboutOurBlog" class="mt-3 text-4xl font-bold tracking-tighter leading-10">
            What people say about our blog
          </h3>
          <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTempor" class="self-stretch mt-4 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </article>
        <div class="shrink-0 w-px border border-solid opacity-40 bg-zinc-500 border-zinc-500 h-[310px]"></div>
        <article class="flex flex-col max-md:max-w-full">
          <blockquote data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliqua" class="self-start text-2xl font-bold leading-8 text-gray-800 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </blockquote>
          <div class="flex flex-wrap gap-5 justify-between items-start mt-28 w-full max-md:mt-10 max-md:max-w-full">
            <figure class="flex gap-4 mt-2">
              <img loading="lazy" src="@/assets/images/misc/jonathanvallem.png" alt="Profile picture of Jonathan Vallem" class="object-contain shrink-0 self-start w-12 rounded-full aspect-square" />
              <figcaption class="flex flex-col">
                <h4 data-layername="jonathanVallem" class="text-2xl font-bold leading-none text-gray-800">
                  Jonathan Vallem
                </h4>
                <p data-layername="newYorkUsa" class="self-start text-base leading-7 text-zinc-500">
                  New york, USA
                </p>
              </figcaption>
            </figure>
            <div class="flex gap-6">
              <img loading="lazy" src="@/assets/images/misc/arrowleft.svg" alt="" class="object-contain shrink-0 my-auto w-12 aspect-square" />
              <img loading="lazy" src="@/assets/images/misc/arrowright.svg" alt="" class="object-contain shrink-0 aspect-square w-[62px]" />
            </div>
          </div>
        </article>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  export default {
    name: 'TestimonialSection'
  }
  </script>