const [, , type, component] = process.argv
const fs = require('fs')

const ATOMIC_DESIGN_TYPES = {
	atom: 'atoms',
	molecule: 'molecule'
}

const mappedType = ATOMIC_DESIGN_TYPES[type]

if(!type || !component){
	console.log('Error: please make sure you pass a type an a component name')
	process.exit(1)
}

if(!mappedType){
	console.log(`Error: the params type "${type}" is not valid. Use "atoms" or "molecule"`)
	process.exit(1)
}

fs.readFile('./templates/componentes/Component.js', 'utf8', (error, data) => {
  if (error) {
		throw error
  }

	const replacedData = data.replace(/Component/ig, component)
	const componentPath = `./${mappedType}/${component}`

	fs.mkdir(componentPath, error => {
		if (error) {
			throw error
		}

		console.log('Componente folder created!')

		fs.writeFile(`${componentPath}/${component}.js`, replacedData, err => {
			if (err) {
				throw error
			}
			console.log('Componente file created!')
		})
	})
})

fs.readFile('./templates/componentes/index.js', 'utf8', (error, data) => {
	if (error) {
		throw error
  }

	const replacedData = data.replace(/Component/ig, component)
	const componentPath = `./${mappedType}/${component}`

	fs.writeFile(`${componentPath}/index.js`, replacedData, err => {
		if (err) {
			throw error
		}
		console.log('Componente file created!')
	})
})

fs.readFile('./templates/componentes/Component.module.css', 'utf8', (error, data) => {
	if (error) {
		throw error
  }

	const replacedData = data.replace(/Component/ig, component)
	const componentPath = `./${mappedType}/${component}`

	fs.writeFile(`${componentPath}/${component}.module.css`, replacedData, err => {
		if (err) {
			throw error
		}
		console.log('Componente file created!')
	})
})

fs.readFile('./templates/componentes/Component.stories.js', 'utf8', (error, data) => {
	if (error) {
		throw error
  }

	const replacedData = data.replace(/Component/ig, component)
	const componentPath = `./${mappedType}/${component}`

	fs.writeFile(`${componentPath}/${component}.module.css`, replacedData, err => {
		if (err) {
			throw error
		}
		console.log('Componente file created!')
	})
})
