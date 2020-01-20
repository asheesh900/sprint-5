import React, { Component } from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import AddNewVehicle from '../Components/Common/AddNewVehicle'
import ViewAllVehicle from '../Components/Common/ViewAllVehicle'
import Login from '../Components/Auth/Login'
import Home from '../Components/Common/Home'
import EditVehicle from '../Components/Common/EditVehicle'
import Dashboard from '../Components/Common/Dashboard'

export default class Routes extends Component {
    render() {
        return (
            <>
                {/* <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/dashboard">Dashboard</Link> */}
            <Switch>
                <Route exact path="/"  component={Home}/>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/addNewVehicle" component={AddNewVehicle} />
                <Route path="/viewAllVehicle" component={ViewAllVehicle} />
                <Route path="/login" component={Login} />
                <Route path="/edit/:id" component={EditVehicle} />
            </Switch>
                
            </>
        )
    }
}
