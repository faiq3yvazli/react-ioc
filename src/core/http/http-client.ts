import { injectable } from 'inversify'
import { IHttpResponse, IHttpClient, IHttpHeaders, IHttpMethod, IHttpRequest } from './interfaces'

@injectable()
export class HttpClient implements IHttpClient {
  private defaultHeaders: IHttpHeaders = {}

  public getHeader(key: string) {
    return this.defaultHeaders[key]
  }

  public getHeaders() {
    return this.defaultHeaders
  }

  public setHeader(key: string, value: string) {
    this.defaultHeaders[key] = value
  }

  public removeHeader(key: string) {
    delete this.defaultHeaders[key]
  }

  private async makeRequest<HttpResponse extends IHttpResponse<any, any>>(
    request: IHttpRequest,
    method: IHttpMethod,
  ): Promise<HttpResponse> {
    const mergedHeaders = { ...this.defaultHeaders, ...request.headers }
    const response: Response = await fetch(request.url, {
      method: method,
      headers: mergedHeaders,
      body: request.body,
    })

    const status: number = response.status
    const contentType = response.headers.get('Content-Type')
    let data: any

    if (contentType?.includes('application/json')) {
      data = await response.json()
    } else {
      data = response.text()
    }

    return {
      status,
      response: data,
    } as any
  }

  get<HttpResponse extends IHttpResponse<any, any>>(request: IHttpRequest): Promise<HttpResponse> {
    return this.makeRequest<HttpResponse>(request, 'get')
  }
  post<HttpResponse extends IHttpResponse<any, any>>(request: IHttpRequest): Promise<HttpResponse> {
    return this.makeRequest<HttpResponse>(request, 'post')
  }
  put<HttpResponse extends IHttpResponse<any, any>>(request: IHttpRequest): Promise<HttpResponse> {
    return this.makeRequest<HttpResponse>(request, 'put')
  }
  delete<HttpResponse extends IHttpResponse<any, any>>(request: IHttpRequest): Promise<HttpResponse> {
    return this.makeRequest<HttpResponse>(request, 'delete')
  }
}

export const HttpClientType = Symbol.for('HttpClient')
