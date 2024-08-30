<template>
    <div  class="relative w-full h-full ">
      <div class="absolute top-0 left-0 flex flex-col justify-between w-full h-full p-5 text-white transition-all duration-300 ease-in-out lg:opacity-0 sm:p-8 bg-stone-900/20 lg:hover:opacity-100 backdrop-blur-lg">
        <div class="space-y-6 cursor-default">
          <div class="space-y-3">
            <p class="font-medium">
            {{ year }}
            </p>
            <p class="text-2xl font-bold">
              {{ title }}
            </p>
            <p class="hidden text-xl font-light md:block">
              {{ desc }}
            </p>
          </div>
          <div class="flex gap-3">
            <slot name="tag"></slot>
          </div>
        </div>
        <WaveButton :linkTo="linkTo" />
      </div>
      <div class="w-full h-full bg-center bg-cover"
      :style="{ backgroundImage: `url(${backgroundImage})` }">
    </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      activeTab: {
        type: Number,
        required: true
      },
      year: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      desc: {
        type: String,
        required: true
      },
      backgroundImage: {
        type: String,
        required: true
      },
      linkTo: {
      type: String,
      required: true,
    },
    }
  };
</script>
  