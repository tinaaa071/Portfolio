<template>
    <div class="flex overflow-hidden rounded-3xl h-fit">
      <!-- Left Section -->
      <div class="w-1/2 p-8 bg-white">
        <p class="tracking-[.25em] mb-10">
          {{ $t('work.item1') }}
        </p>
        <div class="space-y-5 text-4xl font-extrabold text-stone-400">
          <!-- Project 1 -->
          <button 
          type="button" 
          class="inline-flex leading-normal text-left transition-colors duration-300 ease-in-out focus:text-stone-900 hover:text-stone-900" 
          @click="selectTab(1)"
          >
            <p class="whitespace-nowrap">01 -&nbsp;</p>
            {{ $t('work.project1.title') }}
          </button>
          <!-- Project 2 -->
          <button 
          type="button" 
          class="inline-flex leading-normal text-left transition-colors duration-300 ease-in-out focus:text-stone-900 hover:text-stone-900" 
          @click="selectTab(2)"
          >
            <p class="whitespace-nowrap">02 -&nbsp;</p>
            {{ $t('work.project2.title') }}
          </button>
          <!-- Project 3 -->
          <button 
          type="button" 
          class="inline-flex leading-normal text-left transition-colors duration-300 ease-in-out focus:text-stone-900 hover:text-stone-900" 
          @click="selectTab(3)"
          >
            <p class="whitespace-nowrap">03 -&nbsp;</p>
            {{ $t('work.item4') }}
          </button>
          <!-- Project 4 -->
          <button 
          type="button" 
          class="inline-flex leading-normal text-left transition-colors duration-300 ease-in-out focus:text-stone-900 hover:text-stone-900" 
          @click="selectTab(4)"
          >
            <p class="whitespace-nowrap">04 -&nbsp;</p>
            {{ $t('work.item5') }}
          </button>
        </div>
      </div>
      <!-- Right Section -->
      <div class="w-1/2 ">
        <!-- 專案一 -->
        <WorkDetail 
        :activeTab="activeTab" 
        @selectTab="selectTab"
        year="2024"
        :title="$t('work.project1.title')"
        :desc="$t('work.project1.desc')"
        linkTo="/list_1"
        backgroundImage="https://images.unsplash.com/photo-1723920515274-ace3503adad6?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
            <template #tag>
                <Tag text="123" />
                <Tag text="123" />
                <Tag text="123" />
            </template>
        </WorkDetail>
        <!-- 專案二 -->
        <WorkDetail 
        :activeTab="activeTab" 
        @selectTab="selectTab"
        year="2024"
        :title="$t('work.project2.title')"
        :desc="$t('work.project2.desc')"
        linkTo="/list_1"
        backgroundImage="https://images.unsplash.com/photo-1723920515274-ace3503adad6?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
            <template #tag>
                <Tag text="123" />
                <Tag text="123" />
                <Tag text="123" />
            </template>
        </WorkDetail>
        <!-- 專案三 -->
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
  