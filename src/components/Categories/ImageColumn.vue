<template>
    <div class="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
      <div class="flex flex-col grow max-md:mt-8">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16d1ec1b84f8dba41f05e790ec58853d56392fea1ea4ced7a737c6658dff697a?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3" alt="Business related image 1" class="object-contain w-full aspect-[0.94]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16d1ec1b84f8dba41f05e790ec58853d56392fea1ea4ced7a737c6658dff697a?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3" alt="Business related image 2" class="object-contain mt-8 w-full aspect-[0.94]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16d1ec1b84f8dba41f05e790ec58853d56392fea1ea4ced7a737c6658dff697a?placeholderIfAbsent=true&apiKey=b97efc92a3ca4b8aae4989404084baf3" alt="Business related image 3" class="object-contain mt-8 w-full aspect-[0.94] max-md:mr-0.5" />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ImageColumn',
  });
  </script>