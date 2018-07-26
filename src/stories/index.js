import { configure } from '@storybook/react'

const req = require.context(__dirname, true, /\.story\.js$/)

configure(() => {
  req.keys().forEach((filename) => req(filename))
}, module)
