import AttendanceService from '../services/attendance.service.js'

export const postCreateAttendanceController = async (req, res, next) => {
	const {
		body: { courseId, userId, otherData },
	} = req

	try {
		await AttendanceService.create({
			courseId,
			userId,
			otherData,
		})
		res.send('Attendance created successfuly')
	} catch (error) {
		next(error)
	}
}

export const getGetAttendanceListController = async (req, res, next) => {
	try {
		const attendances = await AttendanceService.findAll()
		res.send(attendances)
	} catch (error) {
		next(error)
	}
}

export const getGetUserAttendancesByCourseList = async (req, res, next) => {
	const {
		body: { userId, courseId },
	} = req

	try {
		const attendances = await AttendanceService.findAll({
			user_id: userId,
			course_id: courseId,
		})
		res.send(attendances)
	} catch (error) {
		next(error)
	}
}
