import { sha256 } from 'js-sha256'

export const hashUserPassword = password => sha256(password)

export const avoidServerAttacks = async () =>
	await new Promise(resolve => setTimeout(resolve, 1000))
