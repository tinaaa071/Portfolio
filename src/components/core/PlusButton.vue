<template>
    <button @click="toggleIcon" :class="{ minus: isPlus }">
      <div class="icon">
        <div class="line horizontal"></div>
        <div class="line vertical"></div>
      </div>
    </button>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    isPlus: {
      type: Boolean,
      required: true,
    },
  });
  
  const emit = defineEmits(['toggle']);
  
  const toggleIcon = () => {
    emit('toggle');
  };
  </script>
  
  <style scoped>
  button {
    width: 50px;
    height: 50px;
    background: #A2866D;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    transition: background-color 0.3s ease;
  }
  
  button.minus {
    background-color: #ffcccc;
  }
  
  button:hover {
    background-color: #e0e0e0;
  }
  
  .icon {
    position: relative;
    width: 24px;
    height: 24px;
  }
  
  .line {
    position: absolute;
    width: 24px;
    height: 4px;
    background: white;
    transition: transform 0.3s ease;
  }
  
  .horizontal {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  
  .vertical {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .minus .horizontal {
    transform: translateY(-50%) rotate(90deg);
  }
  
  .minus .vertical {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  </style>
  