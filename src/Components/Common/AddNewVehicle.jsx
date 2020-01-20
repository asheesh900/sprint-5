import React, { Component } from 'react';
import {Button, TextField, Typography, Container} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import {addNewVehicle} from '../../Redux/Action';

let count = 1;
class AddNewVehicle extends Component {
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

    addNewVehicle = (e) => {
      e.preventDefault();
      const newVehicleInfo = {
        modelNo: this.state.modelNo,
        modelName: this.state.modelName,
        manufacturer: this.state.manufacturer,
        mileage: this.state.mileage,
        price: this.state.price,
        qty: this.state.qty,
        id: count
      }
      count++
      this.props.addNewVehicle(newVehicleInfo)
      alert("Vehicle Added")
    }
    
    render(){
        // console.log(this.state)
        return (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
                <Typography component="h1" variant="h3">
                  Add New Vehicle
                </Typography>
                <form>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Model Number"
                    name="modelNo"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Model Name"
                    name="modelName"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Manufacturer"
                    name="manufacturer"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Mileage"
                    name="mileage"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Price"
                    name="price"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
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
                    onClick={this.addNewVehicle}
                  >
                    Add New Vehicle
                  </Button> 
                </form>
              </div>
            </Container>
          );
    }

  
}
const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  addNewVehicle: (payload) => dispatch(addNewVehicle(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddNewVehicle)