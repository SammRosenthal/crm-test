import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import RiskAddress from './address';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DropDown from '../../../shared/dropDown';
import {yesNoDropDown, businessSourceDropDown} from '../../tempAutoDropDown';


// test for ubuntu install

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
    const [effectiveDate, setEffectiveDate] = useState("");
    const [exchangeDate, setExchangeDate] = useState("");
    const [businessSource, setBusinessSource] = useState("");
    const [paidInFull, setPaidInFull] = useState("");
    const [existingMember, setExistingMember] = useState("");

    const handleEffectiveDate = (e) => {setEffectiveDate(e.target.value)}
    const handleExchangeDate = (e) => {setExchangeDate(e.target.value)}
    const handleBusinessSource = (e) => {setBusinessSource(e.target.value)}
    const handlePaidInFull = (e) => {setPaidInFull(e.target.value)}
    const handleExistingMember = (e) => {setExistingMember(e.target.value)}

    return (
        <>
        <div className={classes.root}>
            <Grid
                container
                spacing={3}
                className={classes.container}
            >
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <TextField
                        className={classes.input}
                        label="Effective Date"
                        variant="outlined"
                        value={effectiveDate}
                        onChange={(e) => handleEffectiveDate(e)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.textField}>
                    <TextField
                        className={classes.input}
                        label="Exchange Date"
                        variant="outlined"
                        value={exchangeDate}
                        onChange={(e) => handleExchangeDate(e)}
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
                        label="Discount Code"
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
                        label="Existing Member"
                        value={existingMember}
                        handler={handleExistingMember}
                        style={classes.input}
                        dropDownData={yesNoDropDown}
                    />
                </Grid>
            </Grid>
            <RiskAddress />
        </div>
        </>
    )
}