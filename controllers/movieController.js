const Movie = require("../models/Movie");
const { success, error } = require("../utils/responseWrapper");

const getAllMovies = async (req, res) => {
	try {
		const allMovies = await Movie.find();

		if (allMovies.length > 0) {
			return res.send(success(200, { movies: allMovies }));
		}

		return res.send(success(200, "No movies found"));
	} catch (error) {
		console.log("Error in getAllMovies controller: ", error);
		return res.send(error(500, error.message));
	}
};

const getOneMovie = async (req, res) => {
	const { id } = req.params;

	try {
		const movie = await Movie.findById(id);
		if (!movie) {
			return res.send(success(404, "No result found"));
		}

		return res.send(success(200, { movies: movie }));
	} catch (error) {
		console.log("Error in getOneMovie controller: ", error);
		return res.send(error(500, error.message));
	}
};

const createMovie = async (req, res) => {
	const { name, image, summary } = req.body;
	try {
		if (!name || !image || !summary) {
			return res.send(success(400, "All fields are required to create movie"));
		}

		const movie = await Movie.create({ name, image, summary });

		return res.send(success(201, "Book created successfully"));
	} catch (error) {
		console.log("Error in createMovie controller: ", error);
		return res.send(error(500, error.message));
	}
};

const updateMovie = async (req, res) => {
	const { id } = req.params;
	const { name, image, summary } = req.body;
	try {
		const updatedMovie = await Movie.updateOne(
			{ _id: id },
			{ $set: { name, image, summary } }
		);

		return res.send(success(200, { updatedMovie: updatedMovie }));
	} catch (error) {
		console.log("Error in updateMovie controller: ", error);
		return res.send(error(500, error.message));
	}
};

const deleteMovie = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedMovie = await Movie.deleteOne({ _id: id });

		return res.send(success(200, "Movie deleted successfully"));
	} catch (error) {
		console.log("Error in updateMovie controller: ", error);
		return res.send(error(500, error.message));
	}
};

module.exports = {
	getAllMovies,
	getOneMovie,
	createMovie,
	updateMovie,
	deleteMovie,
};
