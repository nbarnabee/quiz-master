<script setup>
import { decode } from "../helpers/decode";
import { useQuestionStore } from "../stores/question";

const questionStore = useQuestionStore();
</script>

<template>
  <p v-if="currentQuestion && questionStore.questionAnswered">
    Answer: {{ currentQuestion ? decode(currentQuestion.correct_answer) : "" }}
  </p>
</template>

<style scoped>
p {
  height: 50px;
}
</style>
