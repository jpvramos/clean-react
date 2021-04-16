export class UnexpectedError extends Error {
  constructor () {
    super('Algo saiu errado =(!')
    this.name = 'UnexpectedError'
  }
}
