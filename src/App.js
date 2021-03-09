import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import PostDetail from './Components/PostDetail/PostDetail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/home">Home2</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/post/:id">
                            <PostDetail></PostDetail>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div >
    );
}

export default App;
