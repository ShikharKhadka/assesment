import type { Theme } from "@emotion/react";
import { Box, TextField, type SxProps } from "@mui/material";
import React from "react";
import type { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";


const CTextField = <T extends FieldValues>({
    onchange,
    placeholder,
    // required = false,
    validationName,
    value,
    register,
    errors,
    sx
    // fullWidth = false,
}: {
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required?: boolean;
    validationName?: Path<T>;
    value?: string | undefined;
    fullWidth?: boolean,
    register?: UseFormRegister<T>;
    errors?: FieldError;
    sx?: SxProps<Theme> | undefined,
}) => {
    return (
        <div>
            <TextField
                sx={sx}
                fullWidth
                color="primary"
                onChange={onchange}
                {...(register && validationName
                    ? register(validationName, {
                        required: true,
                        onChange: onchange,
                    })
                    : undefined)}
                placeholder={placeholder}
                value={value}
                id="outlined-basic" label={placeholder} variant="outlined" />
            <div className="h-5">
                {errors && (
                    <Box sx={{ color: "red" }}>{errors.message ?? ""}</Box>
                )}
            </div>
        </div>
    );
};

export default CTextField;
