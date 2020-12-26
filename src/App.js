import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Ds from './topic-pages/Ds'
import Algo from './topic-pages/Algo'
import Os from './topic-pages/Os'
import Dbms from './topic-pages/Dbms'
import Cn from './topic-pages/Cn'
import Oops from './topic-pages/Oops'
import QuizDs from './quiz-page/QuizDs'
import QuizAlgo from './quiz-page/QuizAlgo'
import QuizOs from './quiz-page/QuizOs'
import QuizDbms from './quiz-page/QuizDbms'
import QuizCn from './quiz-page/QuizCn'
import QuizOops from './quiz-page/QuizOops'

const App = () => {
    return (
        <Router>
            
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />

                {/* topics route */}
                <Route path="/ds" component={Ds} />
                <Route path="/algo" component={Algo} />
                <Route path="/os" component={Os} />
                <Route path="/dbms" component={Dbms} />
                <Route path="/cn" component={Cn} />
                <Route path="/oops" component={Oops} />

                {/* quiz start page route */}
                <Route path="/quiz-ds" component={QuizDs} />
                <Route path="/quiz-algo" component={QuizAlgo} />
                <Route path="/quiz-os" component={QuizOs} />
                <Route path="/quiz-dbms" component={QuizDbms} />
                <Route path="/quiz-cn" component={QuizCn} />
                <Route path="/quiz-oops" component={QuizOops} />
            
            <Footer />
        </Router>
    )
}

export default App;