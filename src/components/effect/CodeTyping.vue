<template>
    <pre ref="codeContainer"><code ref="code" class="language-javascript" :style="{ fontSize: fontSize + 'px' }">{{ displayedText }}</code></pre>
  </template>
  
  <script>
  import Prism from 'prismjs';
  import 'prismjs/themes/prism-tomorrow.css';
  import 'prismjs/components/prism-javascript';
  
  export default {
    data() {
      return {
        fullText: `const [model, modifiers] = defineModel({
    set(value) {
      if (modifiers.capitalize) {
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
      return value
    }
  })
  const [model, modifiers] = defineModel({
    set(value) {
      if (modifiers.capitalize) {
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
      return value
    }
  })`,
        displayedText: '',
        currentIndex: 0,
        fontSize: 16,
      };
    },
    mounted() {
      this.typeText();
    },
    methods: {
      typeText() {
        if (this.currentIndex < this.fullText.length) {
          this.displayedText += this.fullText[this.currentIndex];
          this.currentIndex++;
          this.$nextTick(() => {
            Prism.highlightElement(this.$refs.code);
            this.scrollToBottom(); // Scroll to the bottom after updating
          });
          setTimeout(this.typeText, 20); // Adjust speed here
        } else {
          setTimeout(() => {
            this.resetAnimation();
            this.typeText();
          }, 500); // Pause before restarting
        }
      },
      scrollToBottom() {
        const container = this.$refs.codeContainer;
        container.scrollTop = container.scrollHeight;
      },
      resetAnimation() {
        this.displayedText = '';
        this.currentIndex = 0;
      },
    },
  };
  </script>
  
  <style>
  pre {
    overflow: hidden; /* Enable scrollbars if needed */
    max-height: 240px; /* Set a fixed height for the code block */
    white-space: pre-wrap; /* Preserve whitespace and line breaks */
    margin: 0; /* Remove default margin */
    position: relative;
    border-radius: 24px;
  }
  
  code {
    display: block; /* Ensure the code takes up the full width of the container */
    overflow: hidden;
  }
  /* Hide scrollbars for WebKit browsers (e.g., Chrome, Safari) */
  pre::-webkit-scrollbar {
    display: none; /* Hide scrollbar */
  }
  
  /* Hide scrollbars for Firefox */
  pre {
    scrollbar-width: none; /* Hide scrollbar */
  }
  
  /* Hide scrollbars for Edge and IE */
  pre {
    -ms-overflow-style: none; /* Hide scrollbar */
  }
  </style>
  