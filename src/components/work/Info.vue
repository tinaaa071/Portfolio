<template>
  <div class="w-full px-6 py-8 xs:p-10 bg-Quaternary text-stone-900 fixed left-0 sm:top-[560px] top-[480px]">
    <!-- Tag -->
    <div class="flex gap-2 sm:gap-3">
        <Tag 
        :text="tagText1"
        v-if="tagVisible[0]" aria-hidden="true"
         />
        <Tag 
        :text="tagText2"
        v-if="tagVisible[1]" aria-hidden="true"
         />
        <Tag 
        :text="tagText3"
        v-if="tagVisible[2]" aria-hidden="true"
         />
        <Tag 
        :text="tagText4"
        v-if="tagVisible[3]" aria-hidden="true"
         />
        <Tag 
        :text="tagText5"
        v-if="tagVisible[4]" aria-hidden="true"
         />
    </div>
    <!-- Title -->
     <h2 class="text-5xl font-bold">
        {{ title }}
     </h2>
     <!-- Info -->
      <div class="grid grid-cols-4 gap-12">
        <!-- 專案期間 -->
        <div>
            <p>
                {{ $t('nav.item5') }}
            </p>
            <p>
                {{ info1 }}
            </p>
        </div>
        <!-- 主要負責項目 -->
        <div>
            <p>
                {{ $t('nav.item5') }}
            </p>
            <p>
                {{ info2 }}
            </p>
        </div>
        <!-- 專案成果 -->
        <div>
            <p>
                {{ $t('nav.item5') }}
            </p>
            <p>
                {{ info3 }}
            </p>
        </div>
        <!-- 服務公司 -->
        <div>
            <p>
                {{ $t('nav.item5') }}
            </p>
            <p>
                {{ info4 }}
            </p>
        </div>
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
        default: () => [false, false, false, false, false], // Default to all hidden
        validator: (value) => value.length === 5 && value.every((item) => typeof item === 'boolean'),
      },
}
};
</script>