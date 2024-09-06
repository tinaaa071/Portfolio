<template>
  <div class="pb-6 text-sm bg-white sm:pb-10 dark:bg-stone-900 text-stone-900 dark:text-white xs:text-base">
    <Navbar />
    <ProgressBar />
    <BackToTop class="z-20" />
    <!-- Profile 區塊 -->
     <div class="px-6 pt-24 pb-6 mx-auto sm:pt-28 sm:px-10 xl:px-28 md:pt-32">
      <div class="flex justify-center w-10/12 pt-12 pb-16 mx-auto bg-white cursor-default dark:bg-stone-900 dark:text-white text-stone-800 ">
            <div class="grid items-center justify-center grid-cols-10 gap-10">
              <!-- Img -->
              <div class="relative h-64 col-span-3">
                <div class="absolute z-10 w-52 -top-12 -left-4">
                  <chatBubble />
                </div>
                <CardTilt class="shadow bg-center bg-cover w-full h-full rounded-[64px] aspect-square bg-[url('https://images.unsplash.com/photo-1628768534904-cf74bc8b897d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" />
              </div>
              <!-- Content -->
               <div class="col-span-7">
                <p class="mb-6 text-2xl font-semibold">
                  {{ $t('project1.core.title') }}
                </p>
                <p class="font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eaque vero expedita quam explicabo beatae porro, saepe accusamus non minus, quaerat repellat voluptates! Exercitationem quod non commodi enim corporis quibusdam doloribus obcaecati, ducimus aut facere, cupiditate optio libero! Rerum quo consequuntur aperiam earum sunt sequi excepturi tempore aspernatur itaque ab.
                </p>
               </div>
            </div>
            
    </div>
     </div>
    <!-- Value 區塊 -->
    <aboutSection 
    :title="$t('about.value.T1')"
    class="bg-B4 dark:border-y dark:border-white/20 md:py-8"
    >
      <div class="flex flex-col">
      <!-- List Items -->
      <div class="flex flex-col">
        <!-- List Items -->
        <div
          v-for="(item, index) in [
            { title: 'about.value.S1', content: 'about.value.V1' },
            { title: 'about.value.S2', content: 'about.value.V2' },
            { title: 'about.value.S3', content: 'about.value.V3' }
          ]"
          :key="index"
          class="flex gap-6 p-8 text-xl font-semibold transition-colors duration-300 ease-in-out hover:bg-white sm:rounded-3xl rounded-2xl dark:hover:bg-stone-800"
        >
          <span>
            {{ index + 1 }}.
          </span>
          <div>
            <!-- Title -->
            <p class="mb-2">
              {{ $t(item.title) }}
            </p>
            <!-- Content -->
            <p class="text-base font-medium text-stone-700 dark:text-stone-300">
              {{ $t(item.content) }}
            </p>
          </div>
        </div>
      </div>
    </div>
    </aboutSection>
    <!-- Skills 區塊 -->
    <aboutSection
    :title="$t('about.skill.T1')"
    class="md:py-8"
    >
      <div class="flex gap-2 sm:gap-3">
        <Tag
        :tag="[$t('about.skill.S1'), $t('about.skill.S2'), $t('about.skill.S3')]" 
        class="bg-B4"
        />
      </div>
    </aboutSection>
    <!-- Language 區塊 -->
    <aboutSection
    :title="$t('about.language.T1')"
    class="md:py-8"
    >
    <div class="grid grid-cols-2 gap-6">
        <!-- List Items -->
        <div
          v-for="(item, index) in [
            { title: 'about.language.S1', content: 'about.language.L1' },
            { title: 'about.language.S2', content: 'about.language.L2' }
          ]"
          :key="index"
          class="flex w-full gap-6 px-6 py-5 font-semibold border shadow sm:rounded-3xl rounded-2xl border-B4"
        >
          <div>
            <!-- Title -->
            <p class="mb-2">
              {{ $t(item.title) }}
            </p>
            <!-- Content -->
            <p class="text-sm font-medium text-stone-500 dark:text-stone-300">
              {{ $t(item.content) }}
            </p>
          </div>
        </div>
      </div>
    </aboutSection>
    <!-- Education 區塊 -->
    <aboutSection
    :title="$t('about.education.T1')"
    class="md:py-8"
    >
    <div class="grid grid-cols-2 gap-6">
        <!-- List Items -->
        <div
          class="flex w-full gap-6 px-6 py-5 font-semibold border shadow sm:rounded-3xl rounded-2xl border-B4"
        >
          <div>
            <!-- Title -->
            <p class="mb-2">
              {{ $t('about.education.S1') }}
            </p>
            <!-- Content -->
            <p class="text-sm font-medium text-stone-500 dark:text-stone-300">
              {{ $t('about.education.L1') }}
              <br />
              {{ $t('about.education.L2') }}
            </p>
          </div>
        </div>
      </div>
    </aboutSection>
    <!-- Certificate 區塊 -->
    <aboutSection
    :title="$t('about.certificate.T1')"
    class="md:py-8"
    >
    <div class="grid grid-cols-3 gap-6">
        <!-- List Items -->
        <LearnCard
        v-for="(card, index) in [
        { title: $t('about.certificate.S1'), info: $t('about.certificate.L1'), cardSrc: 'https://images.unsplash.com/photo-1628768534904-cf74bc8b897d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: $t('about.certificate.S2'), info: $t('about.certificate.L2'), cardSrc: 'https://images.unsplash.com/photo-1628768534904-cf74bc8b897d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: $t('about.certificate.S3'), info: $t('about.certificate.L3'), cardSrc: 'https://images.unsplash.com/photo-1628768534904-cf74bc8b897d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
        // Add more cards as needed
      ]"
      :key="index"
      :title="card.title"
      :info="card.info"
      :cardSrc="card.cardSrc"
    />
      </div>
    </aboutSection>
    <!-- Tools 區塊 -->
    <aboutSection
    :title="$t('about.tool.T1')"
    class="md:py-8 bg-B1"
    >
      <ToolMarquee />
    </aboutSection>
    <!-- Work 區塊 -->
    <aboutSection
    :title="$t('about.tool.T1')"
    class="md:py-8 "
    >
      <WorkAccordion
      title="Accordion Title"
      info="123"
      desc="sfsf"
      :showLogo="true"
      logoSrc="https://images.unsplash.com/photo-1688298094518-eb16cfbda0bc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      >
        <p>Accordion content goes here.</p>
      </WorkAccordion>
    </aboutSection>
  </div>
</template>

<script>
export default {
};
</script>