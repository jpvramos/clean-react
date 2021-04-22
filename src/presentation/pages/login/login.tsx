import React from 'react'
import Styles from './login-styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presentation/components'
import { Context } from '@/presentation/contexts'
import { Validation } from '@/presentation/protocols/validations'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = React.useState({
    isLoading: false,
    email: '',
    mainError: '',
    emailError: 'Campo Obrigatório',
    passwordError: 'Campo Obrigatório'
  })
  React.useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={ { state, setState } }>
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu email" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button data-testid="submit" disabled className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar Conta</span>
        <FormStatus />
      </form>
      <Footer />
      </Context.Provider>
    </div>
  )
}

export default Login
