<template>
    <div class="px-3 py-2 font-normal text-center bg-white rounded-full cursor-default text-xxs md:text-xs w-fit text-stone-500 xl:text-sm">
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