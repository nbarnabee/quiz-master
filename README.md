# quiz-master

Having spent some time going deeper into Vue.js and exploring Pinia, I decided to put what I'd learned into practice and rewrite a project I'd made earlier using vanilla JS: [Trivia Trainer](https://nbarnabee.github.io/api_projects/trivia_trainer/) ([Repo](https://github.com/nbarnabee/api_projects/tree/main/trivia_trainer))

This project uses the [Open Trivia Database](https://opentdb.com/) ([API documentation](https://opentdb.com/api_config.php))

Trivia Trainer displayed the full set of questions on screen at once; for Quiz Master I wanted to display the questions one at a time and share information across multiple components (that's the beauty of Vue, after all). What better use case for a state management framework?

In my enthusiasm, I may have shoved too much into a single store, but that's what refactoring is for!

The project is currently live at https://nbarnabee.github.io/quiz-master/

In progress:
I'm currently working on a form component that will allow the user to specify subjects/difficulty/# of questions.

See the `form` branch.

To do:
Add unit tests.
Break the questions store into smaller bites.

### Project Setup

Fork repo.

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/) (To be implemented later)

```sh
npm run test:unit
```
