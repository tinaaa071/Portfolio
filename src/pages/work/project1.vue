<template> 
     <div class="relative pb-6 sm:pb-10 bg-Quaternary dark:bg-stone-900 text-stone-900">
      <Navbar />
      <ProgressBar />
      <BackToTop class="z-20" />
          <!-- Banner -->
          <Banner 
            title="123"
            bannerSrc="https://images.unsplash.com/photo-1688297969982-2d46e66ba2f2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <!-- Content -->
          <div class="absolute left-0 sm:top-[480px] top-[400px] w-full">
            <!-- Info -->
            <Info 
            :title="$t('project1.core.title')"
            :info1="$t('work.item3')"
            :info2="$t('work.item3')"
            :info3="$t('work.item3')"
            :info4="$t('work.item3')"
            :tagText1="$t('work.item1')"
            :tagText2="$t('work.item2')"
            :tagText3="$t('work.item3')"
            :tagText4="$t('work.item4')"
            :tagText5="$t('work.item5')"
            :tagVisible="[true, false, true, true, false]"
            :iconsVisible="[true, false, true, true, false]"
            :linkTo="'/'"
            :icon="icon" 
            :text="$t('work.item5')" 
            />
            <!-- Main Content -->
            <div>
              <ScrollSpy :sections="sections" />
              <!-- Section1 -->
              <SectionInfo
              id="section1"
              :info2="['Service 1', 'Service 2', 'Service 3']"
              :info4="[
                { avatarSrc: 'https://images.unsplash.com/photo-1724942462164-7c30f103d91c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', job: 'Designer', name: 'John Doe' },
                { avatarSrc: 'https://images.unsplash.com/photo-1724748860101-589aa7ee8b29?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', job: 'Developer', name: 'Jane Smith' }
              ]"
              />
              <Section
                id="section2"
                title="Section 2"
                content="Content for Section 2"
              />
              <Section
                id="section3"
                title="Section 3"
                content="Content for Section 3"
              />
            </div>
            <Footer />
          </div>
    </div>
  </template>
  
  <script>
  import MingcuteEarth3Fill from '~icons/mingcute/earth-3-fill';
  export default {
  components: {
    MingcuteEarth3Fill,

  },
  data() {
    return {
      icon: MingcuteEarth3Fill, 
      sections: [
        { id: 'section1', name: 'Section 1' },
        { id: 'section2', name: 'Section 2' },
        { id: 'section3', name: 'Section 3' },
        // Add more sections as needed
      ],
    };
  },
}

  </script>
  