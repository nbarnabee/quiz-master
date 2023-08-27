<script setup>
import { useQuestionStore } from "../stores/question";
import { storeToRefs } from "pinia";

const questionStore = useQuestionStore();
const { questionNumber, questionAnswered } = storeToRefs(questionStore);

function answerQuestion() {
  questionAnswered.value = true;
}
</script>

<template>
  <span>
    <button
      v-if="questionAnswered"
      type="button"
      @click="
        [
          questionNumber < questionStore.questions.length - 1
            ? questionStore.advanceQuestionNum()
            : questionStore.getQuestions()
        ]
      "
    >
      Next Question
    </button>
    <button v-else type="button" @click="answerQuestion()">Submit</button>
  </span>
</template>

<style scoped>
span {
  display: flex;
  justify-content: center;
}
</style>
