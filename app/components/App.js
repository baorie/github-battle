var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');

class App extends React.Component {
    render() {
        return (
            // Only rendered when on path /popular
            <Router>
                <div className='container'>
                    <Nav />
                    <Route path='/popular' component={Popular} />
                </div>
            </Router>
        )
    }
}

// Common JS - Exports app components
module.exports = App;