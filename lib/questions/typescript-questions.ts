import { Question } from '../types';

export const typescriptQuestions: Question[] = [
  {
    id: 1,
    question: "What is the purpose of TypeScript interfaces?",
    options: [
      "To define implementation details",
      "To define a contract for object structure",
      "To create class instances",
      "To optimize code performance"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "What is the difference between 'type' and 'interface' in TypeScript?",
    options: [
      "They are exactly the same",
      "Types can't be extended, interfaces can",
      "Interfaces can't be used with unions, types can",
      "Types are faster than interfaces"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What is the 'any' type in TypeScript?",
    options: [
      "A type that can hold any value",
      "A type for numbers only",
      "A type for strings only",
      "A type for arrays only"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "What is the purpose of 'readonly' modifier in TypeScript?",
    options: [
      "To prevent the value from being changed after initialization",
      "To make a property writable",
      "To allow only read operations on an object",
      "To optimize memory usage"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "How do you define a tuple in TypeScript?",
    options: [
      "Using an array type with specific types for each element",
      "Using a generic array type",
      "Using an object with keys for each element",
      "Using the 'type' keyword with a list of values"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "What is the purpose of 'never' type in TypeScript?",
    options: [
      "To represent values that never occur, such as errors",
      "To represent values that can be null or undefined",
      "To represent values that are undefined",
      "To represent values that are always true"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "What does the 'as' keyword do in TypeScript?",
    options: [
      "It casts a value to a different type",
      "It defines a new class",
      "It imports a module",
      "It checks if a variable is of a certain type"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "How do you define a function with optional parameters in TypeScript?",
    options: [
      "By using a question mark after the parameter name",
      "By using the 'optional' keyword",
      "By defining default values for parameters",
      "By using the 'void' keyword"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "What is the difference between 'null' and 'undefined' in TypeScript?",
    options: [
      "Null represents the absence of any value, undefined represents uninitialized variables",
      "Both represent uninitialized variables",
      "Null is a data type, undefined is not",
      "Undefined represents a variable that has been initialized but has no value"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "How can you define a union type in TypeScript?",
    options: [
      "By using a pipe symbol (|) between types",
      "By using the 'union' keyword",
      "By using an array with multiple types",
      "By using a comma between types"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "What does 'interface' allow in TypeScript?",
    options: [
      "To define contracts for classes and objects",
      "To define types for functions only",
      "To extend only objects",
      "To define the structure of arrays"
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "What is the 'unknown' type in TypeScript?",
    options: [
      "A type that can hold any value but must be checked before use",
      "A type that can only hold null or undefined",
      "A type that represents a type error",
      "A type that is the same as 'any'"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "What does the 'keyof' keyword do in TypeScript?",
    options: [
      "It returns a type representing all the keys of an object type",
      "It defines a function signature",
      "It checks if a value is a key of an object",
      "It creates an object from a set of keys"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "What is a type alias in TypeScript?",
    options: [
      "It is a way to create a custom name for a type",
      "It is used to define a class",
      "It is used to define a function signature",
      "It is a way to create a new object"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "How do you declare a constant in TypeScript?",
    options: [
      "By using the 'const' keyword",
      "By using the 'let' keyword",
      "By using the 'constant' keyword",
      "By using the 'declare' keyword"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "What is a class in TypeScript?",
    options: [
      "A blueprint for creating objects with properties and methods",
      "A variable that holds multiple values",
      "A function that returns a value",
      "A structure to represent arrays"
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "How do you import a module in TypeScript?",
    options: [
      "By using the 'import' keyword",
      "By using the 'require' keyword",
      "By using the 'module' keyword",
      "By using the 'include' keyword"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "What is the 'readonly' modifier in TypeScript used for?",
    options: [
      "To make a property immutable after initialization",
      "To make a method read-only",
      "To restrict access to a class",
      "To define a read-only array"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "What is the 'this' keyword in TypeScript?",
    options: [
      "It refers to the current instance of a class or object",
      "It refers to the global object",
      "It refers to the type of a variable",
      "It refers to the parent class"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "How do you enable strict mode in TypeScript?",
    options: [
      "By adding 'strict': true in tsconfig.json",
      "By using the 'strict' keyword in the code",
      "By adding the 'use strict' statement",
      "By enabling strict mode in the compiler"
    ],
    correctAnswer: 0
  }
];
