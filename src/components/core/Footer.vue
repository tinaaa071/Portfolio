<template>
  <div class="flex items-center justify-between px-20 py-10 text-white bg-stone-900">
    <!-- Icon Group -->
    <ul class="flex">
        <li v-for="item in menuItems" :key="item.to">
            <RouterLink :to="item.to" 
            class="flex items-center gap-6 p-3 text-xl rounded-full sm:p-5 bg-stone-800"
            >
                <component :is="item.icon" />
            </RouterLink>
        </li>
    </ul>
     <p class="text-sm font-normal">
        Copyright © 2024 Tina Chen
     </p>
  </div>
</template>

<script>
import Fa6BrandsLinkedin from '~icons/fa6-brands/linkedin';
import Fa6BrandsDribbble from '~icons/fa6-brands/dribbble';
import Fa6SolidEnvelope from '~icons/fa6-solid/envelope';

export default {
  components: {
    Fa6BrandsLinkedin,
    Fa6BrandsDribbble,
    Fa6SolidEnvelope
  },
  setup() {
    const menuItems = [
      { to: '/', icon: 'fa6-brands-linkedin' },
      { to: '/posts', icon: 'fa6-brands-dribbble' },
      { to: '/setting', icon: 'fa6-solid-envelope' },
    ]

    return { menuItems }
  }
}
</script>