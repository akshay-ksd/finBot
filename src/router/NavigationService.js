import { createRef } from "react";

export const navRef = createRef();

export const checkRef =()=> {
    console.log("ref",navRef.current)
}


