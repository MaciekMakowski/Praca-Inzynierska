import { IconButton, ImageListItem } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import DeleteImageModal from "./deleteImageModal";
import { Image } from "../../utils/types/basicTypes";
import { useState } from "react";

type ImageComponentProps = {
  image: Image;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

const ImageComponent = (props: ImageComponentProps) => {

    const [open, setOpen] = useState<boolean>(false);

  return (
    <>
    <ImageListItem
      sx={{
        width: "200px",
      }}
    >
      <IconButton
        sx={{
            color: "red",
          position: "absolute",
          right: "0",
        }}
        onClick={() => setOpen(true)}
      >
        <DeleteIcon />
      </IconButton>
      <img
        src={`http://localhost:1337${props.image.url}`}
        loading="lazy"
        alt={props.image.alternativeText}
      />
    </ImageListItem>
    <DeleteImageModal open={open} setOpen={setOpen} image={props.image} setRefresh={props.setRefresh}/>
    </>
  );
};

export default ImageComponent;
