const mongoose = require("mongoose");

// Define the Section schema
const sectionSchema = new mongoose.Schema({
	sectionName: {
		type: String,
	},
	courseId: {
		type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "CourseId",
	},
	subSection: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "SubSection",
		},
	],
});

// Export the Section model
module.exports = mongoose.model("Section", sectionSchema);
