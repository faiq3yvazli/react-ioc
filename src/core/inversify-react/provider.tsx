import * as React from 'react'
import * as Inversify from 'inversify'

import { InversifyContext } from './context'

export const InversifyProvider: React.FC<{ container: Inversify.Container }> = ({ container, children }) => {
  return <InversifyContext.Provider value={container}>{children}</InversifyContext.Provider>
}
