const User = require('../models/userModel')

exports.Signup = async (req, res, next) => {
	const newUser = await User.create(req.body);

	res.statu(201).json({
		status: 'success',
		data: ""
	})
}