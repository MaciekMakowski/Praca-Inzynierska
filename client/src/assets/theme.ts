import {ThemeOptions} from "@mui/material";


declare module '@mui/material/styles' {
    interface TypeBackground{
        secondary:string
    }
    interface TypeText {

        hint:string;
    }
}

export const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#003C18',
        },
        secondary: {
            main: '#018C38',
        },
        text: {
            primary:'#003C18',
            secondary:'#E4E4E4'
        },
        background:{
            secondary:'rgb(244,244,244,0.82)'
        }
    },
};