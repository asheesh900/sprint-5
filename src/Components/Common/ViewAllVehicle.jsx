import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deleteVehicle, sortAscending, filterMileage } from '../../Redux/Action'
import {Link} from 'react-router-dom'

class ViewAllVehicles extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             vehicleList: []
        }
    }

    componentDidMount(){
        let arr = [...this.state.vehicleList, this.props.vehicleList]
        this.setState({
            vehicleList: arr
        })
    }

    
    render() {
        // console.log(this.props)
        return (
            <div className="container mt-4">
                <h1 className="text-center">View all vehicle</h1>
                <div className="row">
                    <div className="col-10">
                        <div className="row my-4">
                            <div className="col-6">
                                <h3>Sort</h3>
                                <select onChange={(e) => this.props.sortAscending(e.target.value)} class="form-control">
                                    <option>Choose...</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <h3>Filter</h3>
                                <select onClick={(e) => this.props.filterMileage(e.target.value)} class="form-control">
                                    <option>Select mileage slab...</option>
                                    <option value="10">10 Kmpl</option>
                                    <option value="20">20 Kmpl</option>
                                    <option value="30">30 Kmpl</option>
                                </select>
                            </div>
                        </div>
                        <table class="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Model Number</th>
                                <th scope="col">Model Name</th>
                                <th scope="col">Manufacturer</th>
                                <th scope="col">Mileage</th>
                                <th scope="col">Price</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        this.props.filteredList.map((vehicle, i) => {
                                        return (
                                        <tr>
                                            <th scope="row">{i+1}</th>
                                            <td>{vehicle.modelNo}</td>
                                            <td>{vehicle.modelName}</td>
                                            <td>{vehicle.manufacturer}</td>
                                            <td>{vehicle.mileage}</td>
                                            <td>{vehicle.price}</td>
                                            <td>{vehicle.qty}</td>
                                            <td>
                                                <Link to={`/edit/${vehicle.id}`}>
                                                    <button type="button" className="btn btn-success">Edit</button>
                                                </Link>
                                            </td>  
                                            <td><button onClick={() => this.props.deleteVehicle(vehicle)} type="button" className="btn btn-danger">Delete</button></td>
                                        </tr>
                                            )
                                            
                                        })
                                    }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    vehicleList: state.vehicleList,
    filteredList: state.filteredList,
    state: state,
    
})

const mapStateToDispatch = (dispatch) => ({
    deleteVehicle: (payload) => dispatch(deleteVehicle(payload)),
    sortAscending: (payload) => dispatch(sortAscending(payload)),
    filterMileage: (payload) => dispatch(filterMileage(payload)),
    
})

export default connect(mapStateToProps, mapStateToDispatch)(ViewAllVehicles)