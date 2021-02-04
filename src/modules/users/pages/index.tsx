import * as React from 'react'
import { useService } from '@core/inversify-react/hooks/use-binding'
import { IService } from '@core/rest-service'
import { GetUserServiceType } from '@modules/users/services/get-user'

export const UserDetailsPage: React.FC = () => {
  const getUserService = useService<IService>(GetUserServiceType)
  const [user, setUser] = React.useState<any>(null)

  React.useEffect(() => {
    ;(async () => {
      const { response } = await getUserService.execute(1)
      setUser(response)
    })()
  }, [getUserService])

  return <div>{JSON.stringify(user)}</div>
}
