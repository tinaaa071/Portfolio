<template>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-4 md:gap-x-6 md:gap-y-10 xl:gap-x-10 xl:gap-y-16">
      <PostCard 
      v-for="post in posts" 
      :key="post.id" 
      :post="post" 
      :linkTo="`/post/${post.id}`"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "PostList",
    props: {
      posts: {
        type: Array,
        default: () => [], // Set a default value to avoid undefined errors
      },
    },
  };
  </script>
  