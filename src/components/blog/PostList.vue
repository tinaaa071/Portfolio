<template>
    <div class="posts">
      <div v-for="post in posts" :key="post.id" class="post">
        <img :src="post.image" :alt="post.title" class="post-image" />
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </div>
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
  
  <style scoped>
  .posts {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .post {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    width: 80%;
  }
  
  .post-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  </style>
  