var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _workouts = [];
var _showForm = false;

var AppStore = assign({}, EventEmitter.prototype, {
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	showForm: function(){
		_showForm = true;
	},
	getShowForm: function(){
		return _showForm;
	},
	addWorkout: function(workout){
		_workouts.push(workout);
	},
	deleteWorkout: function(id){
		_workouts =_workouts.filter((workout) => {return workout.id !== id;});
	},
	getWorkouts: function(){
		return _workouts;
	},
	receiveWorkouts: function(workouts){
		_workouts = workouts;
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){
		case AppConstants.SHOW_FORM:
			AppStore.showForm();
			AppStore.emit(CHANGE_EVENT);
			break;

		case AppConstants.ADD_WORKOUT:
			AppStore.addWorkout(action.workout);
			AppAPI.addWorkout(action.workout);
			AppStore.emit(CHANGE_EVENT);
			break;

		case AppConstants.RECEIVE_WORKOUTS:
			AppStore.receiveWorkouts(action.workouts);
			AppStore.emit(CHANGE_EVENT);
			break;

		case AppConstants.DELETE_WORKOUT:
			AppStore.deleteWorkout(action.id);
			AppAPI.deleteWorkout(action.id);
			AppStore.emit(CHANGE_EVENT);
			break;
		}

	return true;
});

module.exports = AppStore;
