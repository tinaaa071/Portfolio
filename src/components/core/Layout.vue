<template>
    <Navbar class="z-10" />
  
    <!-- 內容區塊 -->
    <section class="h-full">
      <div class="px-6 py-6 mx-auto pt-28 md:px-10 xl:px-28 md:pt-36">
        <!-- <h1 class="mb-8 text-xl text-center md:mb-10 md:text-3xl">{{ title }}</h1> -->
        <slot name="content"></slot>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
        title: String
    }
  };
  </script>