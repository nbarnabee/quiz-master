<script setup>
import { decode } from "../helpers/decode";
import { useQuestionStore } from "../stores/question";
import { storeToRefs } from "pinia";

const questionStore = useQuestionStore();
const { currentAnswers, chosenAnswer } = storeToRefs(questionStore);
</script>

<template>
  <fieldset class="answers">
    <label v-for="(answer, index) in currentAnswers" :for="answer" :key="index">
      <input type="radio" :id="answer" :value="answer" v-model="chosenAnswer" />{{ decode(answer) }}
    </label>
  </fieldset>
</template>

<style scoped>
.answers {
  display: flex;
  flex-direction: column;
  height: 200px;
}
</style>
