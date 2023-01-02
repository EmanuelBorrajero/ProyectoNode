import CourseService from '../services/course.service.js'

export const postCreateCourseController = async (req, res, next) => {
	const {
		body: { name, description },
	} = req

	try {
		await CourseService.create({
			name,
			description,
		})
		res.send('Course created successfuly')
	} catch (error) {
		next(error)
	}
}

export const getGetCourseListController = async (req, res, next) => {
	try {
		const courses = await CourseService.findAll()
		res.send(courses)
	} catch (error) {
		next(error)
	}
}

export const putUpdateCourseController = async (req, res, next) => {
	const {
		body: { id, name, description },
	} = req

	try {
		await CourseService.update({
			id,
			name,
			description,
		})
		res.send('Course updated successfuly')
	} catch (error) {
		next(error)
	}
}

export const getGetCourseByIdController = async (req, res, next) => {
	const {
		params: { id },
	} = req
	try {
		const course = await CourseService.findByPk(id)
		res.send(course)
	} catch (error) {
		next(error)
	}
}

export const deleteDeleteCourseController = async (req, res, next) => {
	const {
		params: { id },
	} = req

	try {
		await CourseService.delete(id)
		res.send('Course deleted successfuly')
	} catch (error) {
		next(error)
	}
}
