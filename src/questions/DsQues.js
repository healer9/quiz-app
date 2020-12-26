const DsQues = [
    {
        questionText: 'Linked lists are not suitable for the implementation of __ ?',
        answerOptions: [
            { answerText: 'Insertion sort', isCorrect: false },
            { answerText: 'Radix sort', isCorrect: false },
            { answerText: 'Polynomial manipulation', isCorrect: false },
            { answerText: 'Binary search', isCorrect: true },
        ],
    },
    {
        questionText: 'Which of the following is not an application of priority queue?',
        answerOptions: [
            { answerText: 'Huffman codes', isCorrect: false },
            { answerText: 'Interrupt handling in operating system', isCorrect: false },
            { answerText: 'Undo operation in text editors', isCorrect: true },
            { answerText: 'Bayesian spam filter', isCorrect: false },
        ],
    },
    {
        questionText: 'When does the ArrayIndexOutOfBoundsException occur?',
        answerOptions: [
            { answerText: 'Compile-time', isCorrect: false },
            { answerText: 'Run-time', isCorrect: true },
            { answerText: 'Not an error', isCorrect: false },
            { answerText: 'Not an exception at all', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following application makes use of a circular linked list?',
        answerOptions: [
            { answerText: 'Undo operation in a text editor', isCorrect: false },
            { answerText: 'Recursive function calls', isCorrect: false },
            { answerText: 'Allocating CPU to resources', isCorrect: true },
            { answerText: 'Implement Hash Tables', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following concepts make extensive use of arrays?',
        answerOptions: [
            { answerText: 'Binary trees', isCorrect: false },
            { answerText: 'Scheduling of processes', isCorrect: false },
            { answerText: 'Caching', isCorrect: false },
            { answerText: 'Spatial locality', isCorrect: true },
        ],
    },
    {
        questionText: 'What differentiates a circular linked list from a normal linked list?',
        answerOptions: [
            { answerText: 'You cannot have the ‘next’ pointer point to null in a circular linked list', isCorrect: false },
            { answerText: 'It is faster to traverse the circular linked list', isCorrect: false },
            { answerText: 'You may or may not have the ‘next’ pointer point to null in a circular linked list', isCorrect: true },
            { answerText: 'Head node is known in circular linked list', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a memory efficient double linked list?',
        answerOptions: [
            { answerText: 'Each node has only one pointer to traverse the list back and forth', isCorrect: true },
            { answerText: 'The list has breakpoints for faster traversal', isCorrect: false },
            { answerText: 'An auxiliary singly linked list acts as a helper list to traverse through the doubly linked list', isCorrect: false },
            { answerText: 'A doubly linked list that uses bitwise AND operator for storing addresses', isCorrect: false },
        ],
    },
    {
        questionText: 'How do you calculate the pointer difference in a memory efficient double linked list?',
        answerOptions: [
            { answerText: 'head xor tail', isCorrect: false },
            { answerText: 'pointer to previous node xor pointer to next node', isCorrect: true },
            { answerText: 'pointer to previous node – pointer to next node', isCorrect: false },
            { answerText: 'pointer to next node – pointer to previous node', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following is not the application of stack?',
        answerOptions: [
            { answerText: 'A parentheses balancing program', isCorrect: false },
            { answerText: 'Tracking of local variables at run time', isCorrect: false },
            { answerText: 'Compiler Syntax Analyzer', isCorrect: false },
            { answerText: 'Data Transfer between two asynchronous process', isCorrect: true },
        ],
    },
    {
        questionText: 'What is the value of the postfix expression 6 3 2 4 + – *?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '40', isCorrect: false },
            { answerText: '74', isCorrect: false },
            { answerText: '-18', isCorrect: true },
        ],
    },
    {
        questionText: 'Queues serve major role in ______________',
        answerOptions: [
            { answerText: 'Simulation of recursion', isCorrect: false },
            { answerText: 'Simulation of arbitrary linked list', isCorrect: false },
            { answerText: 'Simulation of limited resource allocation', isCorrect: true },
            { answerText: 'Simulation of heap sort', isCorrect: false },
        ],
    },
    {
        questionText: 'The data structure required for Breadth First Traversal on a graph is?',
        answerOptions: [
            { answerText: 'Array', isCorrect: false },
            { answerText: 'Stack', isCorrect: false },
            { answerText: 'Queue', isCorrect: true },
            { answerText: 'Tree', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following is not the type of queue?',
        answerOptions: [
            { answerText: 'Ordinary queue', isCorrect: false },
            { answerText: 'Single ended queue', isCorrect: true },
            { answerText: 'Circular queue', isCorrect: false },
            { answerText: 'Priority queue', isCorrect: false },
        ],
    },
]

export default DsQues;