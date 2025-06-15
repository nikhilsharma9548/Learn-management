import{ crateContext, createContext, use, useEffect, useState } from "react";
import { courses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

export const AppContextProvider = (props)=>{

    

    const navigate =useNavigate()

    const [allCourses, setallCourses] = useState([])
    //Fectch All courses
    const fetchAllCourses = async () =>{
        setallCourses(courses)
    }

    useEffect(()=>{
        fetchAllCourses()
    },[])
     const value = {
            allCourses,
            navigate,
     }

     //function to calculate Course Chapter TIme

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}