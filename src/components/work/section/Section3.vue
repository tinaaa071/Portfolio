<template>
    <Section class="grid gap-6 xl:grid-cols-10">
      <!-- Title -->
      <p class="sticky text-sm font-semibold top-5 xl:col-span-2 text-Primary h-fit">
        {{ title }}
      </p>
      <!-- Content -->
      <div class="xl:col-span-8">
        <slot name="content"></slot>
      </div>
    </Section>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  