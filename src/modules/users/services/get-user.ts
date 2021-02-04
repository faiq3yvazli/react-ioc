import { inject, injectable } from 'inversify'
import { HttpClientType, IHttpClient } from '@core/http'
import { IService } from '@core/rest-service'

@injectable()
export class GetUserService implements IService {
  constructor(@inject(HttpClientType) private httpClient: IHttpClient) {}

  public async execute(id: string | number) {
    return this.httpClient.get({ url: 'https://jsonplaceholder.typicode.com/users/' + id })
  }
}

export const GetUserServiceType = Symbol.for('GetUserService')
