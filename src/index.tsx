import 'reflect-metadata'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as WebVitals from '@config/report-web-vitals'

import { App } from './app'

const app = <App />
const node = document.getElementById('root')

ReactDOM.render(app, node)

WebVitals.report()
