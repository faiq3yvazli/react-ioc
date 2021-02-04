import { IHttpHeaders } from '@core/http'
import { IHttpResponse } from '@core/http'
import { IHttpRequest } from '@core/http'

export type IHttpClient = {
  getHeader(key: string): string | undefined
  getHeaders(): IHttpHeaders
  setHeader(key: string, value: string): void
  removeHeader(key: string): void

  get<HttpResponse extends IHttpResponse<any, any>>(request: IHttpRequest): Promise<HttpResponse>
  post<HttpResponse extends IHttpResponse<any, any>>(request: IHttpRequest): Promise<HttpResponse>
  put<HttpResponse extends IHttpResponse<any, any>>(request: IHttpRequest): Promise<HttpResponse>
  delete<HttpResponse extends IHttpResponse<any, any>>(request: IHttpRequest): Promise<HttpResponse>
}
