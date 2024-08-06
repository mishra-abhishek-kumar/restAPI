const Movie = require("../models/Movie");

const getAllMovies = () => {};

const getOneMovie = () => {};

const createMovie = async (req, res) => {
	const { name, image, summary } = req.body;
	try {
		if (!name || !image || !summary) {
			return res.status(400).send("All fields are required to create movie");
		}

		const movie = await Movie.create({ name, image, summary });

		return res.status(201).send("Book created successfully");
	} catch (error) {
		console.log("Error in createMovie controller: ", error);
	}
};

const updateMovie = () => {};

const deleteMovie = () => {};

module.exports = {
	getAllMovies,
	getOneMovie,
	createMovie,
	updateMovie,
	deleteMovie,
};
