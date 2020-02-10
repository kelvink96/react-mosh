import React from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './routes/Home';
import Products from './routes/Category';
import Components from './routes/Components';

function App() {
    return (
        <div className="App">
            <nav>
                <ul>
                    {/*link to components*/}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/component">Component</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </nav>

            <Switch>
                {/*route components*/}
                <Route exact path="/" component={Home}/>
                <Route path="/component" component={Components}/>
                <Route path="/products" component={Products}/>
            </Switch>
        </div>
    );
}

export default App;
