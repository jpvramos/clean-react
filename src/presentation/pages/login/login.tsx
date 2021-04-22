import React from 'react'
import Styles from './login-styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presentation/components'
import { Context } from '@/presentation/contexts'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions

const Login: React.FC = () => {
  const [state] = React.useState({
    isLoading: false
  })
  const [errorState] = React.useState({
    main: '',
    email: 'Campo Obrigatório',
    password: 'Campo Obrigatório'
  })
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={ { state, errorState }}>
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
