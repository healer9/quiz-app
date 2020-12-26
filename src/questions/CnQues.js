const CnQues = [
    {
        questionText: 'The protocol data unit(PDU) for the application layer in the Internet stack is',
        answerOptions: [
            { answerText: 'Segment', isCorrect: false },
            { answerText: 'Datagram', isCorrect: false },
            { answerText: 'Message', isCorrect: true },
            { answerText: 'Frame', isCorrect: false },
        ],
    },
    {
        questionText: 'In the IPv4 addressing format, the number of networks allowed under Class C addresses is',
        answerOptions: [
            { answerText: '2^14', isCorrect: false },
            { answerText: '2^7', isCorrect: false },
            { answerText: '2^21', isCorrect: true },
            { answerText: '2^24', isCorrect: false },
        ],
    },
    {
        questionText: 'A layer-4 firewall ( a device that can look at all protocol headers up to the transport layer) CANNOT',
        answerOptions: [
            { answerText: 'block HTTP traffic during 9:00PM and 5:00AM', isCorrect: true },
            { answerText: 'block all ICMP traffic', isCorrect: false },
            { answerText: 'stop incoming traffic from a specific IP address but allow outgoing traffic to same IP', isCorrect: false },
            { answerText: 'block TCP traffic from a specific user on a specific IP address on multi-user system during 9:00PM and 5:00AM', isCorrect: false },
        ],
    },
    {
        questionText: 'One of the header fields in an IP datagram is the Time to Live (TTL) field. Which of the following statements best explains the need for this field?',
        answerOptions: [
            { answerText: 'It can be used to priortize packets', isCorrect: false },
            { answerText: 'It can be used to reduce delays', isCorrect: false },
            { answerText: 'It can be used to optimize throughput', isCorrect: false },
            { answerText: 'It can be used to prevent packet looping', isCorrect: true },
        ],
    },
    {
        questionText: 'Packets of the same session may be routed through different paths in:',
        answerOptions: [
            { answerText: 'TCP, but not UDP', isCorrect: false },
            { answerText: 'TCP and UDP', isCorrect: true },
            { answerText: 'UDP, but not TCP', isCorrect: false },
            { answerText: 'Neither TCP nor UDP', isCorrect: false },
        ],
    },
    {
        questionText: 'The address resolution protocol (ARP) is used for:',
        answerOptions: [
            { answerText: 'Finding the IP address from the DNS', isCorrect: false },
            { answerText: 'Finding the IP address of the default gateway', isCorrect: false },
            { answerText: 'Finding the IP address that corresponds to a MAC address', isCorrect: false },
            { answerText: 'Finding the MAC address that corresponds to an IP address', isCorrect: true },
        ],
    },
    {
        questionText: 'The maximum window size for data transmission using the selective reject protocol with n-bit frame sequence numbers is:',
        answerOptions: [
            { answerText: '2^n', isCorrect: false },
            { answerText: '2^(n - 1)', isCorrect: true },
            { answerText: '2^n - 1', isCorrect: false },
            { answerText: '2^(n - 2)', isCorrect: false },
        ],
    },
]

export default CnQues;