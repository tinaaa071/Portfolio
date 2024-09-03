<template>
    <div class="p-6 bg-Quaternary text-stone-800 grid grid-cols-1 gap-6 xl:gap-10 rounded-2xl md:rounded-3xl border border-Secondary">
      <!-- Client -->
      <div>
        <p class="mb-2">{{ $t('project1.brief.item1') }}</p>
        <p class="font-light">{{ info1 }}</p>
      </div>
      <!-- Service -->
      <div>
        <p class="mb-2">{{ $t('project1.brief.item2') }}</p>
        <ul class="font-light">
          <li v-for="(service, index) in info2" :key="index">
            {{ service }}
          </li>
        </ul>
      </div>
      <!-- Role -->
      <div>
        <p class="mb-2">{{ $t('project1.brief.item3') }}</p>
        <p class="font-light">{{ info3 }}</p>
      </div>
      <!-- Team -->
      <div>
        <p class="mb-2">{{ $t('project1.brief.item4') }}</p>
        <!-- Members -->
        <div v-for="(member, index) in info4" :key="index" class="flex items-center mb-4">
          <!-- Avatar -->
          <img
            :src="member.avatarSrc"
            alt="Avatar"
            class="object-cover w-10 h-10 rounded-full mr-4"
          />
          <!-- Member Info -->
          <div>
            <p class="font-medium">{{ member.job }}</p>
            <p class="font-light">{{ member.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      info1: {
        type: String,
        required: true,
      },
      info2: {
        type: Array,
        required: true,
      },
      info3: {
        type: String,
        required: true,
      },
      info4: {
        type: Array,
        required: true,
      },
      tagText1: {
        type: String,
        required: true,
      },
      tagText2: {
        type: String,
        required: true,
      },
      tagText3: {
        type: String,
        required: true,
      },
      tagText4: {
        type: String,
        required: true,
      },
      tagText5: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  