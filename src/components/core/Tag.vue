<template>
    <div class="px-4 py-1 text-xs font-medium text-center bg-white rounded-full w-fit text-stone-900">
        {{ text }}
    </div>
</template>

<script>
export default {
props: {
    text: String
}
};
</script>