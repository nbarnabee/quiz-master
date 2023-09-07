<script setup>
import { computed } from "vue";
import { decode } from "../helpers/decode";
import { useQuestionStore } from "../stores/question";

const questionStore = useQuestionStore();

const correctness = computed(() => (questionStore.correctAnswerGiven ? "correct" : "incorrect"));
</script>

<template>
  <p :class="[questionStore.currentQuestion && questionStore.questionAnswered ? '' : 'hidden']">
    That's
    <span :class="[correctness === 'correct' ? 'blue-text' : 'red-text', 'big-text']">{{
      correctness
    }}</span
    >! The answer is
    {{ questionStore.currentQuestion ? decode(questionStore.currentQuestion.correct_answer) : "" }}.
  </p>
  <p :class="[questionStore.numberOfQuestions > 0 ? '' : 'hidden']">
    You've answered {{ questionStore.correctAnswers }} out of
    {{ questionStore.numberOfQuestions }} questions correctly.
  </p>
</template>

<style scoped>
p {
  height: 50px;
}

.big-text {
  font-weight: bold;
}

.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.hidden {
  visibility: hidden;
}
</style>
