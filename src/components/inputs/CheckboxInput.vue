<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  }
});
</script>

<template>
  <label :for="props.value"
    ><input type="checkbox" :id="props.value" :value="props.value" />{{ props.label }}</label
  >
</template>

<style scoped></style>
