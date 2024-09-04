<template>
    <section
      :id="id"
      class="flex items-center justify-center px-6 py-8 bg-white xl:px-56 md:p-10"
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

  