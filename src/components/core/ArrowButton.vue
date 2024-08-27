<template>
  <RouterLink :to="linkTo">
    <div class="inline-block m-2 text-lg text-center bg-white border border-white rounded-full bg-opacity-20 hover backdrop-blur-md arrow" :data-hover="hoverIcon">
    </div>
  </RouterLink>
</template>
  
<script>
export default {
  props: {
    linkTo: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      hoverIcon: '↑'
    };
  }
};
</script>

<style scoped>

.arrow.hover {
  font-weight: bold;
  color: transparent;
  position: relative;
  backface-visibility: hidden;
  width: 60px; /* Set a fixed width */
  height: 60px; /* Set a fixed height */
  line-height: 60px; /* Center the text vertically */
  transform: rotate(45deg); /* Rotate the button by 45° */
}

.arrow.hover::before,
.arrow.hover::after {
  content: attr(data-hover);
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 0.3s;
}

.arrow.hover::before {
  opacity: 1;
  color: white;
}

.arrow.hover::after {
  color: white;
  margin-top: 1em;
}

.arrow.hover:hover::before {
  opacity: 0;
  margin-top: -1em;
}

.arrow.hover:hover::after {
  opacity: 1;
  margin-top: 0;
}
</style>
  