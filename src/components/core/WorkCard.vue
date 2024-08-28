<template>
    <div class="grid grid-cols-1 overflow-hidden bg-white md:grid-cols-2 text-stone-900 dark:text-white sm:rounded-3xl h-fit dark:bg-stone-800 dark:border dark:border-white rounded-2xl">
      <!-- Left Section -->
      <div class="p-5 sm:p-8">
        <p class="tracking-[.25em] sm:mb-10 mb-8 text-xs xs:text-base sm:text-lg font-bold">
          {{ $t('work.item1') }}
        </p>
        <div class="space-y-5 text-xl font-extrabold xs:text-2xl sm:text-4xl text-stone-400 dark:text-stone-400">
          <!-- Project 1 BTN -->
          <button
            type="button"
            class="inline-flex w-full leading-normal text-left transition-colors duration-300 ease-in-out"
            :class="{
              'text-stone-900 dark:text-white': activeTab === 1,
              'focus:text-stone-900 hover:text-stone-900 dark:focus:text-white dark:hover:text-white': activeTab !== 1
            }"
            @click="selectTab(1)"
          >
            <p class="whitespace-nowrap">01 -&nbsp;</p>
            {{ $t('project1.title') }}
          </button>

          <!-- Project 2 BTN -->
          <button
            type="button"
            class="inline-flex w-full leading-normal text-left transition-colors duration-300 ease-in-out"
            :class="{
              'text-stone-900 dark:text-white': activeTab === 2,
              'focus:text-stone-900 hover:text-stone-900 dark:focus:text-white dark:hover:text-white': activeTab !== 2
            }"
            @click="selectTab(2)"
          >
            <p class="whitespace-nowrap">02 -&nbsp;</p>
            {{ $t('project2.title') }}
          </button>

          <!-- Project 3 BTN -->
          <button
            type="button"
            class="inline-flex w-full leading-normal text-left transition-colors duration-300 ease-in-out"
            :class="{
              'text-stone-900 dark:text-white': activeTab === 3,
              'focus:text-stone-900 hover:text-stone-900 dark:focus:text-white dark:hover:text-white': activeTab !== 3
            }"
            @click="selectTab(3)"
          >
            <p class="whitespace-nowrap">03 -&nbsp;</p>
            {{ $t('project3.title') }}
          </button>

          <!-- Project 4 BTN -->
          <button
            type="button"
            class="inline-flex w-full leading-normal text-left transition-colors duration-300 ease-in-out"
            :class="{
              'text-stone-900 dark:text-white': activeTab === 4,
              'focus:text-stone-900 hover:text-stone-900 dark:focus:text-white dark:hover:text-white': activeTab !== 4
            }"
            @click="selectTab(4)"
          >
            <p class="whitespace-nowrap">04 -&nbsp;</p>
            {{ $t('project4.title') }}
          </button>
        </div>
      </div>
      <!-- Right Section -->
      <div class="h-80 sm:h-96 md:h-auto">
        <!-- 專案一 -->
        <WorkDetail 
        v-if="activeTab === 1"
        :activeTab="activeTab" 
        @selectTab="selectTab"
        year="2024"
        :title="$t('project1.title')"
        :desc="$t('project1.desc')"
        linkTo="/list_1"
        backgroundImage="https://images.unsplash.com/photo-1723920515274-ace3503adad6?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
            <template #tag>
                <Tag :text="$t('work.item3')" />
                <Tag :text="$t('work.item4')" />
                <Tag :text="$t('work.item3')" />
            </template>
        </WorkDetail>
        <!-- 專案二 -->
        <WorkDetail 
        v-if="activeTab === 2"
        :activeTab="activeTab" 
        @selectTab="selectTab"
        year="2024"
        :title="$t('project2.title')"
        :desc="$t('project2.desc')"
        linkTo="/list_1"
        backgroundImage="https://images.unsplash.com/photo-1724271366205-62a20f7cb4e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
            <template #tag>
                <Tag :text="$t('work.item3')" />
                <Tag :text="$t('work.item4')" />
                <Tag :text="$t('work.item3')" />
            </template>
        </WorkDetail>
        <!-- 專案三 -->
        <WorkDetail 
        v-if="activeTab === 3"
        :activeTab="activeTab" 
        @selectTab="selectTab"
        year="1111"
        :title="$t('project3.title')"
        :desc="$t('project3.desc')"
        linkTo="/list_1"
        backgroundImage="https://images.unsplash.com/photo-1723904186792-2db5de01a347?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
            <template #tag>
                <Tag :text="$t('work.item3')" />
                <Tag :text="$t('work.item4')" />
                <Tag :text="$t('work.item3')" />
            </template>
        </WorkDetail>
        <!-- 專案三 -->
        <WorkDetail 
        v-if="activeTab === 4"
        :activeTab="activeTab" 
        @selectTab="selectTab"
        year="1111"
        :title="$t('project4.title')"
        :desc="$t('project4.desc')"
        linkTo="/list_1"
        backgroundImage="https://images.unsplash.com/photo-1688297969982-2d46e66ba2f2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
            <template #tag>
                <Tag :text="$t('work.item3')" />
                <Tag :text="$t('work.item4')" />
                <Tag :text="$t('work.item3')" />
            </template>
        </WorkDetail>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 1
      };
    },
    methods: {
      selectTab(tabIndex) {
        this.activeTab = tabIndex;
      }
    }
  };
  </script>
  