<template>
    <div class="cursor-default">
      <!-- title -->
      <div class="relative z-10 mb-5 sm:mb-8">
        <h1 class="text-2xl font-semibold text-center text-white dark:text-stone-900 lg:text-5xl sm:text-4xl ">
          {{ title }}
        </h1>
        <!-- tools -->
        <IconGroup 
          :iconsVisible="iconsVisible" 
          class="absolute bottom-0 text-right right-5" 
        />
      </div>
      <!-- Info -->
      <div class="flex flex-col w-full gap-6 px-6 py-8 lg:gap-10 bg-Quaternary dark:bg-stone-800 text-stone-800 sm:gap-8 xl:px-28 md:p-10 xl:py-14 dark:text-white dark:border-stone-500 dark:border-b">
        <!-- Tag + BTN -->
        <div class="flex items-center justify-between">
          <!-- Tag -->
          <div class="flex gap-2 sm:gap-3">
            <Tag :text="tagText1" v-if="tagVisible[0]" aria-hidden="true" />
            <Tag :text="tagText2" v-if="tagVisible[1]" aria-hidden="true" />
            <Tag :text="tagText3" v-if="tagVisible[2]" aria-hidden="true" />
            <Tag :text="tagText4" v-if="tagVisible[3]" aria-hidden="true" />
            <Tag :text="tagText5" v-if="tagVisible[4]" aria-hidden="true" />
          </div>
          <!-- BTN -->
          <MagneticButton 
            :linkTo="linkTo" 
            :icon="icon" 
            :text="$t('work.core.item5')"
            class="hidden sm:block"
            />
        </div>
        <!-- Title -->
        <h2 class="text-2xl font-bold lg:text-5xl sm:text-4xl">
          {{ title }}
        </h2>
        <!-- Info Sections -->
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12 lg:grid-cols-4">
          <div>
            <p class="mb-2">{{ $t('work.info.item1') }}</p>
            <p class="font-light">{{ info1 }}</p>
          </div>
          <div>
            <p class="mb-2">{{ $t('work.info.item2') }}</p>
            <p class="font-light">{{ info2 }}</p>
          </div>
          <div>
            <p class="mb-2">{{ $t('work.info.item3') }}</p>
            <p class="font-light">{{ info3 }}</p>
          </div>
          <div>
            <p class="mb-2">{{ $t('work.info.item4') }}</p>
            <p class="font-light">{{ info4 }}</p>
          </div>
        </div>
        <!-- BTN -->
        <MagneticButton 
            :linkTo="linkTo" 
            :icon="icon" 
            :text="$t('work.core.item5')"
            class="sm:hidden"
            />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      info1: {
        type: String,
        required: true,
      },
      info2: {
        type: String,
        required: true,
      },
      info3: {
        type: String,
        required: true,
      },
      info4: {
        type: String,
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
      tagVisible: {
        type: Array,
        default: () => [false, false, false, false, false],
        validator: (value) => value.length === 5 && value.every((item) => typeof item === 'boolean'),
      },
      iconsVisible: {
        type: Array,
        default: () => [false, false, false, false, false],
      },
      linkTo: {
        type: String,
        required: true,
      },
      icon: {
        type: [Object, Function],
        required: true,
        },
      showIcon: {
        type: Boolean,
        default: true,
       },
    }
  };
  </script>
  