import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import RiskAddress from './riskAddress';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DropDown from '../../../shared/dropDown';
import {yesNoDropDown, businessSourceDropDown, multiPolicyDropDown, lifeInsuranceDropDown} from '../../tempAutoDropDown';

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
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <DropDown
                        label="Business Source"
                        value={businessSource}
                        handler={handleBusinessSource}
                        style={classes.input}
                        dropDownData={businessSourceDropDown}
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <TextField
                        className={classes.input}
                        label="Campaign Code"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <DropDown
                        label="Paid in Full"
                        value={paidInFull}
                        handler={handlePaidInFull}
                        style={classes.input}
                        dropDownData={yesNoDropDown}
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <DropDown
                        label="Watercraft"
                        value={watercraft}
                        handler={handleWatercraft}
                        style={classes.input}
                        dropDownData={yesNoDropDown}
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <DropDown
                        label="Life Insurance"
                        value={lifeInsurance}
                        handler={handleLifeInsurance}
                        style={classes.input}
                        dropDownData={lifeInsuranceDropDown}
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <DropDown
                        label="Multi Policy"
                        value={multiPolicy}
                        handler={handleMultiPolicy}
                        style={classes.input}
                        dropDownData={multiPolicyDropDown}
                    />
                </Grid>
            </Grid>
            <RiskAddress />
        </div>
    )
}