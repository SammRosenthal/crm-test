import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Divider from '../../../shared/divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        justifyContent: "center"
    },
    textField: {
        textAlign: "center",
    },
    input: {
        width: 215,
        textAlign: "left"
    },
    longInput: {
        width: 500,
        textAlign: "left",
        marginLeft: 28
    }
}))



export default function RiskAddress() {
    const classes = useStyles();

    return (
        <>
        <Divider text="Risk Address" />
        <Grid
            container
            spacing={3}
            className={classes.container}
        >
            <Grid item xs={12}>
                <TextField
                    className={classes.longInput}
                    label="Street Address"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={3} className={classes.textField}>
                <TextField
                    className={classes.input}
                    label="City"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={3} className={classes.textField}>
                <TextField
                    className={classes.input}
                    label="State"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={3} className={classes.textField}>
                <TextField
                    className={classes.input}
                    label="Zip Code"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={3} className={classes.textField}>
                <TextField
                    className={classes.input}
                    label="County"
                    variant="outlined"
                />
            </Grid>
        </Grid>
        </>
    )
}


