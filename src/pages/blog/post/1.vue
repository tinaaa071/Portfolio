<template>
  <div class="text-sm font-light bg-white sm:pb-10 dark:bg-stone-900 text-stone-900 dark:text-white xs:text-base">
    <Layout :showProgress="true">
      <template #content>
        <div class="flex flex-col gap-6">
          <Brief
          :post="{
          banner: 'https://media.istockphoto.com/id/692835304/photo/spiekeroog-in-germany.webp?a=1&s=612x612&w=0&k=20&c=RFKphgYjiUW9T-ewpx2b0VL2gqRvFZ8bTHJwr2Gl5u0=',
          credit: $t('project1.core.title'),
          category: $t('blog.item1'),
          date: '2024-09-10',
          title: $t('project1.core.title'),
          desc: $t('project1.core.title'),
          menu: [
            { menu: 'Introduction to Vue' },
            { menu: 'Vue Directives' },
            { menu: 'State Management' }
          ]
        }"
        :showCredit="true"
        :showMenu="true"
        >
        <template #brief>
          <p>
            This is a brief description that can be customized.
            This is a brief description that can be customized.
            This is a brief description that can be customized.
          </p>
        </template>
        </Brief>
        <Content>
          <H1 
          :title="$t('project1.core.title')"
          />
          <p>123</p>
          <Callout>
            <p>123</p>
          </Callout>
        </Content>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
export default {
};
</script>