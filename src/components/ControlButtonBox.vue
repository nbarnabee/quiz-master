<script setup>
import { useQuestionStore } from "../stores/question";

const questionStore = useQuestionStore();
</script>

<template>
  <span>
    <button
      v-if="questionStore.questionAnswered"
      type="button"
      @click="
        [
          questionStore.questionNumber < questionStore.questions.length - 1
            ? questionStore.advanceQuestionNum()
            : questionStore.getQuestions()
        ]
      "
    >
      Next Question
    </button>
    <button v-else type="button" @click="questionStore.checkAnswer()">Submit</button>
  </span>
</template>

<style scoped>
span {
  display: flex;
  justify-content: center;
}
</style>
