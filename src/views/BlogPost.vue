<template>
    <div class="flex overflow-hidden flex-col bg-white">
      <main class="flex flex-col items-center px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <AuthorInfo
          name="Andrew Jonson"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/02d592130db1c41c9a9757680afcdcdffaa6660ac2194ecb46c25b2f9bc54b98?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3"
          category="Startup"
          categoryIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e59dd3303e7bdbe8921af21d1030f0ef34c61c6164fc0d8a05870b6e53dd0205?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3"
        />
        <h2 class="mt-9 text-5xl font-bold tracking-tighter text-gray-800 leading-[64px] w-[768px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
          Step-by-step guide to choosing great font pairs
        </h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ca70ab41cd50876d42b34422871941e1c1c71067dbbd564c155ce2d8f466130?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3"
          alt="Illustration related to font pairing"
          class="object-contain self-stretch mt-16 w-full aspect-[2.2] max-md:mt-10 max-md:max-w-full"
        />
        <ArticleSection
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non."
        />
        <ArticleSection
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          :content="[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.'
          ]"
        />
        <BulletPoints
          :points="[
            'Lorem ipsum dolor sit amet',
            'Non blandit massa enim nec scelerisque',
            'Neque egestas congue quisque egestas'
          ]"
        />
        <p class="mt-6 text-base leading-7 text-zinc-500 max-w-[836px] max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </p>
        <ArticleSection
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non."
        />
        <RelatedArticles />
        <hr class="shrink-0 self-stretch mt-16 h-px border border-solid opacity-30 bg-zinc-500 border-zinc-500 max-md:mt-10 max-md:max-w-full" />
        <JoinTeamSection />
      </main>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import AuthorInfo from '@/components/BlogPost/AuthorInfo.vue';
  import ArticleSection from '@/components/BlogPost/ArticleSection.vue';
  import BulletPoints from '@/components/BlogPost/BulletPoints.vue';
  import RelatedArticles from '@/components/BlogPost/RelatedArticles.vue';
  import JoinTeamSection from '@/components/BlogPost/JoinTeamSection.vue';
  
  export default defineComponent({
    name: 'BlogPost',
    components: {
      AuthorInfo,
      ArticleSection,
      BulletPoints,
      RelatedArticles,
      JoinTeamSection,
    },
  });
  </script>
  
  <style scoped>
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  </style>