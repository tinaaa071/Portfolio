<template> 
    <div>
      <Layout>
        <template #content>
          <!-- Banner -->
          <Banner 
            title="123"
            bannerSrc="https://images.unsplash.com/photo-1688297969982-2d46e66ba2f2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <!-- Content -->
          <div class="absolute left-0 sm:top-[480px] top-[400px] w-full ">
            <Info 
            :title="$t('project1.title')"
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
            />
            <Footer />
          </div>
        </template>
      </Layout>
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

    };
  },
}

  </script>
  