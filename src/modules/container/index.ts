import { Container } from 'inversify'
import { HttpClient, HttpClientType, IHttpClient } from '@core/http'
import { IService } from '@core/rest-service'

import { GetUserService, GetUserServiceType } from '@modules/users'

export const container = new Container()

container.bind<IHttpClient>(HttpClientType).to(HttpClient)
container.bind<IService>(GetUserServiceType).to(GetUserService)
