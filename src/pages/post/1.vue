<template>
  <div class="bg-white sm:pb-10 dark:bg-stone-900 text-stone-900">
    <Layout :showProgress="true">
      <template #content>
        <div class="flex flex-col gap-6 px-80">
          <!-- Banner -->
          <CardTilt>
            <img 
            class="object-cover object-center rounded-2xl sm:rounded-3xl aspect-video"
            src="https://images.unsplash.com/photo-1723920515274-ace3503adad6?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt=""
            >
          </CardTilt>
          <!-- Category + Date -->
           <div class="flex items-center gap-4">
            <p class="text-B1">
              {{ $t('blog.item2') }}
            </p>
            <span class="w-0.5 h-6 bg-stone-200">
            </span>
            <p class=" text-stone-400">
              2024.09.10
            </p>
           </div>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
export default {
};
</script>