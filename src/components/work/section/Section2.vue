<template>
    <Section class="flex flex-col gap-4 text-center md:gap-8">
      <!-- Title -->
      <p class="text-2xl font-bold md:text-3xl">
        {{ $t('work.title.item2') }}
      </p>
      <!-- Brief -->
      <div class="grid gap-4 text-left md:grid-cols-2">
        <div
          v-for="(brief, index) in briefs"
          :key="index"
          class="p-6 text-justify border rounded-lg border-stone-200"
        >
          <p class="mb-2 font-semibold">
            {{ `${(index + 1).toString().padStart(2, '0')} ` }}&ensp;|&ensp;
            <span>
                {{ $t(brief.title) }}
            </span>
          </p>
          <p class="font-normal text-stone-700">
            {{ $t(brief.content) }}
          </p>
        </div>
      </div>
    </Section>
  </template>
  
  <script>
  export default {
    props: {
      briefs: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  