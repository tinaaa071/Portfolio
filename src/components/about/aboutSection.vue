<template>
    <section
      :id="id"
      class="px-6 mx-auto sm:px-10 xl:px-28 md:py-16 dark:bg-stone-900"
    >
      <p class="mb-8 text-xl font-semibold">
        {{ title }}
      </p>
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

  