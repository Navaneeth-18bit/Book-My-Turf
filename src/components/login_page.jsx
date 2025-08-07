import React from 'react';

function login_page()
{
    return(
        <>
        <div className='login_page'>
            <div className='login_page_greeting'>
                <h1>Hi Welcome Back!</h1>
                <p>Enetr your details to continue</p>
            </div>

            <div className='login_page_form'>
                <form action="onsubmit">
                    <div className='login_page_form_input'>
                        <label htmlFor="email">Email: </label>
                        <input type="text" id='email' placeholder='Enter your username' />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="" placeholder='Enter your password' required/>
                        <label htmlFor="checkbox">Show password</label>
                        <input type="checkbox"></input>
                        <button>Login</button>
                    </div>
                </form>
                
                <a href="">Forget Password</a>
            </div>
        </div>
        </>
    )
}

export default login_page;