import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="mt-4">
                <h1 className="text-center ">Welcome to Vehicle Database</h1>
                <div className="container mt-4 p-3 border border-dark bg-secondary">
                    <div className="row">
                        <div className="col">
                        <center>
                            <div className="col-4 mb-2 py-5">
                                <Link to="/dashboard">
                                    <button type="button" class="btn btn-dark">Click here to go to Dashboard</button>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/login">
                                    <button type="button" class="btn btn-primary">Login</button>
                                </Link>
                            </div>
                        </center>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
