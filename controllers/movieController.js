const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {
	try {
		const allMovies = await Movie.find();

		if (allMovies.length > 0) {
			return res.status(200).send(allMovies);
		}

		return res.status(200).send("No movies found");
	} catch (error) {
		console.log("Error in getAllMovies controller: ", error);
	}
};

const getOneMovie = async (req, res) => {
	const { id } = req.params;

	try {
		const movie = await Movie.findById(id);
		if (!movie) {
			return res.status(404).send("No result found");
		}
		return res.status(200).send({ movie });
	} catch (error) {
		console.log("Error in getAllMovies controller: ", error);
	}
};

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
