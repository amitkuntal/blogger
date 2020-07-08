import React from 'react';
import {connect} from 'react-redux';

function Navbar(props) {
    
  return (
      <div className="fixed w-full flex justify-center mainbackgroundcolor">
        <nav className="container w-full flex items-center justify-between p-4 h-full sm:text-md sm:pl-2 md:pl-2 lg:pl-8">
            <div className="block sm:block md:hidden sm:mr-2 md:mr-2 lg:mr-6 xl:mr-6">
                    <a className="text-white hover:text-gray-200" href="#">
                        <img  className="w-12 h-12 max-w-md" src={require('./../logo.png')} />
                    </a>
            </div>
            <div className="hidden sm:hidden md:block sm:pr-0 md:pr-0 lg-pr-8 xl-pr-8">
                <button>Blogger</button>
            </div> 
            <ul className="w-2/3 hidden sm:hidden md:flex lg:flex items-center justify-end" >
                <li className="mr-2">
                    <a className="text-black hover:text-gray-200" href="#">Subsribe</a>
                </li>
                <li className="mr-2">
                    <a className="text-black hover:text-gray-200" href="#">Write</a>
                </li>
                <li className="mr-2">
                    <a className="text-black hover:text-gray-200" href="#">Sign in</a>
                </li>
                
            </ul>
            <div className="px-2 py-2 pl-4 pr-4 text-white primarybuttoncolor w-auto">
                <button>Get Started</button>
            </div> 
        </nav>
        </div>
  );
}

const mapStateToProps =(state)=>{
    return{
        login:state.login
    }
  }

const mapDispatchToProps= (dispatch)=>{
    return{
        changeName:()=>{dispatch({})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
