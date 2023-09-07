<script setup>
import { onMounted } from "vue";
import { useQuestionStore } from "../../stores/question";
import QuestionBox from "../../components/QuestionBox.vue";
import ChoiceDisplay from "../../components/ChoiceDisplay.vue";
import AnswerDisplay from "../../components/AnswerDisplay.vue";
import ControlButtonBox from "../../components/ControlButtonBox.vue";

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
