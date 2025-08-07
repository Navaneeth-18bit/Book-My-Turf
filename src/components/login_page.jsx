import React from 'react';

function login_page()
{
    return(
        <>
        <div className='login_page'>
            <div>
                <h1>Hi Welcome Back!</h1>
                <p>Enetr your details to continue</p>
            </div>

            <div>
                <input type="text" name="" id="" placeholder='Enter your Username' />
                <input type="password" name="" id="" placeholder='Enter your password' />
                Show Password<input type="checkbox" name="" id="" />
                <button>Login</button>
                <a href="">Forget Password</a>
            </div>
        </div>
        </>
    )
}

export default login_page;