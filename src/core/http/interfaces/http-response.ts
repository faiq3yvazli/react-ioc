import { HttpStatusCode } from '../enums'

export type IHttpResponse<Status extends HttpStatusCode, Response> = {
  status: Status
  response: Response
}
