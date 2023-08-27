<script setup>
import { decode } from "../helpers/helpers";
import { useQuestionStore } from "../stores/question";
import { storeToRefs } from "pinia";

const questionStore = useQuestionStore();
const { currentQuestion } = storeToRefs(questionStore);
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
