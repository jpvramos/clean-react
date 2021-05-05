import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={makeLogin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
