<script setup lang="ts">
import AuthorCard from './AuthorCard.vue';
import FloydMiles from '@/assets/images/misc/floydmiles.png';
import SocMed from '@/assets/images/misc/socmed.svg';
import DianneRussel from '@/assets/images/misc/diannerussel.png';
import JennyWilson from '@/assets/images/misc/jennywilson.png';
import LeslieAlex from '@/assets/images/misc/lesliealex.png';

const authors = [
  {
    name: 'Floyd Miles',
    imageSrc: FloydMiles,
    ratingSrc: SocMed
  },
  {
    name: 'Dianne Russell',
    imageSrc: DianneRussel,
    ratingSrc: SocMed
  },
  {
    name: 'Jenny Wilson',
    imageSrc: JennyWilson,
    ratingSrc: SocMed
  },
  {
    name: 'Leslie Alexander',
    imageSrc: LeslieAlex,
    ratingSrc: SocMed
  }
];
</script>

<template>
  <section class="flex flex-col mt-28 max-w-full w-[1280px] max-md:mt-10">
    <h2 class="self-center text-4xl font-bold tracking-tighter leading-none text-gray-800">
      List of Authors
    </h2>
    <div class="mt-12 max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <AuthorCard
          v-for="author in authors"
          :key="author.name"
          :name="author.name"
          :image-src="author.imageSrc"
          :rating-src="author.ratingSrc"
        />
      </div>
    </div>
  </section>
</template>