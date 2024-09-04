<!-- componentB.vue -->
<template>
    <Section>
      <div class="grid grid-cols-10 gap-6 md:gap-10">
        <!-- Left -->
        <InfoCard
          class="col-span-3"
          :info1="info1"
          :info2="info2"
          :info3="info3"
          :info4="info4"
        />
        <!-- Right -->
        <div class="col-span-7">
          <p class="mb-6 font-medium">
            {{ brief }}
          </p>
          <img 
            :src="bannerSrc"
            alt="Avatar"
            class="object-cover w-full xl:rounded-3xl aspect-video rounded-2xl"
          >
        </div>
      </div>
    </Section>
  </template>
  
  <script>
  export default {
    props: {
      info1: {
        type: String,
        required: true,
      },
      info2: {
        type: Array,
        required: true,
      },
      info3: {
        type: String,
        required: true,
      },
      info4: {
        type: Array,
        required: true,
      },
      brief: {
        type: String,
        required: true,
      },
      bannerSrc: {
        type: String,
        default: '',
      },
    },
  };
  </script>
  