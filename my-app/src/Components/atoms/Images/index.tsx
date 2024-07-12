import React from "react";
import ImageListItem from "@mui/material/ImageListItem";

interface ImageProps {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    sx?: SxProps<Theme>;
}

export const Image: React.FC<ImageProps> = ({ src, alt , width, height,sx}) => {
    return (
        <ImageListItem sx={sx}>
            <img src={src} alt={alt} style={{ width, height }}/>
        </ImageListItem>
    );
}
