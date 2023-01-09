<template>
  <a 
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded bg-red-500
      border-2 hover:bg-red-400 text-white
      transition-colors border-red-500
    "
  >
    <slot></slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String
});
</script>