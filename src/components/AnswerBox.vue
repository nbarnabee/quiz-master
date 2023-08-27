<script setup>
import { decode } from "../helpers/decode";
import { useQuestionStore } from "../stores/question";

const questionStore = useQuestionStore();
</script>

<template>
  <p v-if="questionStore.currentQuestion && questionStore.questionAnswered">
    Answer:
    {{ questionStore.currentQuestion ? decode(questionStore.currentQuestion.correct_answer) : "" }}
  </p>
</template>

<style scoped>
p {
  height: 50px;
}
</style>
