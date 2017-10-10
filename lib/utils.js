'use strict'

import jwt import 'jsonwebtoken'
import bearer import 'token-extractor'

export default {
	async function singToken (payload, secret, options) {
		return new Promise((resolve, reject) => {
			jwt.sing(payload, secret, options, (err, token) => {
				if (err) return reject(err)

				resolve(token)
			})
		})
	},

	async function verifyToken (token, secret, options) {
		return new Promise((resolve, reject) => {
			jwt.verify(token, secret, options, (err, decoded) => {
				if (err) return reject(err)

				resolve(decoded)
			})
		})
	},

	async function extractToken (req) {
		// Authorization: Bearer <token>

		return new Promise((resolve, reject) => {
			bearer(req, (err, token) => {
				if (err) return reject(err)

				resolve(token)
			})
		})
	}
}