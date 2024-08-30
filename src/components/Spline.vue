<template>
  <div class="">
    <iframe
      :src="splineUrl"
      frameborder="0"
      allowfullscreen
      loading="lazy"
      class="w-full h-[600px]" 
    ></iframe>
  </div>
</template>

<script setup>
const splineUrl = 'https://my.spline.design/forestphysicscopy-57a16d8cc89586bfc4a9c9bae05dbafd/'; 
</script>