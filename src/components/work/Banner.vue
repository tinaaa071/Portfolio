<template>
    <div class="fixed top-0 left-0 w-full h-[560px]">
      <div class="relative w-full h-full">
        <!-- bg -->
        <img
          :src="bannerSrc"
          class="absolute top-0 left-0 z-0 object-cover w-full h-full"
        />
        <!-- title -->
        <h1
          class="absolute bottom-0 z-10 mb-5 text-5xl font-semibold text-white transform -translate-x-1/2 left-1/2"
        >
          {{ title }}
        </h1>
        <!-- tools -->
        <IconGroup 
        :iconsVisible="iconsVisible" 
        class="absolute z-10 right-5 bottom-5" 
        />
        <div>
            
        </div>
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
      bannerSrc: {
        type: String,
        default: '',
      },
      iconsVisible: {
      type: Array,
      default: () => [false, false, false, false, false],
    },
    },
  };
  </script>
  