import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface CustomTypographyProps extends TypographyProps {
    label: string;
}

export const CustomTypography: React.FC<CustomTypographyProps> = ({ label, ...props }) => {
    return (
        <Typography {...props}>
            {label}
        </Typography>
    );
};
