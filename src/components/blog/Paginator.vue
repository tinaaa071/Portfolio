<template>
    <div class="paginator">
      <button @click="goToPage(1)" :disabled="currentPage === 1">First</button>
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
  
      <span v-for="page in totalPages" :key="page" class="page-number" :class="{ active: currentPage === page }" @click="goToPage(page)">
        {{ page }}
      </span>
  
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
      <button @click="goToPage(totalPages)" :disabled="currentPage === totalPages">Last</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalItems: {
        type: Number,
        required: true
      },
      itemsPerPage: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        currentPage: 1
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
      }
    },
    methods: {
      goToPage(page) {
        if (page < 1 || page > this.totalPages) return;
        this.currentPage = page;
        this.$emit('page-changed', this.currentPage);
      }
    }
  };
  </script>
  
  <style scoped>
  .paginator {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  
  .page-number {
    margin: 0 5px;
    cursor: pointer;
  }
  
  .page-number.active {
    font-weight: bold;
  }
  
  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  </style>
  