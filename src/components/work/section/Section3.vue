<template>
  <Section class="grid gap-6 md:grid-cols-10">
    <!-- Title -->
    <div
      ref="stickyTitle"
      :class="[
        'sticky top-0 text-sm font-semibold md:top-5 md:col-span-2 text-Primary h-fit transition duration-300', // Transition classes added here
        isSticky ? 'from-stone-300/50 text-stone-400 text-center py-4 backdrop-blur bg-gradient-to-b mix-blend-difference' : '', // Add background color when sticky
      ]"
    >
      {{ title }}
    </div>
    <!-- Content -->
    <div class="md:col-span-8">
      <slot name="content"></slot>
    </div>
  </Section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const stickyTitle = ref(null);
    const isSticky = ref(false);

    const handleScroll = () => {
      if (stickyTitle.value) {
        // Check if the element is at the top of the viewport
        const { top } = stickyTitle.value.getBoundingClientRect();
        isSticky.value = top <= 0; // Adjust condition as needed
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return { stickyTitle, isSticky };
  },
};
</script>
