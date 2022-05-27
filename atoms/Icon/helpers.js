const ICONS_ASSETS_PATH = 'icons'

const iconMap = {
  'arrow-right': 'arrow-right',
  'angle-down': 'angle-down',
  home: 'home-outline', // FIXME: Add this icon properly
}

const iconSize = {
  sm: 15,
  md: 26,
  lg: 30,
  xl: 4,
}

const mapIcon = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`
const mapSize = (size) => iconSize[size]

export { mapIcon, mapSize }
