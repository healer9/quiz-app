const OsQues = [
    {
        questionText: 'Which of the following is NOT a valid deadlock prevention scheme? (GATE CS 2000)',
        answerOptions: [
            { answerText: 'Release all resources before requesting a new resource', isCorrect: false },
            { answerText: 'Number the resources uniquely and never request a lower numbered resource than the last one requested', isCorrect: false },
            { answerText: 'Never request a resource after releasing any resource', isCorrect: true },
            { answerText: 'Request and all required resources be allocated before execution', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following requires a device driver?',
        answerOptions: [
            { answerText: 'Register', isCorrect: false },
            { answerText: 'Cache', isCorrect: false },
            { answerText: 'Main memory', isCorrect: false },
            { answerText: 'Disk', isCorrect: true },
        ],
    },
    {
        questionText: 'Consider a machine with 64 MB physical memory and a 32-bit virtual address space. If the page size is 4KB, what is the approximate size of the page table?',
        answerOptions: [
            { answerText: '16 MB', isCorrect: false },
            { answerText: '8 MB', isCorrect: false },
            { answerText: '2 MB', isCorrect: true },
            { answerText: '24 MB', isCorrect: false },
        ],
    },
    {
        questionText: 'More than one word are put in one cache block to',
        answerOptions: [
            { answerText: 'exploit the temporal locality of reference in a program', isCorrect: false },
            { answerText: 'exploit the spatial locality of reference in a program', isCorrect: true },
            { answerText: 'reduce the miss penalty', isCorrect: false },
            { answerText: 'none of the above', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following need not necessarily be saved on a context switch between processes?',
        answerOptions: [
            { answerText: 'General purpose registers', isCorrect: false },
            { answerText: 'Translation look-aside buffer', isCorrect: true },
            { answerText: 'Program counter', isCorrect: false },
            { answerText: 'All of the above', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following does not interrupt a running process?',
        answerOptions: [
            { answerText: 'A device', isCorrect: false },
            { answerText: 'Timer', isCorrect: false },
            { answerText: 'Scheduler process', isCorrect: true },
            { answerText: 'Power failure', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following scheduling algorithms is non-preemptive?',
        answerOptions: [
            { answerText: 'Round Robin', isCorrect: false },
            { answerText: 'First-In First-Out', isCorrect: true },
            { answerText: 'Multilevel Queue Scheduling', isCorrect: false },
            { answerText: 'Multilevel Queue Scheduling with Feedback', isCorrect: false },
        ],
    },
    {
        questionText: 'Using a larger block size in a fixed block size file system leads to',
        answerOptions: [
            { answerText: 'better disk throughput but poorer disk space utilization', isCorrect: true },
            { answerText: 'better disk throughput and better disk space utilization', isCorrect: false },
            { answerText: 'poorer disk throughput but better disk space utilization', isCorrect: false },
            { answerText: 'poorer disk throughput and poorer disk space utilization', isCorrect: false },
        ],
    },
    {
        questionText: 'In which one of the following page replacement policies, Belady’s anomaly may occur?',
        answerOptions: [
            { answerText: 'FIFO', isCorrect: true },
            { answerText: 'Optimal', isCorrect: false },
            { answerText: 'LRU', isCorrect: false },
            { answerText: 'MRU', isCorrect: false },
        ],
    },
    {
        questionText: 'The essential content(s) in each entry of a page table is / are',
        answerOptions: [
            { answerText: 'Virtual page number', isCorrect: false },
            { answerText: 'Page frame number', isCorrect: true },
            { answerText: 'Both virtual page number and page frame number', isCorrect: false },
            { answerText: 'Access right information', isCorrect: false },
        ],
    },
]

export default OsQues;