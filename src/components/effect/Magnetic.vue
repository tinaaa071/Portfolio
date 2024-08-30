<template>
    <div class="magnetic-container" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
      <button class="magnetic-button" :style="buttonStyle" :class="{ sway: isSwaying, 'hover-effect': isHovering }" @mouseenter="onMouseEnter">
        <span class="magnetic-text" :style="textStyle">
          Hover Me
        </span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        buttonPosition: { x: 0, y: 0 },
        buttonOffset: { x: 0, y: 0 },
        textOffset: { x: 0, y: 0 },
        isSwaying: false,
        isHovering: false,
      };
    },
    computed: {
      buttonStyle() {
        return {
          transform: `translate(${this.buttonOffset.x}px, ${this.buttonOffset.y}px)`,
        };
      },
      textStyle() {
        return {
          transform: `translate(${this.textOffset.x}px, ${this.textOffset.y}px)`,
        };
      },
    },
    methods: {
      onMouseMove(event) {
        const button = this.$el.querySelector('.magnetic-button');
        const buttonRect = button.getBoundingClientRect();
        const containerRect = this.$el.getBoundingClientRect();
  
        const mouseX = event.clientX - containerRect.left;
        const mouseY = event.clientY - containerRect.top;
  
        const buttonX = buttonRect.left + buttonRect.width / 2 - containerRect.left;
        const buttonY = buttonRect.top + buttonRect.height / 2 - containerRect.top;
  
        const distX = mouseX - buttonX;
        const distY = mouseY - buttonY;
  
        this.buttonOffset = {
          x: distX * 0.3,
          y: distY * 0.3,
        };
  
        this.textOffset = {
          x: distX * 0.15,
          y: distY * 0.15,
        };
  
        this.isSwaying = false; // Stop sway effect while hovering
        this.isHovering = true;
      },
      onMouseLeave() {
        this.buttonOffset = { x: 0, y: 0 };
        this.textOffset = { x: 0, y: 0 };
        this.isHovering = false;
        this.triggerSwayEffect();
      },
      onMouseEnter() {
        this.isHovering = true;
      },
      triggerSwayEffect() {
        this.isSwaying = true;
        setTimeout(() => {
          this.isSwaying = false; // Stop the sway after the animation duration
        }, 1000); // Adjust this duration to match the CSS animation duration
      },
    },
  };
  </script>
  
  <style scoped>
  .magnetic-container {
    position: relative;
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .magnetic-button {
    position: relative;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: color 0.4s ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 1;
  }
  
  .magnetic-button::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 200%;
    height: 200%;
    background-color: #ffffff;
    border-radius: 50% 50% 0 0;
    transform: translate(-50%, 100%);
    transition: transform 0.4s ease-out;
    z-index: -1; /* Ensure background is behind the text */
  }
  
  .magnetic-button.hover-effect::before {
    transform: translate(-50%, 0%);
  }
  
  .magnetic-button.hover-effect {
    color: #007bff; /* Text color changes when hovered */
  }
  
  .magnetic-text {
    display: inline-block;
    transition: transform 0.2s ease-out;
  }
  
  .magnetic-button.sway {
    animation: sway 1s ease-out;
  }
  
  @keyframes sway {
    0% {
      transform: translate(0px, 0px);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(2px, -1px);
    }
    60% {
      transform: translate(-1px, 1px);
    }
    80% {
      transform: translate(1px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  </style>
  