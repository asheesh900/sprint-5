import React, { Component } from 'react';
import {Button, TextField, Typography, Container} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {connect} from 'react-redux'
import {checkUser} from '../../Redux/Action'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:""
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log(this.state.username)
    }

    login = (e) => {
      e.preventDefault();
       const userInfo = {
              username: this.state.username,
              password: this.state.password
        }
        this.props.checkUser(userInfo)
    }
    
    render(){
        if(this.props.isLogin === false)
        {
          return (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
                <Typography component="h1" variant="h5">
                  Sign In
                </Typography>
                <form>
                  
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="username"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => this.handleChange(e)}

                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.login}
                  >
                    Login
                  </Button> 
                </form>
              </div>
            </Container>
          );
        }
        else
        {
          return <Redirect to="/dashboard" />
        }
        
    }

  
}


const mapStateToProps = (state) => ({
  isLogin: state.isLogin
})

const mapDispatchToProps = (dispatch) => ({
  checkUser: (payload) => dispatch(checkUser(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)