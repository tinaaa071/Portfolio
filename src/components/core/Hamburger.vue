<template>
    <div class="px-4 py-3 border-2 border-white rounded-full xl:hidden">
        <div @click="toggleMenu" :class="{'open': isOpen}" class="hamburger">
      <span></span>
      <span></span>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        required: true
      },
      toggleMenu: {
        type: Function,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .hamburger {
    width: 24px; /* Width of the hamburger button */
    height: 16px; /* Height of the hamburger button */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
  }
  
  .hamburger span {
    display: block;
    height: 3px; /* Height of each bar */
    background-color: #fff;
    transition: transform 0.3s ease, width 0.3s ease, top 0.3s ease;
    position: absolute;
    left: 0;
    width: 100%; /* Default width is 100% */
  }
  
  .hamburger span:first-child {
    top: 0; /* Position of the first bar */
  }
  
  .hamburger span:last-child {
    top: 17px; /* Position of the last bar */
    width: 70%; /* Default width for the last bar */
  }
  
  .hamburger.open span:first-child {
    transform: rotate(45deg);
    top: 50%;
    transform-origin: center;
    width: 100%; /* Ensure the cross bar is as wide as the hamburger */
  }
  
  .hamburger.open span:last-child {
    transform: rotate(-45deg);
    top: 50%;
    transform-origin: center;
    width: 100%; /* Ensure the cross bar is as wide as the hamburger */
  }
  </style>
  