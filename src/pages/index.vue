<template>
  <div class="bg-Quaternary">
    <Layout>
    <template #content>
      <div class="grid grid-flow-row-dense grid-cols-4 grid-rows-2 gap-4">
        <div class="col-span-2 p-8 bg-white rounded-3xl">
          <div class="flex items-center space-x-6">
            <div class="bg-center bg-cover rounded-full w-36 h-36"
            style="background-image: url(https://images.unsplash.com/photo-1723920515274-ace3503adad6?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
            </div>
            <div>
              <p class="mb-2 text-4xl font-bold">
                {{ $t('hero.item1') }}
              </p>
              <p class="inline-flex text-4xl font-bold">
                {{ $t('hero.item2') }}
                <Typewriter class="ml-2" />
              </p>
            </div>
          </div>
        </div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
      </div>
      <div class="flex flex-col gap-6 md:gap-10 ">
        <Spline />
        
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