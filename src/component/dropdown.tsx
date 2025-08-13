import {
    FormControl,
    MenuItem,
    Select,
    type SelectChangeEvent,

} from "@mui/material";
import React, { type ReactNode } from "react";

const CFormControl: React.FC<FormControlI> = ({ value, menuitem, onChange }) => {

    return (
        <FormControl
            size="small"
            variant="outlined"
            fullWidth
        >
            <Select
                size="small"
                value={value}
                fullWidth
                onChange={onChange}
                displayEmpty
            >
                <MenuItem value="">
                    <em>Select an option</em>
                </MenuItem>
                {menuitem.map((e, index) => {
                    return <MenuItem key={index} value={e}>{e}</MenuItem>

                })}
            </Select>
        </FormControl>
    );
};

export default CFormControl;

type MenuItemType = string | number;

interface FormControlI {
    menuitem: MenuItemType[];
    onChange:
    | ((event: SelectChangeEvent<any>, child: ReactNode) => void)
    | undefined;
    value: unknown;

}
