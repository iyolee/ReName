/*
 * @Author: leeper 
 * @Date: 2018-01-03 21:27:30 
 * @Last Modified by: leeper
 * @Last Modified time: 2018-01-03 21:45:16
 */

const fs = require('fs')
const path = require('path')

class ReName {
	constructor() {}

	replaceFilename(dir, prevFilename, newFilename) {
		fs.readdir(dir, (err, files) => {
			if (err) throw err
			files.map(item => {
				const filePath = path.join(dir, item)
				fs.stat(filePath, (err, stat) => {
					if (err) throw err
					const isDir = stat.isDirectory()
					if (isDir) {
						this.replaceFilename(filePath, prevFilename, newFilename)
					}
					const pattern = new RegExp(prevFilename)
					if (pattern.test(filePath)) {
						const newFilePath = filePath.replace(pattern, newFilename)
						fs.rename(filePath, newFilePath, err => {
							if (err) throw err
							console.log(`${filePath} replace seccessed`)
						})
					} 
				})
			})
		})
	}
}

module.exports = ReName