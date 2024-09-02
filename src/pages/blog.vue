<template>
    <Layout title="健康檢查調查表">
      <template #content>
        <div class="flex flex-col gap-6 mb-6 md:gap-10">
          <!-- 個人疲勞 -->
          <div>
            <h3 class="pl-4 mb-4 text-lg border-l-8 border-black md:text-2xl">
                基本資料
            </h3>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
                <Input label="姓名" placeholder="請輸入姓名"/>
                <div>
                  <Input label="性別" :showInput="false" />
                  <RadioButtonGroup :options="['男', '女']" class="flex gap-6" />
                </div>
                <Input label="身分證字號 (護照號碼)" placeholder="請輸入身分證字號" :showInput="true" />
                <Input label="出生日期" placeholder="請輸入姓名" :showInput="false" :showDateInput="true"/>
                <Input label="受僱日期（公司團體專用）" placeholder="請輸入姓名" :showInput="false" :showDateInput="true" />
                <Input label="E-MAIL" placeholder="請輸入E-MAIL"/>
                <Input label="電話（公）" placeholder="請輸入電話" />
                <Input label="電話（家）" placeholder="請輸入電話" />
                <Input label="電話（行動）" placeholder="請輸入電話" />
                <Input label="通訊地址" placeholder="請輸入地址" class="sm:col-span-2"/>
            </div>
          </div>
  
          <!-- 作業經歷 -->
          <div>
            <h3 class="pl-4 mb-4 text-lg border-l-8 border-black md:text-2xl">
                作業經歷（公司團體專用）
            </h3>
            <ol class="space-y-6 list-decimal list-inside md:text-lg">
                <li>
                    曾經從事的（前一份工作）<Input />
                    <div class="grid items-center mt-2 md:grid-cols-2 gap-x-6 gap-y-2 whitespace-nowrap">
                        <div>起始日期：<Date class="mt-2" /></div>
                        <div>截止日期：<Date class="mt-2" /></div>
                    </div>
                </li>
                <li>
                    目前從事<Input />
                    <div class="grid items-center mt-2 md:grid-cols-2 gap-x-6 gap-y-2 whitespace-nowrap">
                        <div>起始日期：<Date class="mt-2" /></div>
                        <div>截止日期：<Date class="mt-2" /></div>
                        <div class="sm:col-span-2">
                          <Input label="是否需輪班" :showInput="false" />
                          <div class="flex flex-wrap gap-4 md:gap-0">
                            <RadioButtonGroup :options="['兩班制', '三班制', '四班制', '否']"
                            class="flex gap-6" />
                            <RadioButtonGroup :options="['其他']" :showInput="true" 
                            />
                          </div>
                        </div>
                    </div>
                    
                </li>
                <li>
                    檢查原因
                    <RadioButtonGroup :options="['新進員工(受雇時)', '定期檢查']" class="flex gap-6 mt-2" />
                </li>
                <li>
                    <div class="inline-flex items-center">
                        檢查日過去1個月，平均每週上班總工時（含加班）為:<Input class="mx-2" />小時
                    </div>
                </li>
                <li>
                    <div class="inline-flex items-center">
                        檢查日過去6個月，平均每週上班總工時（含加班）為:<Input class="mx-2" />小時
                    </div>
                </li>
                <li>
                    <div class="inline-flex items-center">
                        工作期間平均每天睡眠:<Input class="mx-2" />小時
                    </div>
                </li>
            </ol>
          </div>

          <!-- 既往病史 -->
          <div>
            <h3 class="pl-4 mb-4 text-lg border-l-8 border-black md:text-2xl">
                一、既往病史
            </h3>
            <div class="flex flex-wrap gap-4">
                <Input 
                class="flex flex-wrap "
                label="您是否曾患有下列慢性疾病?"
                :showCheckButton="true" 
                :showInput="false" 
                :buttonLabels="['高血壓', '糖尿病', '心臟病', '心臟節律器', '白內障', '中風', '癲癇', '氣喘', '慢性氣管炎、肺氣腫', '肺結核', '甲狀腺疾病', '腎臟病', '肝病', '貧血', '中耳炎', '聽力障礙', '消化性潰瘍、胃炎', '逆流性食道炎', '子宮肌瘤', '卵巢囊腫', '巧克力囊腫', '子宮全切除']" 
                />
                <CheckButton label="癌症" :showInput="true" />
                <CheckButton label="骨折" :showInput="true" />
                <CheckButton label="手術開刀" :showInput="true" />
                <CheckButton label="其他慢性病" :showInput="true" />
                <CheckButton label="以上皆無"/>
            </div>
          </div>

          <!-- 家族病史 -->
          <div>
            <h3 class="pl-4 mb-4 text-lg border-l-8 border-black md:text-2xl">
                二、家族病史
            </h3>
            <div class="flex flex-wrap gap-4">
                <Input 
                class="flex flex-wrap "
                :showCheckButton="true" 
                :showInput="false" 
                :buttonLabels="['高血壓', '高血脂', '心血管疾病', '糖尿病', '腦血管疾病', '癲癇', '氣喘', '腎臟病', '貧血', '肝病', '甲狀腺疾病']" 
                />
                <CheckButton label="自體免疫疾病" :showInput="true" />
                <CheckButton label="癌症" :showInput="true" />
                <CheckButton label="其他疾病" :showInput="true" />
                <CheckButton label="以上皆無"/>
            </div>
          </div>
          
          <!-- 自覺症狀 -->
          <div>
            <h3 class="pl-4 mb-4 text-lg border-l-8 border-black md:text-2xl">
                三、自覺症狀
            </h3>
            <div class="flex flex-wrap gap-4">
                <Input 
                class="flex flex-wrap "
                label="您最近三個月是否常有下列症狀?"
                :showCheckButton="true" 
                :showInput="false" 
                :buttonLabels="['咳嗽', '咳痰', '呼吸困難', '胸痛', '心悸', '頭暈', '頭痛', '耳鳴', '倦怠', '噁心', '腹痛', '便秘', '腹瀉', '血便', '上背痛', '下背痛', '手腳麻痛', '關節疼痛', '排尿不適', '多尿、頻尿', '手腳肌肉無力', '體重減輕3公斤以上']" 
                />
                <CheckButton label="其他症狀" :showInput="true" />
                <CheckButton label="以上皆無"/>
            </div>
          </div>
          
          <!-- 女性 -->
          <div>
            <h3 class="pl-4 mb-4 text-lg border-l-8 border-black md:text-2xl">
                四、女性請務必回答
            </h3>
            <div class="flex font-medium text-gray-900 sm:items-center md:text-lg whitespace-nowrap">
                懷孕：
                <div class="flex flex-col ml-2 sm:items-center sm:flex-row">
                  <RadioButtonGroup :options="['否', '是']" class="flex gap-6" />
                  <span class="hidden sm:block">，</span>
                  <div class="inline-flex items-center">
                    懷孕次數<Input class="mx-2" />
                  </div>
                  <span class="hidden sm:block">，</span>
                  <div class="inline-flex items-center">
                      生產次數<Input class="mx-2" />
                  </div>
                </div>
            </div>
          </div>
        </div>
  
        <!-- 確認 -->
        <Confirm />

        <!-- 按鈕 -->
        <div class="flex items-center justify-center gap-4 mt-8">
          <SecondaryButton label="取消" />
          <PrimaryButton label="送出" />
        </div>
      </template>
    </Layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const person = ref([
      { id: 1, title: '你常覺得疲勞嗎?' },
      { id: 2, title: '你常覺得身體上體力透支嗎?' },
      { id: 3, title: '你常覺得情緒上心力交瘁嗎?' },
      { id: 4, title: '你常會覺得，「我快要撐不下去了」嗎?' },
      { id: 5, title: '你常覺得精疲力竭嗎?' },
      { id: 6, title: '你常常覺得虛弱，好像快要生病了嗎?' },
    ]);

    const work = ref([
      { id: 1, title: '你的工作會令人情緒上心力交瘁嗎?' },
      { id: 2, title: '你的工作會讓你覺得快要累垮了嗎?' },
      { id: 3, title: '你的工作會讓你覺得挫折嗎?' },
      { id: 4, title: '工作一整天之後，你覺得精疲力竭嗎?' },
      { id: 5, title: '上班之前只要想到又要工作一整天，你就覺得沒力嗎?' },
      { id: 6, title: '上班時你會覺得每一刻都很難熬嗎?' },
      { id: 7, title: '不工作的時候，你有足夠的精力陪朋友或家人嗎?' },
    ]);

    return {
      person,
      work,
    };
  },
};
</script>