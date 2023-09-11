<script setup>
defineEmits(["beginQuiz"]);
</script>

<template>
  <h1>Welcome to Quiz Master!</h1>
  <p>Build your quiz:</p>
  <form></form>
  <button v-bind="$attrs" @click="[$emit('beginQuiz'), console.log('clicked msg from child')]">
    Begin Quiz
  </button>
</template>

<style></style>
