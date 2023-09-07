## Anatomy of the API response

OpenTDB returns an array of objects with the following structure:

```
{
​​​ category: "Entertainment: Books"
​​​ correct_answer: "Arthur Conan Doyle"
​​​ difficulty: "medium"
​​​ incorrect_answers: Array(3) [ "Graham Greene", "H G Wells", "Arthur C Clarke" ]
​​​ question: "Which of the following authors was not born in England? "
​​​ type: "multiple"
}
```

True or False questions will be of `type: boolean` and have a single entry in the `incorrect_answers` array.
