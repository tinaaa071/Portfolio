<template>
    <div>
        <h3 class="mb-2 md:text-lg">{{ id }}. {{ title }}</h3>
        <LikertScale v-if="showLikertScale" class="flex flex-col gap-x-6 gap-y-4 md:gap-x-12" />
        <slot name="other"></slot>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        title: String,
        showLikertScale: Boolean,
  }
};
</script>