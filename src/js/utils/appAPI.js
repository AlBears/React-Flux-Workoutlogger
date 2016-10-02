var AppActions = require('../actions/AppActions');

module.exports = {
	addWorkout: function(workout){
		var workouts = JSON.parse(localStorage.getItem('workouts'));
		workouts ? workouts : workouts = [];
		workouts.push(workout);
		localStorage.setItem('workouts', JSON.stringify(workouts));
	},
	getWorkouts: function(){
		var workouts = JSON.parse(localStorage.getItem('workouts'));
		workouts ? workouts : workouts = [];
		AppActions.receiveWorkouts(workouts);
	},
	deleteWorkout: function(id){
		var workouts = JSON.parse(localStorage.getItem('workouts'));
		workouts = workouts.filter((workout) => {return workout.id !== id;});
		localStorage.setItem('workouts', JSON.stringify(workouts));
	}
}
