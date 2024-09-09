<template>
  <div class="px-10 py-6 bg-white border w-fit rounded-2xl sm:rounded-3xl">
        <img 
        class="object-cover object-center h-10 min-w-10 "
        :src="iconSrc" 
        alt="">
   </div>
</template>

<script>
export default {
  props: {
    iconSrc: {
      type: String,
      default: '',
    },
  }
};
</script>