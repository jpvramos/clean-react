import React from 'react'
import Styles from './login-styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presentation/components'
import { Context } from '@/presentation/contexts'
import { Validation } from '@/presentation/protocols/validations'
import { Authentication } from '@/domain/usecases'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = React.useState({
    isLoading: false,
    email: '',
    password: '',
    mainError: '',
    emailError: '',
    passwordError: ''
  })

  React.useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) {
        return
      }
      setState({ ...state, isLoading: true })
      await authentication.auth({
        email: state.email,
        password: state.password
      })
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={ { state, setState } }>
      <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu email" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button data-testid="submit" disabled={ !!state.emailError || !!state.passwordError } className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar Conta</span>
        <FormStatus />
      </form>
      <Footer />
      </Context.Provider>
    </div>
  )
}

export default Login
