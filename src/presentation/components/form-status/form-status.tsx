import React from 'react'
import Spinner from '../spinner/spinner'
import Styles from './form-status-styles.scss'

const FormStatus: React.FC = () => {
  return (
  <div className={Styles.erroWrap}>
    <Spinner className={Styles.spinner} />
    <span className={Styles.error}></span>
    Erro
  </div>
  )
}

export default FormStatus
