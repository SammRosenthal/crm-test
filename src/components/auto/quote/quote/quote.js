import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import RiskAddress from './riskAddress';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const yesNoDropDown = [
    {
        key: "N",
        value: "No"
    },
    {
        key: "Y",
        value: "Yes"
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        justifyContent: "center"
    },
    textField: {
        textAlign: "center",
        width: 215
    },
    dropDown: {
        width: 215,
        textAlign: "left"
    }
}))


export default function Quote() {
    const classes = useStyles();
    const [businessSource, setBusinessSource] = useState("");
    const [paidInFull, setPaidInFull] = useState("");
    const [lifeInsurance, setLifeInsurance] = useState("");
    const [watercraft, setWatercraft] = useState("");
    const [multiPolicy, setMultiPolicy] = useState("");

    const handleBusinessSource = (e) => {setBusinessSource(e.target.value)}
    const handlePaidInFull = (e) => {setPaidInFull(e.target.value)}
    const handleLifeInsurance = (e) => {setLifeInsurance(e.target.value)}
    const handleWatercraft = (e) => {setWatercraft(e.target.value)}
    const handleMultiPolicy = (e) => {setMultiPolicy(e.target.value)}

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={3}
                className={classes.container}
            >
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <TextField
                        label="Quote Effective Date"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <TextField
                        label="Exchange Longevity Date"
                        variant="outlined"
                        className={classes.textField}
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <TextField select label="Business Source" variant="outlined" value={businessSource} onChange={handleBusinessSource} className={classes.dropDown}>
                        {yesNoDropDown.map((dd) => {
                            return (
                                <MenuItem key={dd.key} value={dd.key}>
                                    {dd.value}
                                </MenuItem>
                            )
                        })}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <TextField label="Campaign Code" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <TextField select label="Paid in Full" variant="outlined" value={paidInFull} onChange={handlePaidInFull} className={classes.dropDown}>
                        {yesNoDropDown.map((dd) => {
                            return (
                                <MenuItem key={dd.key} value={dd.key}>
                                    {dd.value}
                                </MenuItem>
                            )
                        })}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <TextField select label="Watercraft" variant="outlined" value={watercraft} onChange={handleWatercraft} className={classes.dropDown}>
                        {yesNoDropDown.map((dd) => {
                            return (
                                <MenuItem key={dd.key} value={dd.key}>
                                    {dd.value}
                                </MenuItem>
                            )
                        })}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <TextField select label="Life Insurance" variant="outlined" value={lifeInsurance} onChange={handleLifeInsurance} className={classes.dropDown}>
                        {yesNoDropDown.map((dd) => {
                            return (
                                <MenuItem key={dd.key} value={dd.key}>
                                    {dd.value}
                                </MenuItem>
                            )
                        })}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <TextField select label="Multi Policy" variant="outlined" value={multiPolicy} onChange={handleMultiPolicy} className={classes.dropDown}>
                        {yesNoDropDown.map((dd) => {
                            return (
                                <MenuItem key={dd.key} value={dd.key}>
                                    {dd.value}
                                </MenuItem>
                            )
                        })}
                    </TextField>
                </Grid>
            </Grid>
            <RiskAddress />
        </div>
    )
}