import { AnimalType, DiseaseType, IsolationType, PetDiseaseType } from "./basicTypes";

export type PetManagementProps = {
    data?: AnimalType;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
    isNew: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  };

  export type DiseaseManagementProps = {
    data?: DiseaseType;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
    isNew: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  };
  
export type ListProps = {
  refreshList:boolean,
  setRefreshList: React.Dispatch<React.SetStateAction<boolean>>
}

  export type EditPetModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data: AnimalType;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  };

  export type AddAdoptionProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data?: AnimalType;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  export type EditIsolationModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data?: IsolationType;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  };

  export type ModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  
  export type EditDiseaseProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data?: DiseaseType;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  };

  export type DiseaseInfoProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data: PetDiseaseType | IsolationType;
    reason: string;
    desc: string;
    buttonText: string;
  };
  
  export type EditPetDiseaseModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data?: PetDiseaseType;
  }
  
  export type ConfirmModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    petid: number;
    animal:AnimalType;
    setAnimal: React.Dispatch<React.SetStateAction<AnimalType | null>>;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  };