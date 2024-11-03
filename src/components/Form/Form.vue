<template>
    <div class="bg-pink-200 flex justify-center items-center min-h-screen py-8">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 class="text-2xl font-bold mb-6 text-center">Form Pemesanan</h1>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label class="block text-gray-700">Nama Pembeli</label>
            <input type="text" v-model="namaPembeli" class="w-full px-3 py-2 border rounded-lg" placeholder="Type here">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Nomor Whatsapp</label>
            <input type="text" v-model="nomorWhatsapp" class="w-full px-3 py-2 border rounded-lg" placeholder="Type here">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Alamat</label>
            <input type="text" v-model="alamat" class="w-full px-3 py-2 border rounded-lg" placeholder="Type here">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Gambar Referensi</label>
            <input type="file" @change="handleFileUpload" class="w-full px-3 py-2 border rounded-lg">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Jumlah Buket</label>
            <input type="number" v-model="jumlahBuket" class="w-full px-3 py-2 border rounded-lg" placeholder="Type here">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Catatan Tambahan</label>
            <textarea v-model="catatanTambahan" class="w-full px-3 py-2 border rounded-lg" placeholder="Type here"></textarea>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Pengiriman</label>
            <div class="flex items-center">
              <input type="radio" v-model="pengiriman" value="Delivery" class="mr-2"> Delivery
              <input type="radio" v-model="pengiriman" value="Pickup" class="ml-4 mr-2"> Pickup
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Tanggal Pickup/Pengiriman</label>
            <input type="date" v-model="tanggalPengiriman" class="w-full px-3 py-2 border rounded-lg">
          </div>
          <button type="submit" class="w-full bg-purple-500 text-white py-2 rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'OrderForm',
    data() {
      return {
        namaPembeli: '' as string,
        nomorWhatsapp: '' as string,
        alamat: '' as string,
        gambarReferensi: null as File | null,
        jumlahBuket: '' as string,
        catatanTambahan: '' as string,
        pengiriman: '' as string,
        tanggalPengiriman: '' as string
      };
    },
    methods: {
      handleFileUpload(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          this.gambarReferensi = target.files[0];
        }
      },
      submitForm() {
        console.log('Form submitted:', this.$data);
        // Add your form submission logic here
      }
    }
  });
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  