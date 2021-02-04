import { IHttpHeaders } from '@core/http'

export type IHttpRequest = {
  url: IHttpRequestUrl
  body?: IHttpRequestBody
  headers?: IHttpHeaders
}

export type IHttpRequestBody = string | Blob | FormData

export type IHttpRequestUrl = string
