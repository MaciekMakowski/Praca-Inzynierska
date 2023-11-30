import {
    Box,
    Button,
    IconButton,
    Modal,
    TextField,
    Typography,
    useTheme
} from "@mui/material";

import { AnimalType } from "../../../utils/types/basicTypes";
import CloseIcon from "@mui/icons-material/Close";
import { EditPetModalProps } from "../../../utils/types/propsTypes";
import { ErrorInput } from "../../../utils/types/errorInput";
import { handleTextChange } from "../../../utils/functions/handlers";
import { updateAnimal } from "../../../utils/services/puts";
import { useState } from "react";
import { validateForm } from "../../../utils/functions/validators";

const EditPetDescModal = (props:EditPetModalProps) => {
    const theme = useTheme();
    const handleClose = () => props.setOpen(false);
    const desc = typeof props.animal?.attributes.description === "string" ? props.animal.attributes.description : "";
    const [animal, setAnimal] = useState<AnimalType>(props.animal)


     const textChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      handleTextChange(e, setAnimal)
    }
    const [errorList, setErrorList] = useState<ErrorInput>({
      description:{
        status:false,
      }
    })
    const sendForm = () =>{
      validateForm(animal.attributes, setErrorList).then((res) => {
        if(res){
          updateAnimal(animal).then((res) => {
            if(res){
              props.setRefresh(true)
              handleClose()
            }else{
              alert("Coś poszło nie tak")
            }
          })
        }
      })
    }

    return(
        <Modal open={props.open} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.adminField,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "30%",
            minWidth:{xs:'90%', lg:"600px"},
            boxSizing: "border-box",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            border: `${theme.palette.primary.main} 4px solid}`,
            borderRadius: [3],
          }}
        >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Typography variant="h5" color={theme.palette.text.primary}>
            Edytuj opis
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
           <TextField
            multiline
            label="description"
            name="description"
            variant="outlined"
            rows={9}
            value={animal.attributes.description}
            onChange={textChange}
            focused={desc.length > 0}
            error={errorList.description.status}
           >

           </TextField>
          
          <Button variant="contained" onClick={() => sendForm()}>Zapisz</Button>
        </Box>
      </Modal>
    );
  };

export default EditPetDescModal