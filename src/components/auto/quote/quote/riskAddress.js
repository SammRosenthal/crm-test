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
            <Grid item xs={12} sm={6} className={classes.textField}>
                <TextField
                    className={classes.input}
                    label="Quote Effective Date"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.textField}>
                <TextField
                    className={classes.input}
                    label="Exchange Longevity Date"
                    variant="outlined"
                />
            </Grid>
        </Grid>
        </>
    )
}


