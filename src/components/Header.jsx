import { Link } from "react-router-dom"



function Header() {
  return (
    <header className="w-full bg-neutral py-2 text-neutral-content">
        <div className="flex items-center justify-center sm:justify-end align-element">
             {/* {USER} */}
            {/* {Links} */}
            <div className="flex gap-x-8 justify-center items-center">
                <Link to='/login'  className="link link-hover text-xs sm:text-sm">Sign in / Guest</Link>
                <Link to='/register'  className="link link-hover text-xs sm:text-sm"> Create Account</Link>  
            </div>
            
        </div>
        

    </header>
  )
}

export default Header