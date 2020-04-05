const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// defines the shape of the documents within that collection.
const data = {
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            require: " Exercies type cannot be empty !",
            trim: true
        },
        name: {
            type: String,
            require: "Exercies name cannot be empty !",
            trim: true
        },
        duration: {
            type: Number,
            require: "Exercies duration cannot be empty !",
            trim: true
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        },
        

    }]


};

const workoutSchema = new Schema(data,{
    toJSON: {
      virtuals: true
    }
  });
  // define virtual getter attributes to the scheema
workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});
 // compile a model 
const Workout = mongoose.model("Workout",workoutSchema);

module.exports=Workout;