<template> 
  <Layout class="relative">
    <template #content>
        <Banner 
        title="123"
        bannerSrc="https://images.unsplash.com/photo-1688297969982-2d46e66ba2f2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        :iconsVisible="[true, false, true, true, false]"
        />
        <Info 
        title="123"
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
        />
    </template>
  </Layout>
</template>

<script>
export default {
};
</script>