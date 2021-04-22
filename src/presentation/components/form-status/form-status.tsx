import React from 'react'
import Spinner from '../spinner/spinner'
import Styles from './form-status-styles.scss'
import { Context } from '@/presentation/contexts'

const FormStatus: React.FC = () => {
  const { state, errorState } = React.useContext(Context)

  return (
  <div data-testid="error-wrap" className={Styles.erroWrap}>
    { state.isLoading && <Spinner className={Styles.spinner} /> }
    { errorState.main && <span className={Styles.error}>{errorState.main}</span> }

  </div>
  )
}

export default FormStatus
