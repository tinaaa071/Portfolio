<template>
    <div class="">
      <div class="w-full aspect-video">
        <img 
        :src="post.image" 
        :alt="post.title" 
        class="object-cover w-full h-full"
      />
      </div>
      <p>{{ post.date }}</p>
      <p>{{ post.title }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "PostItem",
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: add additional styling if needed */
  </style>
  