import React, {useState} from 'react';
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


export default function Quote() {
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
        <>
            <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            >
                <TextField label="Quote Effective Date" variant="outlined" style={{ width: 215 }}/>
                <TextField label="Exchange Longevity Date" variant="outlined" style={{ width: 215 }}/>
            </Grid>
            <br />
            <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            >
                <TextField select label="Business Source" variant="outlined"  style={{ width: 215 }} value={businessSource} onChange={handleBusinessSource} />
                <TextField label="Campaign Code" variant="outlined" style={{ width: 215 }} />
            </Grid>
            <br />
            <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            >
                <TextField select label="Paid in Full" variant="outlined"  style={{ width: 215 }} value={paidInFull} onChange={handlePaidInFull}>
                    {yesNoDropDown.map((dd) => {
                        return (
                            <MenuItem key={dd.key} value={dd.key}>
                                {dd.value}
                            </MenuItem>
                        )
                    })}
                </TextField>
                <TextField select label="Watercraft" variant="outlined" style={{ width: 215 }} value={watercraft} onChange={handleWatercraft}>
                    {yesNoDropDown.map((dd) => {
                        return (
                            <MenuItem key={dd.key} value={dd.key}>
                                {dd.value}
                            </MenuItem>
                        )
                    })}
                </TextField>
            </Grid>
            <br />
            <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            >
                <TextField select label="Life Insurance" variant="outlined" style={{ width: 215 }} value={lifeInsurance} onChange={handleLifeInsurance}>
                    {yesNoDropDown.map((dd) => {
                        return (
                            <MenuItem key={dd.key} value={dd.key}>
                                {dd.value}
                            </MenuItem>
                        )
                    })}
                </TextField>
                <TextField select label="Multi Policy" variant="outlined" style={{ width: 215 }} value={multiPolicy} onChange={handleMultiPolicy}>
                    {yesNoDropDown.map((dd) => {
                        return (
                            <MenuItem key={dd.key} value={dd.key}>
                                {dd.value}
                            </MenuItem>
                        )
                    })}
                </TextField>
            </Grid>
        </>
    )
}