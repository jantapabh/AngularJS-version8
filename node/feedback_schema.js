var mongoose = require('mongoose');


var FeedbackSchema = mongoose.Schema({ 
    username: {type: String, require: true},
    feedback: {type: String, require: true}
});

//Create Model

var FeedbackModel = mongoose.model('feedbacks', FeedbackSchema);
module.exports = FeedbackModel;