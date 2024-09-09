<template>
  <div class="bg-white sm:pb-10 dark:bg-stone-900 text-stone-900">
    <Layout :showProgress="true">
      <template #content>
        <Tabs
          :currentCategory="currentCategory"
          :categories="[
            $t('project1.infoContent.item1') ,
            $t('project1.infoContent.item2'),
            $t('project1.infoContent.item3'),
            $t('project1.infoContent.item4'),
          ]"
          @category-changed="filterByCategory"
        />

        <!-- Display "No data" message if no posts are available -->
        <div v-if="filteredPosts.length === 0" class="p-4 text-center">
          No data
        </div>

        <!-- Display PostList and Paginator only if there are posts -->
        <div v-else>
          <PostList :posts="paginatedPosts" />

          <Paginator
            :totalItems="filteredPosts.length"
            :itemsPerPage="itemsPerPage"
            @page-changed="handlePageChange"
          />
          <p>Current Page: {{ currentPage }}</p>
        </div>
      </template>
    </Layout>
    <Footer />
  </div>
</template>


<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Post 1",
          category: this.$t('project1.infoContent.item2'),
          image: "https://picsum.photos/id/230/200/200",
          date: new Date().toLocaleDateString(),
        },
        {
          id: 2,
          title: "Post 2",
          category: this.$t('project1.infoContent.item3'),
          image: "https://picsum.photos/id/231/200/200",
          date: new Date().toLocaleDateString(),
        },
      ],
      currentPage: 1,
      itemsPerPage: 6,
      currentCategory: this.$t('project1.infoContent.item1'), // Set the default current category to "All"
    };
  },
  computed: {
    filteredPosts() {
      if (this.currentCategory === this.$t('project1.infoContent.item1')) {
        return this.posts;
      }
      return this.posts.filter(
        (post) => post.category === this.currentCategory
      );
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredPosts.slice(start, end);
    },
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
    },
    filterByCategory(category) {
      this.currentCategory = category;
      this.currentPage = 1; // Reset to the first page when changing category
    },
  },
};
</script>
