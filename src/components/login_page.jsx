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
                            <label For="email">Email: </label>
                            <input type="text" id='email' placeholder='Enter your username' required />
                        </div>
                        <div>
                            <label For="password">Password</label>
                            <input type="password" name="" id="password" placeholder='Enter your password' required/>   
                        </div>
                        
                        
                        <div>
                            <label For="showPassword">Show password</label>
                            <input type="checkbox" id='showPassword' onClick={togglePassword}></input>
                        </div>
                        
                        <div>
                            <button>Login</button>
                        </div>
                        
                        <a href="">Forget Password</a>
                    </div>
                    
                </form>
                
                
            </div>
        </div>
        </>
    )
}

export default login_page;