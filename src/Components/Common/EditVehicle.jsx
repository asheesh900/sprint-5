import React, { Component } from 'react';
import {Button, TextField, Typography, Container} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import {editVehicle} from '../../Redux/Action';

class EditVehicle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             modelNo:"",
             modelName:"",
             manufacturer:"",
             mileage:"",
             price:"",
             qty:"",
             id:""



        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.name)
    }

    editVehicle = (e) => {
      e.preventDefault();
      const newVehicleInfo = {
          modelNo: this.state.modelNo,
          modelName: this.state.modelName,
          manufacturer: this.state.manufacturer,
          mileage: this.state.mileage,
          price: this.state.price,
          qty: this.state.qty,
          id:this.state.id
      }
      this.props.editVehicle(newVehicleInfo)
      alert("Update Successful");
    }

    componentDidMount(){
        let {id} = this.props.match.params
        let vehicleData = this.props.state.find((item) => item.id == id)
        console.log(vehicleData)
        if(vehicleData)
        {
            this.setState({
                modelNo:vehicleData.modelNo,
                modelName:vehicleData.modelName,
                manufacturer:vehicleData.manufacturer,
                mileage:vehicleData.mileage,
                price:vehicleData.price,
                qty:vehicleData.qty,
                id:vehicleData.id
            })
        }
    }
    
    render(){
        // console.log(this.state)
        return (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
                <Typography component="h1" variant="h5">
                  Edit Vehicle
                </Typography>
                <form>
                  <TextField
                    value={this.state.modelNo}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Model Number"
                    name="modelNo"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    value={this.state.modelName}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Model Name"
                    name="modelName"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    value={this.state.manufacturer}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Manufacturer"
                    name="manufacturer"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    value={this.state.mileage}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Mileage"
                    name="mileage"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    value={this.state.price}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Price"
                    name="price"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    value={this.state.qty}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Quantity"
                    name="qty"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.editVehicle}
                  >
                    Edit Vehicle
                  </Button> 
                </form>
              </div>
            </Container>
          );
    }

  
}
const mapStateToProps = (state) => ({
  state: state.vehicleList
})

const mapDispatchToProps = (dispatch) => ({
  editVehicle: (payload) => dispatch(editVehicle(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditVehicle)