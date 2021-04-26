import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import { EmailValidation } from '@/validation/validators/email/email-validation'

describe('EmailValidation', () => {
  test('Should return error if email', () => {
    const sut = new EmailValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError())
  })
})
