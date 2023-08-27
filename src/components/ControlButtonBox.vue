<script setup>
import { useQuestionStore } from "../stores/question";
import { storeToRefs } from "pinia";

const questionStore = useQuestionStore();
const { questionNumber } = storeToRefs(questionStore);
</script>

<template>
  <span>
    <button
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
  </span>
</template>

<style scoped>
span {
  display: flex;
  justify-content: center;
  width: 500px;
  position: absolute;
  bottom: 0;
}
</style>
