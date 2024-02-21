<template>
  <SanityImage class="inline-image" :asset-id="asset._ref" />
</template>
<script setup>
const props = defineProps({
  asset: Object,
});
</script>
