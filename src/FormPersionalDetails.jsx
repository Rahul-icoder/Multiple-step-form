import React,{Component} from "react";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./formuser.css";


export class FormPersionalDetails extends Component{
    
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {values,handleChange} = this.props;
        return(
            <div className="form">
                <AppBar title="Enter user Second Details"/>
                <TextField
                    className="textField"
                    label="Enter your Occupation"
                    floatingLabelText="Occupation"
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation}
                />
                <br/>
                <TextField
                    className="textField"
                    label="Enter your City"
                    floatingLabelText="City"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                />
                <br/>
                <TextField
                    className="textField"
                    label="Enter your Bio"
                    floatingLabelText="Bio"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                />
                <br/>
                <Button variant="contained" className="btn" onClick={this.continue}>
                    Continue
                </Button>
                <Button variant="contained" className="btn" onClick={this.back}>
                    Back
                </Button>
            </div>
        )
    }
}


export default FormPersionalDetails