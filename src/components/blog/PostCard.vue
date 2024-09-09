<template>
    <RouterLink :to="linkTo" >
        <div class="w-full overflow-hidden rounded-lg aspect-video">
            <img 
            :src="post.image" 
            :alt="post.title" 
            class="object-cover w-full h-full transition-all duration-300 ease-in-out hover:scale-125"
            />
        </div>
      
      <p class="px-2 py-3 mb-3 text-xs font-medium border-b md:py-3 xl:px-4 border-stone-200 text-stone-500">
        {{ post.date }}
      </p>
      <p class="px-2 text-base font-medium md:text-sm xl:text-base xl:px-4">
        {{ post.title }}
      </p>
    </RouterLink>
  </template>
  
  <script>
  export default {
    name: "PostItem",
    props: {
      linkTo: {
        type: String,
        required: true,
      },  
      post: {
        type: Object,
        required: true,
      },
    },
  };
  </script>