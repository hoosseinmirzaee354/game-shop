import Button from "../../ui/Button.jsx";
import {Link} from "react-router-dom";

function LoginForm() {
    return (
        <form method="post" className='w-220 h-90 relative flex items-center bg-brand-2 border border-c-brand-4 rounded-lg mb-6'>
            <img className='w-3/5 h-full absolute right-0 rounded-lg' src="/img/bg/Account.png" alt=""/>
            <div className="w-1/3 h-full flex flex-col justify-center items-center gap-2 px-2 ml-15">
                <h1 className=' font-semibold text-4xl tracking-wide color-brand-4 mb-6'>Login</h1>
                <input className='input' placeholder="Username"/>
                <input type="password" className='input' placeholder="Password"/>

                <Button customClasses='min-w-40 my-6' >Login</Button>
                <Link to='#' className="btnLost text-red-400">Forget Password</Link>
                <Link to="/profile" className="text-emerald-600">Register Now</Link>

            </div>
        </form>
    );
}

export default LoginForm;