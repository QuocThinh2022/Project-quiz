import { getUser } from "../../services/userService";
import { useNavigate } from 'react-router-dom';
import {setCookie} from '../../helpers/cookie'
import { useDispatch } from "react-redux";
import { authen } from "../../actions/authen";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        
        const res = await getUser(email, password);
        if (res.length > 0) {
            const time = 1;
            setCookie('id', res[0].id, time);
            setCookie('fullName', res[0].fullName, time);
            setCookie('email', res[0].email, time);
            setCookie('token', res[0].token, time);
            dispatch(authen(true));
            navigate('/');
        }
        else 
            alert("Email or Password khong chinh xac")

    }

    return (

        <>
            <div className='form'>
                <h2>Login  Quiz</h2>
                <form onSubmit={handleSubmit}>
                    <input type='email' name='email' placeholder='Email' required />
                    <input type='password' name='password' placeholder='Password' required />
                    <button className='button button-main'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login;