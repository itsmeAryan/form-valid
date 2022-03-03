import React,{useState,useEffect} from 'react'
import "./Login.css"
import { Elements } from "../Material/ELements"
import { Icons } from "../Material/Icons"
import { SignupCss } from "../Material/Style"
import Logo from "./logo.png";
import { Link ,useNavigate } from "react-router-dom"
import {Formik,Form} from "formik"
import {useCookies} from "react-cookie"

import Text from "./TextField"
import * as Yup from "yup"
function Login() {
    const Navi=useNavigate();

  const check= localStorage.getItem("user")

  useEffect(()=>{

   if(check){
        Navi("/home")
   }
  },[check])
    const [cookie,setcookie]=useCookies()
    const Validator=Yup.object({
        user:Yup.string().max(15,"Must be 15 character or less than ")
        .required("Required"),
        email:Yup.string().email("Email is invalid")
        .required("Email is Required"),
        password:Yup.string().min(5,"password must have 5 or more than 5 character")
        .required("Password is Required"),
        cpassword:Yup.string().oneOf([Yup.ref("password"),null],"password must match")
        .required("confirm Password is Required"),
    })
    const style = SignupCss();
    return <div className='signUp'>
        <div className="signUp-Container md-container sm-conatiner xs-container">
            <div className="signUpLeft dm-variant1">
                <div className="leftbackgorund overlay overlay-plus extra-overlay">
                    <div className="leftContainer">
                        <Elements.Heading variant='h2' className={style.Titlse}>Welcome to</Elements.Heading>
                        <Elements.Heading variant='h2' component={"h3"} className={style.Title} >Dashboard</Elements.Heading>
                        <Elements.Heading variant='h5' className={style.Text}>Signup into Your Account</Elements.Heading>
                        <div className="lineTag"></div>
                        <Elements.Heading variant='span' className={style.Options}>or Login with</Elements.Heading>
                        <Elements.Div className={style.IconsParent}>
                            <Elements.IconBtn className={style.Icons}>
                                <Icons.Facebook className={style.SocialMedia} />
                            </Elements.IconBtn>
                            <Elements.IconBtn className={style.Icons}>
                                <Icons.Twitter className={style.SocialMedia} />
                            </Elements.IconBtn>
                            <Elements.IconBtn className={style.Icons}>
                                <Icons.LinkedIn className={style.SocialMedia} />
                            </Elements.IconBtn>
                        </Elements.Div>
                    </div>

                </div>
            </div>
            <div className="signUpRight dm-variant">
                <div className="signUp-container">
                    <Elements.Div className={style.ImgBox}>
                        <img src={Logo} alt="Logo" />
                    </Elements.Div>
                    <Elements.Heading variant='h4' className={style.RightconTitle}>
                        SignUp
                    </Elements.Heading>
                    <Elements.Heading variant='body1' component={"span"}>
                        Already have an account? <Link to="/login" style={{ textDecoration: "none", fontWeight: 700, fontSize: "19px" }}>Login here</Link>
                    </Elements.Heading>
                    {/* form */}
                    <Formik
  initialValues={{
      user:"",
      email:'',password:"",
      cpassword:"",
  }}
  onSubmit={value=>{
    localStorage.setItem("user",JSON.stringify(value))

    Navi("/home",{state:value})
  }}
  validationSchema={Validator}
  >
      {
          formik=>(
              <div className={style.Form}>
                  <Form>
                  <div className={style.item}>
                            <Text
                            type={"text"}
                            label="Enter username"
                            name={"user"}  id={"user"}
                            />
                            <Icons.Friends className={style.InputIcon} />
                        </div>
                  <div className={style.item}>
                            <Text
                            type={"email"}
                            label="Enter email"
                            name={"email"}  id={"email"}
                            />
                            <Icons.Email className={style.InputIcon} />
                        </div>
                        <div className={style.item}>
                            <Text
                             type={"password"}
                                 label="Enter Password"
                                 name={"password"}  id={"password"}
                                   />
                            <Icons.Password className={style.InputIcon} />
                        </div>
                        <div className={style.item}>
                            <Text
                             type={"password"}
                                 label="Enter confirm Password"
                                 name={"cpassword"}  id={"cpassword"}
                                   />
                            <Icons.Password className={style.InputIcon} />
                        </div>
                        <div className={style.ItemBtn}>
                            <Elements.Heading variant='body1'>
                                
                            </Elements.Heading>
                            <Elements.Btn
                            type='submit'
                            size="medium"
                            color="primary"
                            variant='outlined'
                            endIcon={<Icons.Next/>}
                            >
Signup
                            </Elements.Btn>
                        </div>
                        <div className="hiiden">
                        <Elements.Div className={style.IconsParent}>
                            <Elements.IconBtn className={style.HiddenIcons}>
                                <Icons.Facebook className={style.HiddenSocialMedia} />
                            </Elements.IconBtn>
                            <Elements.IconBtn className={style.HiddenIcons}>
                                <Icons.Twitter className={style.HiddenSocialMedia} />
                            </Elements.IconBtn>
                            <Elements.IconBtn className={style.HiddenIcons}>
                                <Icons.LinkedIn className={style.HiddenSocialMedia} />
                            </Elements.IconBtn>
                        </Elements.Div>
                        </div>
                  </Form>
              </div>
          )
      }
  </Formik>
                   
                </div>
            </div>
        </div>
    </div>
}

export default Login