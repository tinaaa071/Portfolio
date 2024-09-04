<template>
    <div class="grid grid-cols-1 gap-6 p-6 border bg-Quaternary text-stone-800 xl:gap-8 rounded-2xl md:rounded-3xl border-Secondary">
      <!-- Client -->
      <div>
        <p class="mb-2">
          {{ $t('work.infoCard.item1') }}
        </p>
        <p class="font-light">
          {{ info1 }}
        </p>
      </div>
      <!-- Service -->
      <div>
        <p class="mb-2">
          {{ $t('work.infoCard.item2') }}
        </p>
        <ul class="font-light">
          <li v-for="(service, index) in info2" :key="index">
            {{ service }}
          </li>
        </ul>
      </div>
      <!-- Role -->
      <div>
        <p class="mb-2">
          {{ $t('work.infoCard.item3') }}
        </p>
        <ul class="font-light">
          <li v-for="(role, index) in info3" :key="index">
            {{ role }}
          </li>
        </ul>
      </div>
      <!-- Team -->
      <div>
        <p class="mb-2">
          {{ $t('work.infoCard.item4') }}
        </p>
        <!-- Members -->
        <div v-for="(member, index) in info4" :key="index" class="flex items-center space-y-4">
          <!-- Avatar -->
          <img
            :src="member.avatarSrc"
            alt="Avatar"
            class="object-cover w-10 h-10 mr-4 rounded-full"
          />
          <!-- Member Info -->
          <div>
            <p class="font-medium">
              {{ member.job }}
            </p>
            <p class="font-light">
              {{ member.name }}
            </p>
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
      }
    },
  };
  </script>
  