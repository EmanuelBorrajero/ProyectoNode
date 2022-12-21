import UserService from '../services/user.service.js'

export const postCreateUserController = async (req, res, next) => {
	const {
		body: { email, name, image, password, passwordConfirmation },
	} = req

	try {
		await UserService.create({
			email,
			name,
			image, 
			password,
			passwordConfirmation,
		})
		res.send('User created successfuly')
	} catch (error) {
		next(error)
	}
}

export const getGetUserListController = async (req, res, next) => {
	try {
		const users = await UserService.findAll()
		res.send(users)
	} catch (error) {
		next(error)
	}
}

export const putUpdateUserController = async (req, res, next) => {
	const {
		body: { id, email, name, image },
	} = req

	try {
		await UserService.update({
			id,
			email,
			name,
			image,
		})
		res.send('User updated successfuly')
	} catch (error) {
		next(error)
	}
}

export const getGetUserByIdController = async (req, res, next) => {
	const {
		params: { id },
	} = req
	try {
		const user = await UserService.findByPk(id)
		res.send(user)
	} catch (error) {
		next(error)
	}
}

export const deleteDeleteUserController = async (req, res, next) => {
	const {
		params: { id },
	} = req

	try {
		await UserService.delete(id)
		res.send('User deleted successfuly')
	} catch (error) {
		next(error)
	}
}
