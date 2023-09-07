<script setup>
import { ref, onMounted, computed } from "vue";
import { useQuestionStore } from "../stores/question";
// import { hideMe } from "../helpers/hide";
import QuizBuilder from "./question/QuizBuilder.vue";
import QuizDisplay from "./question/QuizDisplay.vue";

const questionStore = useQuestionStore();
const builderActive = ref(true);
const currentComponent = computed(() => (builderActive.value ? QuizBuilder : QuizDisplay));
function componentSwap($event) {
  builderActive.value = !builderActive.value;
  $event.target.style.display = "none";
}

onMounted(() => {
  questionStore.getNewToken();
});
</script>

<template>
  <main>
    <component :is="currentComponent"></component>
    <button @click="componentSwap">Begin Quiz</button>
  </main>
</template>

<style scoped></style>
