var React = require('react');
var Popular = require('./Popular');

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Popular />
            </div>
        )
    }
}

// Common JS - Exports app components
module.exports = App;