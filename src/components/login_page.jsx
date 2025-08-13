import React from 'react';

function login_page()
{
    const togglePassword = () => {
        const passwordField = document.getElementById('password')
        const checkbox = document.getElementById('showPassword')

        if (checkbox.checked)
        {
            passwordField.type = "text"

        }
        else
        {
            passwordField.type = "password"
        }
    }



    return(
        <>
        <div className='login_page'>
            <div className='login_page_greeting'>
                <h1>Hi Welcome Back!</h1>
                <p>Enter your details to continue</p>
            </div>

            <hr />
            <div className='login_page_form'>
                <form action="onsubmit">
                    <div className='login_page_form_input'>
                        <div>
                            <label For="email" className='Gmail'>Username </label>
                            <input type="text" id='email' placeholder='Enter your username' required />
                        </div>
                        <div>
                            <label For="password" className='Password'>Password</label>
                            <input type="password" name="" id="password" placeholder='Enter your password' required/>   
                        </div>
                        
                        
                        <div className='show_password'>
                            <label For="showPassword" className='showpassword'>Show password</label>
                            <input type="checkbox" id='showPassword' onClick={togglePassword}></input>
                        </div>
                        
                        <div className='Login-page-submit'>
                            <button>Login</button>
                        </div>

                        
                        
                        <a href="" className='Forget-password'>Forget Password</a>
                        <hr />

                        <div className='Create-new-account'>
                            <button>Create New Account</button>
                        </div>
                    </div>
                    
                </form>
                
                
            </div>
        </div>
        </>
    )
}

export default login_page;