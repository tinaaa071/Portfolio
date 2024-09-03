<template>
    <section
      :id="id"
      class="min-h-screen flex items-center justify-center border-b"
    >
      <h2 class="text-2xl font-bold">{{ title }}</h2>
      <p>{{ content }}</p>
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

  