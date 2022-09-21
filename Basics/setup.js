const students = [
    {
        id: 1,
        name: 'peter',
        score: 80,
        favouriteSubject: 'math',
    },
    {
        id: 2,
        name: 'susan',
        score: 99,
        favouriteSubject: 'history',
    },
    {
        id: 3,
        name: 'anna',
        score: 85,
        favouriteSubject: 'math',
    },
    {
        id: 4,
        name: 'john',
        score: 34,
        favouriteSubject: 'art',
    },
    {
        id: 5,
        name: 'bobo',
        score: 74,
        favouriteSubject: 'math',
    },
]

console.log(students)
// Output:
// [
//     ({ id: 1, name: 'peter', score: 80, favouriteSubject: 'math' },
//     { id: 2, name: 'susan', score: 99, favouriteSubject: 'history' },
//     { id: 3, name: 'anna', score: 85, favouriteSubject: 'math' },
//     { id: 4, name: 'john', score: 34, favouriteSubject: 'art' },
//     { id: 5, name: 'bobo', score: 74, favouriteSubject: 'math' })
// ]

const updatedStudents = students.map((student) => {
    student.role = 'student'
    return student
})

console.log(updatedStudents)
console.log()
// Output:
// [
//   {
//     id: 1,
//     name: 'peter',
//     score: 80,
//     favouriteSubject: 'math',
//     role: 'student'
//   },
//   {
//     id: 2,
//     name: 'susan',
//     score: 99,
//     favouriteSubject: 'history',
//     role: 'student'
//   },
//   {
//     id: 3,
//     name: 'anna',
//     score: 85,
//     favouriteSubject: 'math',
//     role: 'student'
//   },
//   {
//     id: 4,
//     name: 'john',
//     score: 34,
//     favouriteSubject: 'art',
//     role: 'student'
//   },
//   {
//     id: 5,
//     name: 'bobo',
//     score: 74,
//     favouriteSubject: 'math',
//     role: 'student'
//   }
// ]

const highScores = students.filter((student) => {
    return student.score >= 80
})

console.log(highScores)
console.log()
// Output:
// [
//   {
//     id: 1,
//     name: 'peter',
//     score: 80,
//     favouriteSubject: 'math',
//     role: 'student'
//   },
//   {
//     id: 2,
//     name: 'susan',
//     score: 99,
//     favouriteSubject: 'history',
//     role: 'student'
//   },
//   {
//     id: 3,
//     name: 'anna',
//     score: 85,
//     favouriteSubject: 'math',
//     role: 'student'
//   }
// ]

const specificId = students.find((student) => {
    return student.id == 1
})

console.log(specificId)
console.log()
// Output:
// {
//   id: 1,
//   name: 'peter',
//   score: 80,
//   favouriteSubject: 'math',
//   role: 'student'
// }

const averageScore =
    students.reduce((total, student) => {
        total += student.score
        return total
    }, 0) / students.length

console.log(averageScore)
console.log()
// Output:
// 74.4

const value = students.reduce((survey, student) => {
    let favSub = student.favouriteSubject
    if (survey[favSub]) {
        survey[favSub] += 1
    } else {
        survey[favSub] = 1
    }
    return survey
}, {})

console.log(value)
// Output:
// { math: 3, history: 1, art: 1 }
