import React from 'react';
import './App.css';
import logo from '../../starMovieImage.png';
import { TextField, Button, Box } from '@material-ui/core';


export default function ButtonAppBar() {


    return (
        // NOTE: Saving time be reusing the create react app boiler plating
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" style={{ filter: 'sepia(100%)' }} />
                <p>
                    Welcome to Stellify Media
    </p>
                <Box width="100">
                    <TextField
                        required
                        id="User-Email"
                        label="Email"
                        variant="outlined"
                        fullWidth={true}

                    />
                    <Button
                        variant="outlined"
                        color="primary"
                        height="100"
                        fullWidth={true}
                        href="/media"

                    >
                        Submit
        </Button>
                </Box>
            </header>
        </div>
    );
}