export const studentData = [
  { id: 1, name: 'Abdullah Almutairi', duration: '1 min', date: 'Jun 25, 2024', status: 'Completed', progress: 100 },
  { id: 2, name: 'Abdulaziz Jazzar', duration: '2 min', date: 'Jun 25, 2024', status: 'Delayed', progress: 35 },
  { id: 3, name: 'Mohammed Alharthi', duration: '55 sec', date: 'Jun 25, 2024', status: 'Completed', progress: 68 },
  { id: 4, name: 'Khalid Alzahrani', duration: '3 min', date: 'Jun 25, 2024', status: 'Completed', progress: 100 },
  { id: 5, name: 'Salem Ahmed', duration: '1 min', date: 'Jun 25, 2024', status: 'Average', progress: 50 },
  { id: 6, name: 'Saleh Al-Qahtani', duration: '4 min', date: 'Jun 25, 2024', status: 'Completed', progress: 100 },
  { id: 6, name: 'Saleh Al-Qahtani', duration: '4 min', date: 'Jun 25, 2024', status: 'Completed', progress: 100 },
  { id: 7, name: 'Waleed Hamed', duration: '1 min', date: 'Jun 25, 2024', status: 'Ongoing', progress: 67 },
];

export const statusColors = {
  Excellent: '#1A932E',
  Delayed: '#EE201C',
  Completed: '#4caf50',
  Average: '#E65F2B',
  'Ongoing': '#DFA510',
};

export const chapters = [
  { title: "Chapter 8: Objects and Classes" },
  { title: "Chapter 9: Strings" },
  { title: "Chapter 10: Thinking In Objects" },
  { title: "Chapter 11: Inheritance and Polymorphism" },
  { title: "Chapter 14: Text I/O" },
  { title: "Chapter 15: Abstract Classes and Interfaces" },
  { title: "Chapter 16: Event Driven Programming" },
  { title: "Chapter 21: Generics" },
];

export const sessions = [
  {
    title: 'Session 1: Review 2d Array',
    questions: 10,
    duration: '20 minutes',
    score: 9,
  },
  {
    title: 'Session 2: Passing to methods',
    questions: 10,
    duration: '20 minutes',
    score: 9,
  },
  {
    title: 'Session 3: Case Study',
    questions: 10,
    duration: '20 minutes',
    score: 9,
  },
];
export const mockTransactions = [
  { Questionnumber: '1', AverageDuration: '1 min', Accuracy: '40' },
  { Questionnumber: '2', AverageDuration: '12 min', Accuracy: '10' },
  { Questionnumber: '3', AverageDuration: '10 min', Accuracy: '28' },
  { Questionnumber: '4', AverageDuration: '21 min', Accuracy: '50' },
  { Questionnumber: '5', AverageDuration: '1 min', Accuracy: '40' },
  { Questionnumber: '6', AverageDuration: '12 min', Accuracy: '10' },
  { Questionnumber: '7', AverageDuration: '10 min', Accuracy: '28' },
  { Questionnumber: '8', AverageDuration: '21 min', Accuracy: '50' },
  { Questionnumber: '9', AverageDuration: '12 min', Accuracy: '10' },
  { Questionnumber: '10', AverageDuration: '10 min', Accuracy: '28' },
];


export const questions = {
  "questions": [
    {
      "content": "Which of the following correctly declares a two-dimensional array in Java?",
      "A": "int array = new int[5][5];",
      "B": "int[][] array = new int[5][5];",
      "C": "int[] array = new int[5][5];",
      "D": "int array[][] = new int[5];",
      "chapter": "Multidimensional Array Practice",
      "explanation": "In Java, a two-dimensional array can be declared as `int[][] array = new int[5][5];`. This creates an array with 5 rows and 5 columns."
    },
    {
      "content": "How do you access the element in the second row and third column of a two-dimensional array named 'matrix'?",
      "A": "matrix[2][3]",
      "B": "matrix[3][2]",
      "C": "matrix[1][2]",
      "D": "matrix[2][1]",
      "chapter": "Multidimensional Array Practice",
      "explanation": "In a two-dimensional array, you access an element using the row and column indices. For the second row and third column, it would be `matrix[1][2]` because array indices start at 0."
    },
    {
      "content": "What is the output of the following code?\n```java\nint[][] array = {{1, 2}, {3, 4}};\nSystem.out.println(array[1][0]);\n```",
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "chapter": "Multidimensional Array Practice",
      "explanation": "The output of the code is 3. The array `array` is a two-dimensional array where `array[1][0]` refers to the element in the second row, first column, which is 3."
    },
    {
      "content": "Which method sums all the elements in the first row of a two-dimensional array 'matrix'?",
      "A": "int sum = 0;\nfor (int i = 0; i < matrix.length; i++) {\n sum += matrix[0][i];\n}",
      "B": "int sum = 0;\nfor (int i = 0; i < matrix[0].length; i++) {\n sum += matrix[0][i];\n}",
      "C": "int sum = 0;\nfor (int i = 0; i < matrix.length; i++) {\n sum += matrix[i][0];\n}",
      "D": "int sum = 0;\nfor (int i = 0; i < matrix[0].length; i++) {\n sum += matrix[i][0];\n}",
      "chapter": "Multidimensional Array Practice",
      "explanation": "To sum all the elements in the first row, you need to iterate through all columns of the first row. The correct code is `int sum = 0; for (int i = 0; i < matrix[0].length; i++) { sum += matrix[0][i]; }`."
    },
    {
      "content": "What does the following code print?\n```java\nint[][] array = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\nfor (int col = 0; col < array[0].length; col++) {\n int sum = 0;\n for (int row = 0; row < array.length; row++) {\n sum += array[row][col];\n }\n System.out.println(\"Sum of column \" + col + \": \" + sum);\n}\n```",
      "A": "Sum of column 0: 12\nSum of column 1: 15\nSum of column 2: 18",
      "B": "Sum of column 0: 6\nSum of column 1: 15\nSum of column 2: 24",
      "C": "Sum of column 0: 12\nSum of column 1: 15\nSum of column 2: 21",
      "D": "Sum of column 0: 6\nSum of column 1: 15\nSum of column 2: 27",
      "chapter": "Multidimensional Array Practice",
      "explanation": "The code calculates the sum of each column in the array. The sums are:\nColumn 0: 1 + 4 + 7 = 12\nColumn 1: 2 + 5 + 8 = 15\nColumn 2: 3 + 6 + 9 = 18\nSo, the output is:\nSum of column 0: 12\nSum of column 1: 15\nSum of column 2: 18."
    }
  ]
}


export var q_index = 3
export var question = questions.questions[q_index]