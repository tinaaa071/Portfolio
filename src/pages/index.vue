<template>
  <div class="bg-Quaternary">
    <Layout title="過勞量表" >
    <template #content>
      <div class="flex flex-col gap-6 md:gap-10 ">
        <Spline />
        <!-- 說明 -->
        <div class="p-4 tracking-wider text-gray-500 bg-gray-200 md:px-8 rounded-xl">
          <h2>
            親愛的同仁您好:
            <br/>
            此「過勞量表」是勞動部針對過勞壓力反應編製；可協助在短時間內瞭解工作壓力引起的過勞反應或過勞傾向。對於您所提供的資料，將只用於公司醫務室健康管理分析使用，而且絕對保密，請安心填寫，謝謝!
          </h2>
        </div>
  
        <!-- 個人疲勞 -->
        <div>
          <h3 class="pl-4 mb-4 text-lg border-l-8 border-black md:text-2xl">個人疲勞</h3>
          <div class="flex flex-col gap-6">
            <div v-for="(person, index) in person" :key="index" >
              <p class="mb-2 md:text-lg">
                {{ person.id }}.{{ person.title }}
              </p>
              <RadioButtonGroup  :options="['總是', '常常', '有時候', '不常', '從未或幾乎從未']" class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4 md:gap-x-12 h-fit" />
            </div>
          </div>
        </div>

        <!-- 工作疲勞 -->
        <div>
          <h3 class="pl-4 mb-4 text-lg border-l-8 border-black md:text-2xl">工作疲勞</h3>
          <div class="flex flex-col gap-6">
            <div v-for="(work, index) in work" :key="index" >
              <p class="mb-2 md:text-lg">
                {{ work.id }}.{{ work.title }}
              </p>
              <RadioButtonGroup :options="['總是', '常常', '有時候', '不常', '從未或幾乎從未']"  class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4 md:gap-x-12 h-fit" />
            </div>
          </div>
        </div>

        
        <!-- 確認 -->
        <Confirm />

        <!-- 按鈕 -->
        <div class="flex items-center justify-center gap-4">
          <SecondaryButton label="取消" />
          <PrimaryButton label="送出" />
        </div>
      </div>
    </template>
  </Layout>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const person = ref([
      { 
        id: 1,
        name: 'person 1',
        title: ' 你常覺得疲勞嗎?', 
      },
      { 
        id: 2,
        name: 'person 2',
        title: ' 你常覺得身體上體力透支嗎?', 
      },
      { 
        id: 3,
        name: 'person 3',
        title: ' 你常覺得情緒上心力交瘁嗎?', 
      },
      { 
        id: 4,
        name: 'person 4',
        title: ' 你常會覺得，「我快要撐不下去了」嗎?', 
      },
      { 
        id: 5,
        name: 'person 5',
        title: ' 你常覺得精疲力竭嗎?', 
      },
      { 
        id: 6,
        name: 'person 6',
        title: ' 你常常覺得虛弱，好像快要生病了嗎?', 
      },
    ])

    const work = ref([
      { 
        id: 1,
        name: 'work 1',
        title: ' 你的工作會令人情緒上心力交瘁嗎?', 
      },
      { 
        id: 2,
        name: 'work 2',
        title: ' 你的工作會讓你覺得快要累垮了嗎?', 
      },
      { 
        id: 3,
        name: 'work 3',
        title: ' 你的工作會讓你覺得挫折嗎?', 
      },
      { 
        id: 4,
        name: 'work 4',
        title: ' 工作一整天之後，你覺得精疲力竭嗎?', 
      },
      { 
        id: 5,
        name: 'work 5',
        title: ' 上班之前只要想到又要工作一整天，你就覺得沒力嗎?', 
      },
      { 
        id: 6,
        name: 'work 6',
        title: ' 上班時你會覺得每一刻都很難熬嗎?', 
      },
      { 
        id: 7,
        name: 'work 6',
        title: ' 不工作的時候，你有足夠的精力陪朋友或家人嗎?', 
      },
    ])
    
    return {
      person,
      work,
    };
  },
};
</script>