import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className='container-fluid bg-dark text-white d-flex justify-content-between text-center'>
            <div className='d-flex'>
                <p className='m-1'> 07572535550</p>
                <p className='m-1'>shovonkhan00@gmail.com</p>
            </div>
               
            <div className='m-1'>
                <a content='' href='/login'>Login</a> / <a content='#' href='/register'>Register</a>
            </div>
        </div>
    );
};

export default Header;