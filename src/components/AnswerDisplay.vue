<script setup>
import { decode } from "../helpers/decode";
import { useQuestionStore } from "../stores/question";
import { storeToRefs } from "pinia";

const questionStore = useQuestionStore();
const { currentAnswers } = storeToRefs(questionStore);
</script>

<template>
  <ul class="answers">
    <li v-for="answer in currentAnswers" :key="answer">
      {{ decode(answer) }}
    </li>
  </ul>
</template>

<style scoped>
.answers {
  display: flex;
  flex-direction: column;
  height: 200px;
}
</style>
