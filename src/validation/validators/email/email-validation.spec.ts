import { FieldValidation } from '@/validation/protocols/field-validation'

class InvalidFieldError extends Error {
  constructor () {
    super('Campo Obrigatório')
    this.name = 'InvalidFieldError'
  }
}

class EmailValidation implements FieldValidation {
  field: string
  validate (value: string): Error {
    return new InvalidFieldError()
  }
}

describe('EmailValidation', () => {
  test('Should return error if email', () => {
    const sut = new EmailValidation()
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError())
  })
})
