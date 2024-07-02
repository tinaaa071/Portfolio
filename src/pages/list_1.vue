<template>
  <Layout title="肌肉骨骼症狀調查表">
    <template #content>
      <div class="flex flex-col gap-6 md:gap-10">
        <!-- 問題 -->
        <div class="flex flex-col gap-6">
            <div v-for="(question, index) in question" :key="index" >
              <p class="mb-2 md:text-lg">
                {{ question.id }}.{{ question.title }}
              </p>
              <RadioButtonGroup :options="question.dataset"  class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-4 md:gap-x-12 h-fit" />
            </div>
          </div>
        <!-- 說明 -->
        <div class="flex flex-col items-start p-4 bg-gray-100 lg:flex-row md:px-8 rounded-xl">
          <h3 class="mb-2 mr-4 md:text-lg">填寫說明</h3>
          <div class="flex flex-col">
            <p 
            v-for="(item, index) in info" :key="index"
            class="mb-2 md:text-lg"
            >
            {{ item.id }}，
            <span class="font-light">
              {{ item.label }}
            </span>
          </p>
          </div>
        </div>

        <!-- 症狀圖表 -->
        <div>
          <img src="@/assets/body.png" alt="" class="mx-auto mb-8 h-[32rem] aspect-auto">
          <Table :columns="columns" :data="data" />
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
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const question = ref([
      { 
        id: 1,
        name: 'question 1',
        title: ' 您平常使用電腦、滑鼠慣用手為?', 
        dataset: ['左手', '右手'] 
      },
      { 
        id: 2,
        name: 'question 2',
        title: ' 您在過去的 1 年內，身體是否有長達 2 星期以上的疲勞、酸痛、發麻、刺痛等不舒服，或關節活動受到限制?', 
        dataset: ['否', '是']
      },
      { 
        id: 3,
        name: 'question 3',
        title: ' 下表的身體部位酸痛、不適或影響關節活動之情形持續多久時間?', 
        dataset: ['1 個月', '3 個月', '6 個月', '1 年', '3 年', '3 年以上']
      },
    ])

    const info = ref([
      { 
        id: '0 : 不痛', 
        label: '關節可以自由活動。' 
      },
      { 
        id: '1 : 微痛', 
        label: '關節活動到極限會酸痛，可以忽略。' 
      },
      { 
        id: '2 : 中等疼痛', 
        label: '關節活動超過一半會酸痛，但是可以完成全部活動範圍，可能影響工作。' 
      },
      { 
        id: '3 : 劇痛', 
        label: '關節活動只有正常人的一半，會影響工作。' 
      },
      { 
        id: '4 : 非常劇痛', 
        label: '關節活動只有正常人的 1/4，影響自主活動能力。' 
      },
      { 
        id: '5 : 極度劇痛', 
        label: '身體完全無法自主活動。' 
      },
    ]);

    return {
      question,
      info
    };
  },
};
</script>