const mongoose = require("mongoose");

module.exports = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGODB_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});

		console.log(`MongoDB connected`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
