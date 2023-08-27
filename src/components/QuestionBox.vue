<script setup>
import { onMounted } from "vue";
import { useQuestionStore } from "../stores/question";
import { storeToRefs } from "pinia";

const questionStore = useQuestionStore();
const { token } = storeToRefs(questionStore);

onMounted(() => {
  questionStore.getQuestions();
});
</script>

<template>
  <p>{{ token }}</p>
  <button type="button" @click="questionStore.getQuestions()">Get more questions</button>
</template>
