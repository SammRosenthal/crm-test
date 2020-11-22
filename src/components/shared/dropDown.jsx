import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

export default function DropDown(props) {
  return (
    <TextField
      select
      label={props.label}
      variant="outlined"
      value={props.value}
      onChange={props.handler}
      className={props.style}
    >
      {props.dropDownData.map((dd) => {
        return (
          <MenuItem key={dd.key} value={dd.key}>
            {dd.value}
          </MenuItem>
        );
      })}
    </TextField>
  );
}
