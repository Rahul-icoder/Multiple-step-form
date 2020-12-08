import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./formuser.css";

export class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values,handleChange} = this.props;
        return (
                <div className="form">
                    <AppBar title="Enter user First Details"/>
                    <TextField
                        className="textField"
                        label="Enter your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                        className="textField"
                        label="Enter your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                        label="Enter your Email"
                        className="textField"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <Button variant="contained" className="btn" onClick={this.continue}>
                        Continue
                    </Button>
                </div>
        )
    }
}

export default FormUserDetails
