var AppActions = require('../actions/AppActions');

module.exports = {
	addWorkout: function(workout){
		var workouts = JSON.parse(localStorage.getItem('workouts'));
		if(workouts){
			workouts.push(workout);
		} else {
			workouts = [];
			workouts.push(workout);
		}
		localStorage.setItem('workouts', JSON.stringify(workouts));
	},
	getWorkouts: function(){
		var workouts = JSON.parse(localStorage.getItem('workouts'));
		AppActions.receiveWorkouts(workouts);
	}
}
