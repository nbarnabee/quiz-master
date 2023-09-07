<script setup>
import { decode } from "../helpers/decode";
import { useQuestionStore } from "../stores/question";
import { storeToRefs } from "pinia";

const questionStore = useQuestionStore();
const { currentQuestion } = storeToRefs(questionStore);
</script>

<template>
  <section>
    <h1>{{ currentQuestion ? decode(currentQuestion.question) : "" }}</h1>
    <div class="details">
      <small>{{ currentQuestion.category }}</small
      ><small>Difficulty: {{ currentQuestion.difficulty }}</small>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

h1 {
  line-height: 1.3;
}
.details {
  display: flex;
  justify-content: space-between;
}
</style>
