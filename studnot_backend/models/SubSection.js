const mongoose = require("mongoose");

const SubSectionSchema = new mongoose.Schema({
	title: { type: String },
	timeDuration: { type: String },
	description: { type: String },
	videoUrl: { type: String },
	courseId:{type: mongoose.Schema.Types.ObjectId},
	sectionId:{type: mongoose.Schema.Types.ObjectId}
});

module.exports = mongoose.model("SubSection", SubSectionSchema);
