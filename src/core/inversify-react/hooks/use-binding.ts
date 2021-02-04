import * as React from 'react'

import { InversifyContext } from '../context'

export const useService = <Service>(type: symbol): Service => {
  const container = React.useContext(InversifyContext)

  return React.useMemo<Service>(() => container.get<Service>(type), [container, type])
}
