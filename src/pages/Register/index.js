import { generateToken } from '../../helpers/generateToken';
import { createUser, getUser } from '../../services/userService';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target.elements.fullName.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const token = generateToken();

        const options = {
            fullName: fullName,
            email: email,
            password: password,
            token: token
        }

        const checkExits = await getUser(email);
        if (checkExits.length)
            alert("Email da ton tai!");
        else {
            const result = await createUser(options);
            if (result) {
                navigate('/login');
            }
        }
        console.log(checkExits);
    }
    
    return (

        <>
            <div className='form'>
                <h3 className='inner-title'>Register Account</h3>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='fullName' placeholder='Full Name' required />
                    <input type='email' name='email' placeholder='email' required />
                    <input type='password' name='password' required />
                    <button className='button button-main' >Register</button>
                </form>
            </div>
        </>
    )
}

export default Register;