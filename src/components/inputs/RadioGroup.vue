<script setup>
import RadioInput from "./RadioInput.vue";
const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
</script>

<template>
  <fieldset>
    <RadioInput
      v-for="(value, key) of props.options"
      :key="value"
      :label="key"
      :value="value"
      :name="props.name"
    />
  </fieldset>
</template>

<style scoped></style>
