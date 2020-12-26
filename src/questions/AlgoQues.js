const AlgoQues = [
    {
        questionText: 'Which of the following is false about a circular linked list?',
        answerOptions: [
            { answerText: 'Every node has a successor', isCorrect: false },
            { answerText: 'Time complexity of inserting a new node at the head of the list is O(1)', isCorrect: true },
            { answerText: 'Time complexity for deleting the last node is O(n)', isCorrect: false },
            { answerText: 'We can traverse the whole circular linked list by starting from any point', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the time complexity to insert a node based on key in a priority queue?',
        answerOptions: [
            { answerText: 'O(nlogn)', isCorrect: false },
            { answerText: 'O(logn)', isCorrect: false },
            { answerText: 'O(n)', isCorrect: true },
            { answerText: 'O(n*n)', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the time complexity of inserting at the end in dynamic arrays?',
        answerOptions: [
            { answerText: 'O(1)', isCorrect: false },
            { answerText: 'O(n)', isCorrect: false },
            { answerText: 'O(logn)', isCorrect: false },
            { answerText: 'Either O(1) or O(n)', isCorrect: true },
        ],
    },
    {
        questionText: 'What is the space complexity for deleting a linked list?',
        answerOptions: [
            { answerText: 'O(1)', isCorrect: true },
            { answerText: 'O(n)', isCorrect: false },
            { answerText: 'Either O(1) or O(n)', isCorrect: false },
            { answerText: 'O(logn)', isCorrect: false },
        ],
    },
    {
        questionText: 'The concatenation of two lists can be performed in O(1) time. Which of the following variation of the linked list can be used?',
        answerOptions: [
            { answerText: 'Singly linked list', isCorrect: false },
            { answerText: 'Doubly linked list', isCorrect: false },
            { answerText: 'Circular doubly linked list', isCorrect: true },
            { answerText: 'Array implementation of list', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?',
        answerOptions: [
            { answerText: 'Insertion Sort', isCorrect: false },
            { answerText: 'Quick Sort', isCorrect: false },
            { answerText: 'Heap Sort', isCorrect: false },
            { answerText: 'Merge Sort', isCorrect: true },
        ],
    },
]

export default AlgoQues;