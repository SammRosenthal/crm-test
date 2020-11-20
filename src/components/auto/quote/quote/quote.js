import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function Quote() {
    return (
        <>
            <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            >
                <TextField id="standard-basic" label="Quote Effective Date" />
                <TextField id="standard-basic" label="Exchange Longevity Date" />
            </Grid>
            <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            >
                <TextField id="standard-basic" label="Business Source" />
                <TextField id="standard-basic" label="Campaign Code" />
            </Grid>
        </>
    )
}