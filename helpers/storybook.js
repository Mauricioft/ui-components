const getOptionsArgTypes = (options) => ({
  description: '**options:**',
  table: {
    type: {
      summary: options.map((option) => `'${option}'`).join('|'),
    },
  },
  options,
  control: {
    type: 'select',
  },
})

export { getOptionsArgTypes }
