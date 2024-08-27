<template>
  <div class="pb-5 bg-Quaternary dark:bg-stone-900 text-stone-900">
    <Layout>
    <template #content>
      <div class="space-y-10">
        <!-- Hero 區塊 -->
        <div class="grid grid-flow-row-dense grid-cols-4 grid-rows-2 gap-4">
          <!-- 第一格 -->
          <div class="col-span-2 p-8 bg-white rounded-3xl dark:bg-transparent dark:border dark:border-stone-50 text-stone-900 dark:text-white">
            <div class="flex items-center gap-6 mb-10 ">
              <!-- 照片 -->
              <div class="hidden w-32 h-32 bg-center bg-cover rounded-full lg:block"
              style="background-image: url(https://images.unsplash.com/photo-1723920515274-ace3503adad6?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
              </div>
              <div>
                <p class="mb-2 text-3xl font-bold">
                  {{ $t('hero.item1') }}
                </p>
                <p class="inline-flex text-3xl font-bold">
                  {{ $t('hero.item2') }}
                  <Typewriter class="ml-2" />
                </p>
              </div>
            </div>
            <div class="inline-flex justify-between w-full text-sm font-normal">
              <p>{{ $t('hero.item6') }}</p>
              <p class="hidden lg:block">{{ $t('hero.item7') }}</p>
              <p>{{ $t('hero.item8') }}</p>
            </div>
          </div>
          <!-- 第二格 -->
          <RouterLink to="/" class="overflow-hidden rounded-3xl">
            <div class="relative w-full h-full ">
              <div class="absolute bottom-0 z-10 ">
                <ArrowButton link-to="/" />
              </div>
              <div class="w-full h-full transition-transform duration-500 ease-in-out transform bg-center bg-cover -z-10 rounded-3xl hover:scale-110"
              style="background-image: url(https://images.unsplash.com/photo-1723920515274-ace3503adad6?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
              </div>
            </div>
          </RouterLink>
          <!-- 第三格 -->
          <RouterLink to="/" class="hidden row-span-2 overflow-hidden rounded-3xl lg:block">
            <div class="relative w-full h-full">
              <div class="absolute bottom-0 z-10 ">
                <ArrowButton link-to="/" />
              </div>
              <p class="absolute w-fit h-fit inset-0 z-10 flex items-center justify-center text-6xl font-bold tracking-[.4em] text-white text-outline mx-auto my-auto"
              style="writing-mode: vertical-lr; -webkit-writing-mode: vertical-lr;"
              >
              {{ $t('hero.item9') }}
              </p>
              <div class="w-full h-full transition-transform duration-500 ease-in-out transform bg-center bg-cover -z-10 rounded-3xl hover:scale-110 brightness-75"
              style="background-image: url(https://images.unsplash.com/photo-1724271366025-5bbfc5fbdb70?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
              </div>
            </div>
          </RouterLink>
          <!-- 第四格 -->
          <div>
            <CodeTyping />
          </div>
          <!-- 第五格 -->
          <RouterLink to="/" class="inline-flex items-center justify-center transition-colors duration-200 ease-in-out bg-blue-200 aspect-square rounded-3xl hover:bg-blue-200/75 group">
            <entypo-social-linkedin class="text-white transition-all duration-200 ease-in-out dark:text-stone-900 text-7xl group-hover:text-8xl" />
          </RouterLink>
          <!-- 第六格 -->
          <div class="p-8 bg-white rounded-3xl dark:bg-transparent dark:border dark:border-stone-50 text-stone-900 dark:text-white">
            <p class="mb-4 text-lg font-bold">
              {{ $t('hero.item10') }}
            </p>
            <p class="text-3xl font-extrabold leading-relaxed">
              {{ $t('hero.item11') }}
            </p>
          </div>
          <!-- 第七格 -->
          <div class="col-span-4">
            <Marquee />
          </div>
        </div>
        <!-- Works 區塊 -->
         <WorkCard />
      </div>
      
    </template>
  </Layout>
</div>
</template>

<script>
import { ref } from 'vue';

export default {

};
</script>