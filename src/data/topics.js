import DsQues from '../questions/DsQues'
import AlgoQues from '../questions/AlgoQues'
import OsQues from '../questions/OsQues'
import DbmsQues from '../questions/DbmsQues'
import CnQues from '../questions/CnQues'
import OopsQues from '../questions/OopsQues'

const topics = [
    {
        id: 1,
        title: 'Data Structure',
        path: '/ds',
        no_of_questions: DsQues.length,
        alloted_time: DsQues.length * 2,
        quiz_path: '/quiz-ds'
    },
    {
        id: 2,
        title: 'Algorithm',
        path: '/algo',
        no_of_questions: AlgoQues.length,
        alloted_time: AlgoQues.length * 2,
        quiz_path: '/quiz-algo'
    },
    {
        id: 3,
        title: 'Operating System',
        path: '/os',
        no_of_questions: OsQues.length,
        alloted_time: OsQues.length * 2,
        quiz_path: '/quiz-os'
    },
    {
        id: 4,
        title: 'DBMS',
        path: '/dbms',
        no_of_questions: DbmsQues.length,
        alloted_time: DbmsQues.length * 2,
        quiz_path: '/quiz-dbms'
    },
    {
        id: 5,
        title: 'Computer Networks',
        path: '/cn',
        no_of_questions: CnQues.length,
        alloted_time: CnQues.length * 2,
        quiz_path: '/quiz-cn'
    },
    {
        id: 6,
        title: 'Object Oriented Programming',
        path: '/oops',
        no_of_questions: OopsQues.length,
        alloted_time: OopsQues.length * 2,
        quiz_path: '/quiz-oops'
    },
]

export default topics