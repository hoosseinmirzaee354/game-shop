import {Link} from "react-router-dom";

function Logo() {
    return (
        <Link to='/' className="flex items-center justify-center ml-20 sm:ml-30">
            <img className='max-h-20 w-35' src="/logo.svg" alt="Logo"/>
        </Link>
    );
}

export default Logo;
