<template>
  <button type="button" class="px-4 py-2 text-blue-400 transition-colors bg-white border-2 border-blue-400 rounded-lg hover:bg-blue-500 hover:text-white hover:border-blue-500">
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