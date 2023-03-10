import {useState, useContext} from 'react';
import {AuthContext} from '../contexts/auth'


export default function LoginForm() {

    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    const {login} = useContext(AuthContext);
    
    function usernameChangeHandler(e) {
        SetUsername(e.target.value);
    }
    
    function passwordChangeHandler(e){
        SetPassword(e.target.value);
    }

    function submitHandler(e){
        e.preventDefault();
        
        login({
            username,
            password
        });

    }

return (
    <div class="bg-white  lg:w-4/12 md:6/12 w-10/12 m-auto shadow-md">
            <div class=" py-8 px-8 rounded-xl">
                <h1 class="font-medium text-2xl mt-3 text-center">Login</h1>
                <form action="" class="mt-6" onSubmit={submitHandler}>
                    <div class="my-5 text-sm">
                        <label for="username" class="block text-black">Username</label>
                        <input type="text" onChange={usernameChangeHandler} autofocus id="username" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
                    </div>
                    <div class="my-5 text-sm">
                        <label for="password" class="block text-black">Password</label>
                        <input type="password" onChange={passwordChangeHandler} id="password" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                        <div class="flex justify-end mt-2 text-xs text-gray-600">
                           <a href="../../pages/auth/forget_password.html hover:text-black">Forget Password?</a>
                        </div>
                    </div>

                    <button class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
                </form>

                 <div class="flex md:justify-between justify-center items-center mt-10">
                    <div style={{height: "1px"}} class="bg-gray-300 md:block hidden w-4/12"></div>
                    <p class="md:mx-2 text-sm font-light text-gray-400"> Login With Social </p> 
                    <div style={{height: "1px"}} class="bg-gray-300 md:block hidden w-4/12"></div>
                </div>

                <div class="grid md:grid-cols-2 gap-2 mt-7">
                    <div>
                        <button class="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
                    </div>
                    <div>
                        <button class="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">Twitter</button>
                    </div>
                </div>

                <p class="mt-12 text-xs text-center font-light text-gray-400"> Don't have an account? <a href="../auth/register.html" class="text-black font-medium"> Create One </a>  </p> 

            </div>
        </div>
)

}