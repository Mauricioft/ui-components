const getWidth = (width) => {
  return typeof width === 'string' ? width : `${width}px`
}

export { getWidth }
