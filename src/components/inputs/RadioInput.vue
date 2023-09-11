<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
</script>

<template>
  <label :for="props.value"
    ><input type="radio" :id="props.value" :value="props.value" :name="props.name" />{{
      props.label
    }}</label
  >
</template>

<style scoped></style>
