<template>
  <RouterLink :to="linkTo">
    <div
      class="relative flex items-center px-8 py-6 overflow-hidden h-fit w-fit"
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave"
    >
      <button
        class="relative flex items-center justify-center text-sm font-bold px-6 py-3.5 overflow-hidden text-white rounded-full magnetic-button bg-stone-900 before:absolute before:bottom-0 before:left-[50%] before:w-[200%] before:h-[200%] before:bg-white w-fit h-fit border-2 border-stone-900"
        :style="buttonStyle"
        :class="{ sway: isSwaying, 'hover-effect ': isHovering }"
        @mouseenter="onMouseEnter"
      >
        <!-- Icon slot controlled by props -->
        <div v-if="showIcon" class="mr-2 "
        :style="textStyle">
          <component :is="icon" />
        </div>
        <span class="inline-block transition-transform duration-200 ease-out" :style="textStyle">
          {{ text }}
        </span>
      </button>
    </div>
  </RouterLink>
</template>

<script>


export default {

  props: {
    linkTo: {
      type: String,
      required: true,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: [Object, Function],
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
  },
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

      this.isSwaying = false;
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
        this.isSwaying = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.magnetic-button {
  transition: color 0.4s ease-out;
  z-index: 1;
}

.magnetic-button::before {
  border-radius: 50% 50% 0 0;
  transform: translate(-50%, 100%);
  transition: transform 0.4s ease-out;
  z-index: -1;
}

.magnetic-button.hover-effect::before {
  transform: translate(-50%, 0%);
}

.magnetic-button.hover-effect {
  color: #1c1917;
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
