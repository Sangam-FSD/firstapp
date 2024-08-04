// import { Formik,Form, Field } from "formik";
// import {z, object, string, z} from "zod"
// import { toFormikValidationSchema } from "zod-formik-adapter";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import clsx from "clsx"

// const inputProductFormSchema = object({
//     title: string({
//         required_error:"please enter a title"

//     })
//     price:string({
//         required_error:"please enter price"
//     })
//     description:string({
//         required_error:"please enter description"
//     })
//     image:string({
//         required_error:"image is required"
//     })
//     category: z.string().min(3, "Category must be at least three character long")

// })

// const inputProduct = async (product)=>{
//     const response = await fetch("",{
//       method: "POST",
//       headers:{
//         "Content-Type": "application/json",
//       }, 
//       body:JSON.stringify(product)
//     })
//     if(!response.ok){
//         throw new Error("Network response was not ok")
//     }
    

// }