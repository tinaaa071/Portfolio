<template>
    <section
      :id="id"
      class="xl:px-48 xl:py-16 flex items-center justify-center bg-white md:p-10 px-6 py-8"
    >
      <slot></slot>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  };
  </script>

  