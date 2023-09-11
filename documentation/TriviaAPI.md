# Open Trivia Database API

(Because I got tired of referencing their website.)

## Options

### Number of Questions

Integer: `amount=10`
Maximum 50 questions per API call.

### Category

Integer. Optional. Not including this will result in a random grab-bag of questions. Only one category can be specified per API call.

`category=9`

| ID  | Name                               | Total Questions | Easy | Medium | Hard |
| --- | ---------------------------------- | --------------- | ---- | ------ | ---- |
| 9   | General Knowledge                  | 305             | 122  | 123    | 60   |
| 10  | Entertainment: Books               | 97              | 30   | 41     | 26   |
| 11  | Entertainment: Film                | 247             | 87   | 118    | 42   |
| 12  | Entertainment: Music               | 364             | 107  | 189    | 68   |
| 13  | Entertainment: Musicals & Theaters | 31              | 8    | 13     | 10   |
| 14  | Entertainment: Television          | 170             | 69   | 72     | 29   |
| 15  | Entertainment: Video Games         | 960             | 324  | 448    | 188  |
| 16  | Entertainment: Board Games         | 59              | 19   | 15     | 25   |
| 17  | Science & Nature                   | 229             | 61   | 100    | 68   |
| 18  | Science: Computers                 | 159             | 48   | 74     | 37   |
| 19  | Mathematics                        | 53              | 14   | 23     | 16   |
| 20  | Mythology                          | 57              | 18   | 26     | 13   |
| 21  | Sports                             | 132             | 48   | 64     | 20   |
| 22  | Geography                          | 275             | 80   | 139    | 56   |
| 23  | History                            | 310             | 68   | 162    | 80   |
| 24  | Politics                           | 59              | 18   | 26     | 15   |
| 25  | Art                                | 29              | 9    | 11     | 9    |
| 26  | Celebrities                        | 52              | 13   | 31     | 8    |
| 27  | Animals                            | 75              | 27   | 30     | 18   |
| 28  | Vehicles                           | 71              | 21   | 32     | 18   |
| 29  | Entertainment: Comics              | 67              | 15   | 33     | 19   |
| 30  | Science: Gadgets                   | 24              | 9    | 10     | 5    |
| 31  | Entertainment: Anime & Manga       | 184             | 59   | 82     | 43   |
| 32  | Entertainment: Cartoon & Animation | 89              | 32   | 40     | 17   |

Making a request for a number of questions greater than those within a particular category will result in an error. So I'll need to bear that in mind.

Numbers current as of 10.9.2023.

Todo: setup some sort of backend that can track & adjust these stats.

### Difficulty

String. Optional.

```

difficulty=easy
difficulty=medium
difficulty=hard

```

### Type

String. Optional. Can specify multiple-choice or True/False questions.

```

type=multiple
type=boolean

```

### Encoding

No reason not to stick with the default encoding.

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

### Response Codes

0: Success
1: No results. Could not return results. The API doesn't have enough questions for the query (e.g., asking for 50 questions in a category that only has 20)
2: Invalid parameter
3: Session Token not found
4: Token empty. (Session token has returned all possible questions for the query. A reset of the token is required.)

```

```
