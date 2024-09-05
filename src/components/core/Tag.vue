<template>
    <div class="px-3 py-2 font-medium text-center bg-white rounded-full cursor-default text-xxs md:text-xs w-fit text-stone-500 xl:text-sm dark:bg-transparent dark:border dark:border-white dark:text-white">
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