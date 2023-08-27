<script setup>
import { onMounted } from "vue";
import { useQuestionStore } from "../stores/question";
import QuestionContainer from "../components/QuestionContainer.vue";

const questionStore = useQuestionStore();

onMounted(() => {
  questionStore.getNewToken();
});
</script>

<template>
  <main>
    <h1>Welcome to Quiz Master!</h1>
    <QuestionContainer />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  gap: 4rem;
  align-items: center;
}
</style>
