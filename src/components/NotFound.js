import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const NotFound = () =>{
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 2000);
  }, [])
  
  return (
    <>
      <h1>Not Found</h1>
      <h2>Taking You Back</h2>
    </>
  )
}