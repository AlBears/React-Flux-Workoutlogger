var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var uuid = require('uuid');


var Workout = React.createClass({
	render: function(){
    var { type, minutes, miles, id } = this.props.workout;
    return (

      miles ?

      <li onClick={this.onDelete.bind(this, id)}
      className="list-group-item">
      <a href="#" data-toggle="tooltip" title="Delete?">
      {type} - {' '}
      {minutes} Minutes | {miles} Miles</a></li> :

      <li onClick={this.onDelete.bind(this, id)}
      className="list-group-item">
      <a href="#" data-toggle="tooltip" title="Delete?">
      {type} - {' '}
      {minutes} Minutes</a></li>
    );
	},
  onDelete: function(id){
    if(confirm('Are you sure you want to remove workout?'))
    AppActions.deleteWorkout(id);
  }
});
module.exports = Workout;
