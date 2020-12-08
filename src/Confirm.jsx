import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./confirm.css"

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values} = this.props;
    return (
      <>
        <Card>
          <CardContent>
            <Typography className="content_text" color="textSecondary">
              First Name : {values.firstname}
            </Typography>
            <Typography className="content_text" color="textSecondary" >Last Name : {values.lastname}</Typography>
            <Typography className="content_text" color="textSecondary">Email : {values.email}</Typography>
            <Typography className="content_text" color="textSecondary">Occupation : {values.occupation}</Typography>
            <Typography className="content_text" color="textSecondary">City : {values.city}</Typography>
            <Typography className="content_text" color="textSecondary">Bio : {values.bio}</Typography>
          </CardContent>
        </Card>
        <Button variant="contained" className="btn" onClick={this.continue}>
          Confirm
        </Button>
        <Button variant="contained" className="btn" onClick={this.back}>
          Back
        </Button>
      </>
    );
  }
}

export default Confirm;
