<template>
  <div 
  class="relative w-full h-56 overflow-hidden font-semibold border shadow rounded-2xl sm:rounded-3xl aspect-5/4 group border-B4"
  >
    <div class="absolute p-6">
    <p class="mb-2 text-xl text-white group-hover:hidden">
        {{ title }}
    </p>
        </div>
        <div class="absolute w-full p-6 transition-all duration-300 ease-in-out bg-white -top-32 group-hover:top-0">
        <p class="mb-2 text-xl">
            {{ title }}
        </p>
        <p>
            {{ info }}
        </p>
        </div>
        <div class="mt-0 transition-all duration-300 ease-in-out group-hover:mt-20">
        <img 
        class="object-cover"
        :src="cardSrc" 
        alt="">
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    cardSrc: {
      type: String,
      default: '',
    },
  }
};
</script>