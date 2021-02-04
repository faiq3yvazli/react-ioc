import * as React from 'react'
import * as Inversify from 'inversify'

import { InversifyContext } from '../context'

export const useContainer = (): Inversify.Container => {
  return React.useContext(InversifyContext)
}
