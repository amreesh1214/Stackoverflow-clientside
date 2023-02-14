import React, {useState} from 'react'
import './Auth.css'
import icon from '../../assets/logo2.png'
import AboutAuth from './AboutAuth'
const Auth = () => {
    const [isSignup, setIsSignup] =useState(false)

    const handleSwitch =()=>{
        setIsSignup(!isSignup)
    }
    return (
        <section class='auth-section'>
          { isSignup && <AboutAuth />}
        <div class='auth-container-2'>
            {!isSignup && <img src ={icon} alt ='stack overflow' width='120'className='login-logo'/> }
            <form >
                {
                    isSignup && (
                        <label htmlFor='name'>
<h4>Display Name</h4>
<input type="text" id='name' name='name' />
                        </label>
                    )
                }
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type="email" name='email' id='email'/>
                </label>
                <label htmlFor="password">
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h4>Password</h4>
                    { !isSignup && <p style={{color:"#007ac6"}}>forget password?</p>}
                    </div>
                    <input type="password" name='password' id='password'/>
                    {isSignup && <p style={{color:"#666767", fontSize:"13px "}}>Passwords must contain at least eight characters, <br/>including at least 1 letter and 1 number.

</p>}
                </label>
                {
                    isSignup && (
                        <label htmlFor='check'>
                           <input type="checkbox" id='check' />
                           <p style={{fontSize:"13px "}}>Opt-in to receive occasional product <br/>updates, user research invitations, company <br/>announcements, and digests.
</p>
                        </label>
                    )
                }
                <button type='submit' classname='auth-btn'>{ isSignup ? 'Sign Up': 'Log in'}</button>
            {
                isSignup && (
                    <p style={{color:"#666767", fontSize:"13px "}}>
                        By clicking “Sign up”, you agree to our <br/> 
                        <span style={{color:"#007ac6"}}>terms of <br/>service</span>, 
                        <span style={{color:"#007ac6"}}>privacy policy </span>and 
                        <span style={{color:"#007ac6"}}>cookie policy </span>

                    </p>
                )
            }
            </form>

            <p>
                {isSignup ? 'Already have an account?' : "Don't have an account? "}
            <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" :'sign up'}</button>
            </p>

            </div>
            </section>
    )
}
export default Auth