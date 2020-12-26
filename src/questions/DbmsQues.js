const DbmsQues = [
    {
        questionText: 'An ________ is a set of entities of the same type that share the same properties, or attributes.',
        answerOptions: [
            { answerText: 'Entity set', isCorrect: true },
            { answerText: 'Attribute set', isCorrect: false },
            { answerText: 'Relation set', isCorrect: false },
            { answerText: 'Entity model', isCorrect: false },
        ],
    },
    {
        questionText: 'Not applicable condition can be represented in relation entry as',
        answerOptions: [
            { answerText: 'NA', isCorrect: false },
            { answerText: '0', isCorrect: false },
            { answerText: 'NULL', isCorrect: true },
            { answerText: 'Blank Space', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following can be a multivalued attribute?',
        answerOptions: [
            { answerText: 'Phone_number', isCorrect: true },
            { answerText: 'Name', isCorrect: false },
            { answerText: 'Date_of_birth', isCorrect: false },
            { answerText: 'All of the mentioned', isCorrect: false },
        ],
    },
    {
        questionText: 'The ________ clause is used to list the attributes desired in the result of a query.',
        answerOptions: [
            { answerText: 'Where', isCorrect: false },
            { answerText: 'Select', isCorrect: true },
            { answerText: 'From', isCorrect: false },
            { answerText: 'Distinct', isCorrect: false },
        ],
    },
    {
        questionText: 'A relational database consists of a collection of',
        answerOptions: [
            { answerText: 'Tables', isCorrect: true },
            { answerText: 'Fields', isCorrect: false },
            { answerText: 'Records', isCorrect: false },
            { answerText: 'Keys', isCorrect: false },
        ],
    },
    {
        questionText: 'The tuples of the relations can be of ________ order.',
        answerOptions: [
            { answerText: 'Any', isCorrect: true },
            { answerText: 'Same', isCorrect: false },
            { answerText: 'Sorted', isCorrect: false },
            { answerText: 'Constant', isCorrect: false },
        ],
    },
    {
        questionText: 'Consider attributes ID, CITY and NAME. Which one of this can be considered as a super key?',
        answerOptions: [
            { answerText: 'NAME', isCorrect: false },
            { answerText: 'ID', isCorrect: true },
            { answerText: 'CITY', isCorrect: false },
            { answerText: 'CITY, ID', isCorrect: false },
        ],
    },
    {
        questionText: 'Which one of the following attribute can be taken as a primary key?',
        answerOptions: [
            { answerText: 'Name', isCorrect: false },
            { answerText: 'Street', isCorrect: false },
            { answerText: 'Id', isCorrect: true },
            { answerText: 'Department', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following is used to denote the selection operation in relational algebra?',
        answerOptions: [
            { answerText: 'Pi (Greek)', isCorrect: false },
            { answerText: 'Sigma (Greek)', isCorrect: true },
            { answerText: 'Lambda (Greek)', isCorrect: false },
            { answerText: 'Omega (Greek)', isCorrect: false },
        ],
    },
]

export default DbmsQues;