<script setup>
import { onMounted } from "vue";
import { useQuestionStore } from "../stores/question";
import QuestionBox from "./QuestionBox.vue";
import ChoiceDisplay from "./ChoiceDisplay.vue";
import AnswerDisplay from "./AnswerDisplay.vue";
import ControlButtonBox from "./ControlButtonBox.vue";

const questionStore = useQuestionStore();

onMounted(() => {
  questionStore.getQuestions();
});
</script>

<template>
  <div>
    <QuestionBox />
    <ChoiceDisplay />
    <AnswerDisplay />
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
  max-width: 750px;
}
</style>
