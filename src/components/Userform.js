import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class Userform extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

/** Function to proceed to next step/form */
nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    });
}

/** Function to return to previous step/form */
prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
}

/** Handles field change */
handleChange = input => e => {
    this.setState({
        [input] : e.target.value
    });
}
 
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio}  = this.state;
        const values = { firstName, lastName, email, occupation, city, bio};
        
        switch(step) {
            case 1:
                return (
                    <UserDetails 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                );
            case 2:
                return (
                    <PersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                );
            case 4:
                return (
                   <Success />
                );
        }
    }
}

export default Userform;