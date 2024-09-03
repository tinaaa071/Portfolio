<!-- componentB.vue -->
<template>
    <Section>
      <div class="grid grid-cols-10">
        <BriefCard
          class="col-span-3"
          :info2="info2"
          :info4="info4"
        />
      </div>
    </Section>
  </template>
  
  <script>
  export default {
    props: {
      info2: {
        type: Array,
        required: true,
      },
      info4: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  