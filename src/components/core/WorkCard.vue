<template>
    <div class="flex overflow-hidden rounded-3xl h-fit">
      <!-- Left Section -->
      <div class="w-1/2 p-8 bg-white">
        <p class="tracking-[.25em] mb-10">
          {{ $t('work.item1') }}
        </p>
        <div class="space-y-5 text-4xl font-extrabold">
          <!-- Project 1 -->
          <button type="button" class="inline-flex" @click="selectTab(1)">
            <p class="whitespace-nowrap">01 -&nbsp;</p>
            {{ $t('work.project1.title') }}
          </button>
          <!-- Project 2 -->
          <button type="button" class="inline-flex" @click="selectTab(2)">
            <p class="whitespace-nowrap">02 -&nbsp;</p>
            {{ $t('work.item3') }}
          </button>
          <!-- Project 3 -->
          <button type="button" class="inline-flex" @click="selectTab(3)">
            <p class="whitespace-nowrap">03 -&nbsp;</p>
            {{ $t('work.item4') }}
          </button>
          <!-- Project 4 -->
          <button type="button" class="inline-flex" @click="selectTab(4)">
            <p class="whitespace-nowrap">04 -&nbsp;</p>
            {{ $t('work.item5') }}
          </button>
        </div>
      </div>
      <!-- Right Section -->
      <div class="w-1/2 ">
        <div v-if="activeTab === 1" class="relative w-full h-full imgsection1"
        >
          <div class="absolute top-0 left-0 z-10 flex flex-col justify-between w-full h-full p-10 text-white transition-all duration-300 ease-in-out opacity-0 bg-stone-900/20 hover:opacity-100 backdrop-blur-lg">
            <div class="space-y-4 cursor-default">
                <p class="font-medium">
                    2024
                </p>
                <p class="text-2xl font-bold">
                    {{ $t('work.project1.title') }}
                </p>
                <p class="text-xl font-medium">
                    {{ $t('work.project1.desc') }}
                </p>
                <div class="flex gap-3">
                    <Tag text="123" />
                    <Tag text="123" />
                    <Tag text="123" />
                </div>
            </div>
            <WaveButton />
          </div>
          <div class="w-full h-full bg-center bg-cover" 
          style="background-image: url(https://images.unsplash.com/photo-1723920515274-ace3503adad6?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
          </div>
        </div>
        <div v-if="activeTab === 2" class="imgsection2">
          <div>
            <p>aaaa</p>
            <p>bbbb</p>
          </div>
          <img src="" alt="">
        </div>
        <div v-if="activeTab === 3" class="imgsection3">
          <div>
            <p>adas</p>
            <p>fgdd</p>
          </div>
          <img src="" alt="">
        </div>
        <div v-if="activeTab === 4" class="imgsection4">
          <div>
            <p>czccc12121</p>
            <p>453455</p>
          </div>
          <img src="" alt="">
        </div>
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
  