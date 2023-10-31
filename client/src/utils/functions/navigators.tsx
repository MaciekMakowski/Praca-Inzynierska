import { NavigateFunction } from "react-router"

export const navigateTo = (foo:NavigateFunction,path: string) => {
        window.scrollTo(0,0);
        foo(path);
}