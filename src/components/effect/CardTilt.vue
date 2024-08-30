<template>
    <div class="card" ref="card" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" @mouseenter="handleMouseEnter">
        <div class="content">
          <img class="icon" src="https://safe.flatypus.me/8lhc6n6cecf2.png" />
          <div class="text">
            <h3>Magic Mouse Card Tilt Effect</h3>
            <p>Try hovering over this card to see what it does!</p>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
    name: 'TiltCard',
    mounted() {
      this.card = this.$refs.card;
      this.mouseHover = false;
      this.mousePosition = { x: 0, y: 0 };
      this.cardSize = { width: 0, height: 0 };
      this.SCALE_X = 4;
      this.SCALE_Y = 8;
    },
    methods: {
      handleMouseMove(event) {
        if (!this.mouseHover) return;
        const rect = this.card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        this.mousePosition = { x, y };
        this.cardSize = {
          width: this.card.offsetWidth || 0,
          height: this.card.offsetHeight || 0,
        };
        gsap.to(this.card, {
          duration: 0.3,
          ease: 'power2.out',
          rotationX: ((this.mousePosition.y / this.cardSize.height) * -(this.SCALE_Y * 2) + this.SCALE_Y) + 'deg',
          rotationY: ((this.mousePosition.x / this.cardSize.width) * (this.SCALE_X * 2) - this.SCALE_X) + 'deg',
          z: 10,
        });
      },
      handleMouseLeave() {
        this.mouseHover = false;
        gsap.to(this.card, {
          duration: 0.3,
          ease: 'power2.out',
          rotationX: 0,
          rotationY: 0,
          z: 0,
        });
      },
      handleMouseEnter() {
        this.mouseHover = true;
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    width: 300px;
    height: 800px;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    transition: transform 0.3s ease-out;
    cursor: pointer;
  }
  
  .card .content {
    display: grid;
    place-items: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(16px);
    border-radius: 1.5rem;
    padding: 2rem;
  }
  
  .card .content .icon {
    width: 4rem;
    border-radius: 1rem;
  }
  
  .card .content .text {
    margin-top: 1.5rem;
  }
  
  .card .content h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .card .content p {
    margin-top: 1rem;
    font-size: 1rem;
    color: #718096;
  }
  </style>
  