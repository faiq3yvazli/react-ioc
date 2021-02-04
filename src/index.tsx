import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as WebVitals from './config/report-web-vitals'

const app = <h1>Test</h1>
const node = document.getElementById('root')

ReactDOM.render(app, node)

WebVitals.report()
