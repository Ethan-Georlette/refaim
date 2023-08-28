import React from 'react'
import { Routes as Switch, Route } from 'react-router'
import { AppHeader } from './cmps/header.jsx'
import routes from './routes.js'
import { AppFooter } from './cmps/footer.jsx'

export class RootCmp extends React.Component {

    render() {
        return (
            <div>
                <AppHeader />
                <main>
                    <Switch>
                        {routes.map(route => <Route key={route.path} element={route.component} path={route.path} />)}
                    </Switch>
                </main>
                <AppFooter/>
            </div>
        )
    }
}




