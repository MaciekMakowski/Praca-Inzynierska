import { Box, Skeleton } from "@mui/material";

import { SxProps } from "@mui/material";
import { useState } from "react";

type ImageComponentProps = {
  src: string;
  alt: string;
  sx?: SxProps;
};

const ImageComponent = (props: ImageComponentProps) => {
  const [isLoaded, setIsLoaded] = useState(false);


  const handleImageLoad = () => {
    setIsLoaded(true);
    console.log(props.src);
  };

  const handleImageError = () => {
    console.error("Błąd ładowania obrazu");
  };
  return (
    <>
    <Box 
    component="img"
    alt={props.alt}
    onLoad={handleImageLoad}
    onError={handleImageError}
    sx={{ display: isLoaded ? "block" : "none", ...props.sx }}
    src={props.src}
    />
      <Skeleton
        sx={{
          display: isLoaded ? "none" : "block",
        }}
        variant="rectangular"
        animation="wave"
      />

    </>
  );
};

export default ImageComponent;
