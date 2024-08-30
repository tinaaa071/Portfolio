<template>
    <div class="px-4 py-2 text-xs font-normal text-center bg-white rounded-full sm:text-sm w-fit text-stone-900">
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