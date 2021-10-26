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

            <Footer />
        </Router>
    )
}

export default App;