import React, { Component } from 'react'
import FormUserDetails from "./FormUserDetails"
import FormPersionalDetails from "./FormPersionalDetails"
import Confirm from "./Confirm"

export class UserForm extends Component {
    state={
        step:1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
    }

    // Proceed to next step
    nextStep = () => { 
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }
    
    // Go back to prev step
    prevStep = () => { 
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e=> {
        this.setState({[input]:e.target.value});
    }
    render() {
        const {step} = this.state
        const {firstName ,lastName,email,occupation,city,bio} = this.state;
        const values = {firstName,lastName,email,occupation,city,bio,};
        switch(step){
            case 1: return(
                <FormUserDetails
                    nextStep={this.nextStep}
                    values={values}
                    handleChange={this.handleChange}
                />
            )
            case 2: return(
                <FormPersionalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                handleChange={this.handleChange}
                />
            )
            case 3: return(
                <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />
            )
            case 4: return(
                <h1>Success</h1>
            )
            default:return(
                <FormUserDetails
                    nextStep={this.nextStep}
                    values={values}
                />
            )
        }
    }
}

export default UserForm

