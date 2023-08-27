<script setup>
import TriviaService from "../services/TriviaService";
import { useTokenStore } from "../stores/token";
import { storeToRefs } from "pinia";

const tokenStore = useTokenStore();
const { token } = storeToRefs(tokenStore);
</script>

<template>
  <p>{{ token }}</p>
</template>
