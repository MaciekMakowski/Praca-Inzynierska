import {
  Box,
  Modal,
  useTheme,
} from "@mui/material";
import { ResourceType, ResourceTypeType } from "../../../utils/types/basicTypes";

import AddResourceForm from "../forms/addResourceForm";

type EditResourceModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: ResourceType;
  resourceTypes: ResourceTypeType[];
};

const EditResourceModal = (props:EditResourceModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);


  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.adminField,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", md: "60%", lg: "40%", xl: "30%" },
          minWidth: "300px",
          boxSizing: "border-box",
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
          <AddResourceForm data={props.data} resourceTypes={props.resourceTypes}/>
          </Box>
      </Box>
    </Modal>
  );
};

export default EditResourceModal;
