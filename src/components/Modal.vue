<template>
    <TransitionRoot appear :show="modelValue" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-3xl sm:my-8 sm:w-full sm:max-w-lg">
              <!-- 表頭 -->
              <div class="text-blue-500 bg-blue-200">
                <div class="flex justify-between px-6 py-4">
                  <p>
                    《富盈診所資料保護政策及顧客之個人資料保護權益》
                  </p>
                <button type="button" class="transition-colors  hover:text-white" @click="closeModal">
                  <span class="sr-only">Close</span>
                  <fa6-solid-xmark />
                </button>
                </div>
              </div>
              <!-- 內容 -->
              <div class="p-6">
                <p>
                    本同意書說明富盈診所，將如何處理健康檢查之個人資料。
                    <br>
                    <br>
                    本診所為提供健康管理服務，茲依據個人資料保護法第8條第1項規定，告知您以下事項：
                    <br>
                    <br>
                    蒐集個人資料之目的
                    <br>
                    1. 本診所執行目的為『健康檢查』，需將您的個人資料：姓名、身分證(居留證)字號、出生年月日等，提供給本健康檢查部門。
                    <br>
                    <br>
                    2. 當您的個人資料使用方式與當初本公司蒐集的目的不同時，我們會在使用前先徵求您的書面同意。
                    <br>
                    <br>
                    3. 本診所蒐集之個人資料，不會移轉給第三方處理使用，除非獲得您的授權或個人資料保護法及相關法令另有規定外。 
                    當您簽署本同意書時，即表示您已閱讀、瞭解並同意本同意書之所有內容。
                </p>
              </div>
              
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
      </Dialog>
    </TransitionRoot>
</template>
  
<script>
// 載入 VueUse
import { useVModel } from "@vueuse/core";

export default {
    // 送出
    emits: ['update:model-value'],
    // 傳入
    props: {
        modelValue: Boolean,
        title: String
    },
    setup(props) {
    const isOpen = useVModel(props)
    
    const openModal = () => {
        isOpen.value = true
    }

    const closeModal = () => {
        isOpen.value = false
    }
    
    return { isOpen, openModal, closeModal }
  }
}
</script>