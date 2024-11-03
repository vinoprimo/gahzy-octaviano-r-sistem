<template>
    <section data-layername="featuredPosts" class="flex flex-col mt-28 max-w-full w-[1282px] max-md:mt-10">
      <header class="flex gap-5 justify-between text-4xl font-bold leading-none text-gray-800 max-md:mr-0.5 max-md:max-w-full">
        <h2 data-layername="featuredPost" class="tracking-tighter">Featured Post</h2>
        <h2 data-layername="allPosts" class="tracking-tighter">All Posts</h2>
        <a href="#" data-layername="viewAll" class="my-auto text-base leading-7 text-amber-300" tabindex="0">View All</a>
      </header>
      
      <main class="mt-8 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div data-layername="background" class="flex flex-col items-start p-8 mx-auto w-full font-bold border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <img loading="lazy" src="@/assets/images/misc/featuredpostsbuilding.png" alt="Featured blog post" class="object-contain self-stretch w-full aspect-[1.9] max-md:max-w-full" />
              <time datetime="2022-05-23" data-layername="byJohnDoeLMay232022" class="mt-8 text-sm font-medium leading-none text-amber-300">
                By <span class="text-amber-300">John Doe</span> l May 23, 2022
              </time>
              <h3 data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTempor" class="self-stretch mt-4 text-3xl tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </h3>
              <p data-layername="duisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariatur" class="mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <button data-layername="button" class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 max-md:px-5" tabindex="0">
                Read More &gt;
              </button>
            </div>
          </article>
  
          <aside class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
              <article data-layername="shape" class="flex flex-col items-start py-7 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full">
                <time datetime="2021-08-23" data-layername="byJohnDeoLAug232021" class="text-sm font-medium leading-none text-amber-300">
                  By <span class="text-amber-300">John Deo</span> l Aug 23, 2021
                </time>
                <h3 data-layername="8FigmaDesignSystemsThatYouCanDownloadForFreeToday" class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>
  
              <article data-layername="shape" class="flex flex-col items-start py-7 pr-20 pl-8 bg-orange-50 max-md:px-5 max-md:max-w-full">
                <time datetime="2021-08-23" data-layername="byJohnDoeAug232021" class="text-sm font-medium leading-none text-amber-300">
                  By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                </time>
                <h3 data-layername="8FigmaDesignSystemsThatYouCanDownloadForFreeToday" class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>
  
              <article data-layername="shape" class="flex flex-col items-start py-7 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full">
                <time datetime="2021-08-23" data-layername="byJohnDoeAug232021" class="text-sm font-medium leading-none text-amber-300">
                  By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                </time>
                <h3 data-layername="8FigmaDesignSystemsThatYouCanDownloadForFreeToday" class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>
  
              <article data-layername="shape" class="flex flex-col items-start py-7 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full">
                <time datetime="2021-08-23" data-layername="byJohnDoeAug232021" class="text-sm font-medium leading-none text-amber-300">
                  By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                </time>
                <h3 data-layername="8FigmaDesignSystemsThatYouCanDownloadForFreeToday" class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>
            </div>
          </aside>
        </div>
      </main>
    </section>
  </template>
  
  <script lang="ts">
  export default {
    name: 'FeaturedPosts'
  }
  </script>