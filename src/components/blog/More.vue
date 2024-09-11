<template>
    <div class="flex flex-col gap-6 py-8 md:px-10 xl:px-72 xl:py-16 bg-B3 md:py-10 dark:bg-stone-800 dark:border-t dark:border-white/20" 
    v-if="showMore"
    >
      <div class="grid grid-cols-1 gap-8 xs:grid-cols-3 lg:grid-cols-4 xs:gap-x-6 xs:gap-y-10 lg:gap-x-10 lg:gap-y-16">
        <PostCard 
          v-for="post in sortedAndLimitedPosts" 
          :key="post.id" 
          :post="post" 
          :linkTo="post.link"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      posts: {
        type: Array,
        required: true
      },
      showMore: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      sortedAndLimitedPosts() {
        // Assuming 'date' is the property that determines the post's recency
        return this.posts
          .slice()  // Create a shallow copy of the array to avoid mutating the original array
          .sort((a, b) => new Date(b.date) - new Date(a.date))  // Sort posts by date, newest first
          .slice(0, 8);  // Limit to the top 8 posts
      }
    }
  };
  </script>
  