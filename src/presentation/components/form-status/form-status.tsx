import React from 'react'
import Spinner from '../spinner/spinner'
import Styles from './form-status-styles.scss'
import { Context } from '@/presentation/contexts'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = React.useContext(Context)

  return (
  <div data-testid="error-wrap" className={Styles.erroWrap}>
    { isLoading && <Spinner className={Styles.spinner} /> }
    { errorMessage && <span className={Styles.error}>{errorMessage}</span> }

  </div>
  )
}

export default FormStatus
