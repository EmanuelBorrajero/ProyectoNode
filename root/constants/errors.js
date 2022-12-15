const buildError = (message, status) => {
	const error = new Error(message)
	error.status = status

	return error
}

export const NOT_FOUND_ERROR_CODE = 404
export const BAD_REQUEST_ERROR_CODE = 400
export const UNAUTHORIZED_ERROR_CODE = 401

export const NOT_FOUND_ERROR = entity_name =>
	buildError(`${entity_name} not found`, NOT_FOUND_ERROR_CODE)

export const USER_PASSWORD_CONFIRMATION_ERROR = buildError(
	'Passwords do not match',
	BAD_REQUEST_ERROR_CODE
)

export const UNAUTHORIZED_USER = buildError(
	'Unathorized user',
	UNAUTHORIZED_ERROR_CODE
)