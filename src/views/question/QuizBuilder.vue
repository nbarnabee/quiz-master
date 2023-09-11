<script setup>
import CheckboxInput from "../../components/inputs/CheckboxInput.vue";
import RadioGroup from "../../components/inputs/RadioGroup.vue";
defineEmits(["beginQuiz"]);
const categories = {
  "General Knowledge": 9,
  Books: 10,
  Film: 11,
  Music: 12,
  "Musicals & Theater": 13,
  Television: 14,
  "Video Games": 15,
  "Board Games": 16,
  "Science & Nature": 17,
  Computers: 18,
  Mathematics: 19,
  Mythology: 20,
  Sports: 21,
  Geography: 22,
  History: 23,
  Politics: 24,
  Art: 25,
  Celebrities: 26,
  Animals: 27,
  Vehicles: 28,
  Comics: 29,
  Gadgets: 30,
  "Anime & Manga": 31,
  "Cartoons & Animation": 32
};

const difficulty = {
  Easy: "easy",
  Medium: "medium",
  Hard: "hard"
};
</script>

<template>
  <h1>Welcome to Quiz Master!</h1>
  <h2>Build your quiz:</h2>
  <form>
    <section>
      <h3>Number of questions</h3>
      <small>50 questions maximum</small>
      <input type="number" id="length" />
    </section>
    <section>
      <h3>Categories</h3>
      <small>Optional. Leave blank for a mix of categories.</small>
      <div>
        <CheckboxInput
          v-for="(value, key) of categories"
          :key="value"
          :label="key"
          :value="value"
        />
      </div>
    </section>
    <section>
      <h3>Difficulty</h3>
      <small>Optional. Leave blank for a mix of difficulty levels.</small>
      <RadioGroup :options="difficulty" :name="difficulty" />
    </section>

    <button v-bind="$attrs" @click="$emit('beginQuiz')">Begin Quiz</button>
  </form>
</template>

<style scoped></style>
