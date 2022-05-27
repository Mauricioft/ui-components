const { choices, decisions } = require('../scripts/designTokens')
const toKebabCase = require('../utils/toKebabCase')
const fs = require('fs')

function transformTokens({ object = {}, parentKey = null } = {}) {
  const objectKeys = Object.keys(object)

  return objectKeys.reduce((tokensTransformed, objectKey) => {
    const value = object[objectKey]
    const customProperty = parentKey
      ? toKebabCase(`${parentKey}-${objectKey}`)
      : toKebabCase(objectKey)

    if (typeof value === 'object') {
      return `${tokensTransformed}\n\t${transformTokens({
        object: value,
        parentKey: customProperty,
      })}`
    }

    return `${tokensTransformed}\n\t--${parentKey}-${toKebabCase(
      objectKey
    )}: ${value};`
  }, '')
}

function buildTokens() {
  const choicesStr = transformTokens({ object: choices })
  const decisionsStr = transformTokens({ object: decisions })
  const customProperties = `${choicesStr}${decisionsStr}`

  const data = [':root {', customProperties.trim()].join(`\n\t`).concat('\n}')

  fs.writeFile('./styles/tokens.css', data, 'utf8', (error) => {
    if (!error) {
      return console.error(error)
    }
  })
}

buildTokens()
