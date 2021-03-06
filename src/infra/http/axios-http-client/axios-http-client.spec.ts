import { mockPostRequest } from '@/data/test/mock-http-post'
import { mockAxios, mockHttpResponse } from '@/infra/test'
import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'

jest.mock('axios')

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should call axios with correct values', () => {
    const { sut, mockedAxios } = makeSut()
    const httpResponse = sut.post(mockPostRequest())
    expect(httpResponse).toEqual(mockedAxios.post.mock.results[0].value)
  })

  test('Should return correct statusCode any body on failure', () => {
    const { sut, mockedAxios } = makeSut()
    mockedAxios.post.mockRejectedValueOnce({
      response: mockHttpResponse()
    })
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
