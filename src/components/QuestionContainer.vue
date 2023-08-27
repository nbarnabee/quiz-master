<script setup>
import { onMounted } from "vue";
import { useQuestionStore } from "../stores/question";
import QuestionBox from "./QuestionBox.vue";
import AnswerDisplay from "./AnswerDisplay.vue";
import AnswerBox from "./AnswerBox.vue";
import ControlButtonBox from "./ControlButtonBox.vue";

const questionStore = useQuestionStore();

onMounted(() => {
  questionStore.getQuestions();
});
</script>

<template>
  <div>
    <QuestionBox />
    <AnswerDisplay />
    <AnswerBox />
    <ControlButtonBox />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  height: 300px;
}
</style>
