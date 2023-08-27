<script setup>
import { onMounted } from "vue";
import { useQuestionStore } from "../stores/question";
import QuestionBox from "./QuestionBox.vue";
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
  height: 250px;
  position: static;
}
</style>
