<template>
    <Navbar class="z-10" />
  
    <!-- 內容區塊 -->
    <section class="h-full">
      <div class="container max-w-5xl px-4 py-6 mx-auto sm:px-6 lg:px-8 lg:py-10">
        <h1 class="mb-8 text-xl text-center md:mb-10 md:text-3xl">{{ title }}</h1>
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