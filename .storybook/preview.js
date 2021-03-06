// FIXME: Move as static file
import 'minireset.css'
import '../styles/globals.css'
import '../styles/tokens.css'

export const parameters = {
  actions: {
		argTypesRegex: "^on[A-Z].*"
	},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
