<template>
  <button type="button" class="px-4 py-2 text-white transition-colors bg-blue-400 border-2 border-transparent rounded-lg hover:bg-blue-500">
    {{ label }}
  </button>
</template>

<script>
export default {
props: {
    label: String
}
};
</script>