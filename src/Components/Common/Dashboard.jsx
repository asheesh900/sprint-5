import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class Dashboard extends Component {
    render() {
        console.log(this.props.isLogin)
        if(this.props.isLogin === true)
        {
        console.log(this.props.isLogin)
        return (
            <div className="mt-4">
                <h1 className="text-center">Welcome to Dashboard</h1>
                <div className="container mt-4 py-3 bg-light text-center">
                    <div className="row text-center justify-content-center">
                        <div className="col-3 ">
                            <Link to="/">
                                <button type="button" class="btn btn-dark">Home</button>
                            </Link>
                        </div>
                        <div className="col-3 ">
                            <Link to="/addNewVehicle">
                                <button type="button" class="btn btn-dark">Add New Vehicle</button>
                            </Link>
                        </div>
                        <div className="col-3 ">
                            <Link to="/viewAllVehicle">
                                <button type="button" class="btn btn-dark">View All Vehicle</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            )
        }
        else
        {
           return <Redirect to="/login" />
        }
      
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin
})

export default connect(mapStateToProps)(Dashboard)


