import React from 'react'
import {useField,ErrorMessage} from "formik"
import { Elements } from "../Material/ELements"
import { SignupCss } from "../Material/Style"
import "./Error.scss"
const TextField = ({...props}) => {
    const [field,meta]=useField(props);
    const style = SignupCss();

  return <>
    <Elements.Textinput
      {...field}
      {...props}
      variant='outlined' 
       className={style.Input} 
       />
  <ErrorMessage component={"span"} className={meta.error && meta.touched && "is-invalid"} name={props.name} />
  
  </>
}

export default TextField