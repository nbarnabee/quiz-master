<script setup>
import { onMounted, watchEffect } from "vue";
import { decode } from "../helpers/decode";
import { useQuestionStore } from "../stores/question";

const questionStore = useQuestionStore();

onMounted(() => {
  watchEffect(() => {
    const answerArr = questionStore.currentQuestion.incorrect_answers;
    answerArr.push(questionStore.currentQuestion.correct_answer);
    console.log(answerArr);
  });
});
</script>

<template>
  <p>
    {{ questionStore.currentQuestion ? decode(questionStore.currentQuestion.correct_answer) : "" }}
  </p>
</template>

<style scoped>
p {
  height: 100px;
}
</style>
