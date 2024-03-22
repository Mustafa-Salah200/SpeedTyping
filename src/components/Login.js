import { Link } from 'react-router-dom';
import './Login.css';

function Login(){
    let array = [];
    let getdata = ()=>{
        let email = document.querySelector(".email");
        let pass = document.querySelector(".pass");
        if(email.value !== "" && email.value !== null && pass.value !== "" && pass.value !== null){
            if(window.localStorage.getItem("userdata")){
                array = JSON.parse(window.localStorage.getItem("userdata"));
                array.forEach(ele => {
                    if(ele.email === email.value && ele.password === pass.value){
                        console.log(array);
                        console.log(ele.email);
                        console.log(ele.password);
                        document.querySelector(".loginbox").remove();
                        let div = document.createElement("div");
                        let h2 = document.createElement("h2");
                        let Link = document.createElement("a");
                        h2.appendChild(document.createTextNode("Login Success!"));
                        Link.appendChild(document.createTextNode("Go To Profile"));
                        h2.className = "success";
                        Link.setAttribute("href",'/profile');
                        Link.className = "gotoprofile"
                        div.appendChild(h2);
                        div.appendChild(Link);
                        document.querySelector(".login").appendChild(div);
                        email.value = "";
                        pass.value = "";
                    }
                });
            }
        }
    }
    return (
        <div className="login">
            <div className='loginbox'>
                <h3 className='title'>Login To Get Access</h3>
                <div className="form">
                    <input className="email" id='email' type="text" placeholder="Email address"/>
                    <input className="pass" id='pass' type="password" placeholder="Password"/>
                    <button onClick={getdata}>Sign in</button>
                    <p className='footer'>Don't have an account?<Link className="create" to='/newaccount'>Create free accuont</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login;