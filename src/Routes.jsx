import React from 'react'
import {Switch, Route} from 'react-router-dom'
const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' />
            <Route exact path='/Auth' />
        </Switch>
    )
}
export default Routes