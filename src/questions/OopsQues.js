const OopsQues = [
    {
        questionText: 'Which of the followings is/are automatically added to every class, if we do not write our own.',
        answerOptions: [
            { answerText: 'Copy Constructor', isCorrect: false },
            { answerText: 'Assignment Operator', isCorrect: false },
            { answerText: 'A constructor without any parameter', isCorrect: false },
            { answerText: 'All of the above', isCorrect: true },
        ],
    },
    {
        questionText: 'We must use initializer list in a constructor when',
        answerOptions: [
            { answerText: 'There is a reference variable in class', isCorrect: false },
            { answerText: 'There is a constant variable in class', isCorrect: false },
            { answerText: 'There is an object of another class. And the other class doesn’t have default constructor.', isCorrect: false },
            { answerText: 'All of the above', isCorrect: true },
        ],
    },
    {
        questionText: 'Which of the following is associated with objects?',
        answerOptions: [
            { answerText: 'State', isCorrect: false },
            { answerText: 'Behaviour', isCorrect: false },
            { answerText: 'Identity', isCorrect: false },
            { answerText: 'All of the above', isCorrect: true },
        ],
    },
    {
        questionText: 'Consider the following two statements: (a)A publicly derived class is a subtype of its base class. (b)Inheritance provides for code reuse.',
        answerOptions: [
            { answerText: 'Both the statements (a) and (b) are correct.', isCorrect: true },
            { answerText: 'Neither of the statements (a) and (b) are correct', isCorrect: false },
            { answerText: 'Statement (a) is correct and (b) is incorrect', isCorrect: false },
            { answerText: 'Statement (a) is incorrect and (b) is correct.', isCorrect: false },
        ],
    },
    {
        questionText: 'The feature in object-oriented programming that allows the same operation to be carried out differently, depending on the object, is:',
        answerOptions: [
            { answerText: 'Inheritance', isCorrect: false },
            { answerText: 'Polymorphism', isCorrect: true },
            { answerText: 'Overfunctioning', isCorrect: false },
            { answerText: 'Overriding', isCorrect: false },
        ],
    },
    {
        questionText: 'Can constructors be overloaded in derived class?',
        answerOptions: [
            { answerText: 'Yes, always', isCorrect: false },
            { answerText: 'Yes, if derived class has no constructor', isCorrect: false },
            { answerText: 'No, programmer can’t do it', isCorrect: false },
            { answerText: 'No, never', isCorrect: true },
        ],
    },
    {
        questionText: 'Why do we use constructor overloading?',
        answerOptions: [
            { answerText: 'To use different types of constructors', isCorrect: false },
            { answerText: 'Because it’s a feature provided', isCorrect: false },
            { answerText: 'To initialize the object in different ways', isCorrect: true },
            { answerText: 'To differentiate one constructor from another', isCorrect: false },
        ],
    },
    {
        questionText: 'Which is correct syntax?',
        answerOptions: [
            { answerText: 'classname objectname = new() integer;', isCorrect: false },
            { answerText: 'classname objectname= new classname;', isCorrect: false },
            { answerText: 'classname objectname= new classname();', isCorrect: true },
            { answerText: 'classname objectname= new() classname();', isCorrect: false },
        ],
    },
]

export default OopsQues;