<script setup>
import { defineProps } from "vue";
defineProps(["token"]);
</script>

<template>
  <p>{{ token }}</p>
</template>
