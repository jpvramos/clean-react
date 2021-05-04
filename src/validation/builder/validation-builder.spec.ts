import { EmailValidation, RequiredFieldValidation } from '@/validation'
import { ValidationBuilder as sut } from './validation-builder'

describe('ValidationBuilder', () => {
  test('shouldreturn RequiredFieldValidation', () => {
    const validations = sut.field('any_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('shouldreturn EmailValidation', () => {
    const validations = sut.field('any_field').email().build()
    expect(validations).toEqual([new EmailValidation('any_field')])
  })
})
