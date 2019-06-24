import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values } = this.props;
        return (
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Confirm Details" />
                   <List>
                   <ListItem
                    primaryText="First Name"
                    secondaryText={values.firstName}
                   />
                   <br />
                   <ListItem
                    primaryText="Last Name"
                    secondaryText={values.lastName}
                   />
                   <br />
                   <ListItem
                    primaryText="Email"
                    secondaryText={values.email}
                   />
                   <br />
                   <ListItem
                    primaryText="Occupation"
                    secondaryText={values.occupation}
                   />
                   <br />
                   <ListItem
                    primaryText="City"
                    secondaryText={values.city}
                   />
                   <br />
                   <ListItem
                    primaryText="Bio"
                    secondaryText={values.bio}
                   />

                    </List>
                   <br />
                   <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                   />
                   <RaisedButton
                    label="Confirm"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                   />
               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default Confirm;
