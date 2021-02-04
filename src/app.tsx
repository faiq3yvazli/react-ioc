import * as React from 'react'
import { InversifyProvider } from '@core/inversify-react'

import { container } from '@modules/container'

export const App: React.FC = () => {
  return <InversifyProvider container={container}>React ioc setup</InversifyProvider>
}
