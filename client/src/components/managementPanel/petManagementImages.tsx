import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Typography,
  useTheme,
} from "@mui/material";
import { ChangeEvent, Dispatch } from "react";

import { Image } from "../../utils/types/basicTypes";
import ImageComponent from "./imageComponent";
import shadows from "@mui/material/styles/shadows";
import { updateAnimalImages } from "../../utils/services/posts";
import { useState } from "react";

type PetManagementImagesProps = {
  images: Image[] | null;
  animalId: number;
  setRefresh: Dispatch<React.SetStateAction<boolean>>;
};

const PetManagementImages = (props: PetManagementImagesProps) => {
  const theme = useTheme();
  const [newImages, setNewImages] = useState<FileList | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setNewImages(event.target.files);
    }
  };
  const handleUpload = () => {
    if (newImages && newImages.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < newImages.length; i++) {
        formData.append(`files`, newImages[i]);
      }
      formData.append('ref', `api::animal.animal`);
      formData.append('refId', `${props.animalId}`);
      formData.append('field', `images`);
      console.log(formData)
      updateAnimalImages(formData).then((res) => {
        if(res){
          props.setRefresh(true);
        }
      });
      
    } else {
      console.error('Nie wybrano plików.');
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", xl: "50%" },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.adminField,
        borderRadius: "1rem",
        padding: "0.5rem",
        boxSizing: "border-box",
        boxShadow: shadows[3],
      }}
    >
      <Typography variant="subtitle1" color={theme.palette.text.primary} p={0}>
        Zdjęcia
      </Typography>
      <ImageList
        sx={{
          boxSizing: "border-box",
          height: "100%",
          m: 0,
        }}
        cols={4}
        rowHeight={100}
        variant="quilted"
      >
        {props.images?.map((image, i) => (
          <ImageComponent image={image} key={i} setRefresh={props.setRefresh}/>
        ))}

        <Button
          sx={{
            width: "200px",
            height: "100px",
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "0.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          component="label"
        >
          <input
            type="file"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <Typography variant="h3" color={theme.palette.text.primary}>
            +
          </Typography>
        </Button>

      </ImageList>
      <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          sx={{ marginTop: '1rem' }}
        >
          Prześlij zdjęcia
        </Button>
    </Box>
  );
};

export default PetManagementImages;
