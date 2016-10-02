var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var uuid = require('uuid');


var Workouts = React.createClass({
	render: function(){
    var { type, minutes, miles } = this.props.workout;
    return (
      miles ?
      <li className="list-group-item">{type} {minutes} Minutes {miles} Miles</li>:
      <li className="list-group-item">{type} {minutes} Minutes</li>
    );
	}
});
module.exports = Workouts;
