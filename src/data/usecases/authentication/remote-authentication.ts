import {
  Authentication,
  AuthenticationParams
} from '@/domain/usecases/authetication'
import { AccountModel } from '@/domain/models/account-model'
import { UnexpectedError } from '@/domain/usecases/errors/unexpected-error'
import { InvalidCredentialsError } from '@/domain/usecases/errors/invalid-credentials-error'
import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
    AuthenticationParams,
    AccountModel
    >
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
