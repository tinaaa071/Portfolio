<template>
    <div  class="relative w-full h-full ">
      <div class="absolute top-0 left-0 z-10 flex flex-col justify-between w-full h-full p-10 text-white transition-all duration-300 ease-in-out opacity-0 bg-stone-900/20 hover:opacity-100 backdrop-blur-lg">
        <div class="space-y-4 cursor-default">
          <p class="font-medium">{{ year }}</p>
          <p class="text-2xl font-bold">{{ title }}</p>
          <p class="text-xl font-medium">{{ desc }}</p>
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
  