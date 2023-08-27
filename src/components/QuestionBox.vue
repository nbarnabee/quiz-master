<script setup>
import { decode } from "../helpers/decode";
import { useQuestionStore } from "../stores/question";
import { storeToRefs } from "pinia";

const questionStore = useQuestionStore();
const { currentQuestion } = storeToRefs(questionStore);
</script>

<template>
  <p>{{ currentQuestion ? decode(currentQuestion.question) : "" }}</p>
</template>

<style>
p {
  max-width: 750px;
}
</style>
