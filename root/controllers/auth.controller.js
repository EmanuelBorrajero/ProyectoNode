import { avoidServerAttacks, hashUserPassword } from '../util/encrypt.js'
import { NOT_FOUND_ERROR_CODE } from '../constants/errors.js'
import UserService from '../services/user.service.js'
import CourseService from '../services/course.service.js'
import AttendanceService from '../services/attendance.service.js'

export const postRegisterUserController = async (req, res, next) => {
	const {
		body: { email, name, password, passwordConfirmation },
	} = req

	try {
		await UserService.create({
			email,
			name,
			password,
			passwordConfirmation,
		})
		res.send('User created successfuly')
	} catch (error) {
		next(error)
	}
}

export const postLoginUserController = async (req, res, next) => {
	try {
		const {
			session,
			body: { email, password, courseId },
		} = req

		await avoidServerAttacks()
		const user = await UserService.findOne({
			email,
			password: hashUserPassword(password),
		})
		courseId && (await CourseService.findByPk(courseId))

		const { id: userId } = user
		courseId &&
			(await AttendanceService.create({
				courseId,
				userId,
			}))

		// Login User
		session.user_id = userId
		// TODO Real access_token needed
		session.access_token = hashUserPassword(
			`secret-${new Date().toDateString()}`
		)
		// TODO Remove password from response
		res.send({ user, access_token: session.access_token })
	} catch (error) {
		if (error.status && error.status === NOT_FOUND_ERROR_CODE) {
			error.message = 'Invalid Credentials'
		}
		next(error)
	}
}

export const postLogoutUserController = async (req, res, next) => {
	const { session } = req

	try {
		session.destroy(error => {
			if (error) {
				// FIXME Este error no esta siendo manejado en el middleware
				throw error // TODO find correct status code
			}
		})

		res.send('Logout successfully')
	} catch (error) {
		next(error)
	}
}
// TODO Implement Change Password
export const putChangePasswordUserController = async (req, res, next) => {}
