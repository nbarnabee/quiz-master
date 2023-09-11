<script setup>
import { ref, onMounted, computed } from "vue";
import { useQuestionStore } from "../stores/question";
// import { hideMe } from "../helpers/hide";
import QuizBuilder from "./question/QuizBuilder.vue";
import QuizDisplay from "./question/QuizDisplay.vue";

const questionStore = useQuestionStore();

const builderActive = ref(true);
const currentComponent = computed(() => (builderActive.value ? QuizBuilder : QuizDisplay));
const componentSwap = () => {
  builderActive.value = !builderActive.value;
};

onMounted(() => {
  questionStore.getNewToken();
});
</script>

<template>
  <main>
    <component :is="currentComponent" @begin-quiz="componentSwap"></component>
  </main>
</template>

<style scoped></style>
