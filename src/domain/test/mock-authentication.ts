import { AuthenticationParams } from './../usecases/authetication'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
