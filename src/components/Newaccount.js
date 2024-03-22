import { Link } from "react-router-dom";
import './Newaccount.css';


function Newaccount(){
    let arrayofdata = [];
    if(window.localStorage.getItem("userdata")){
        arrayofdata = JSON.parse(window.localStorage.getItem("userdata"));
    }
    function AddToLocal(){
        let email = document.querySelector(".email");
        let name = document.querySelector(".name");
        let pass = document.querySelector(".pass");
        if(email.value !== "" && email.value !== null && name.value !== "" &&  name.value !== null && pass.value !== "" && pass.value !== null){
            let userdata = {
                id: new Date().getTime(),
                name : name.value,
                email: email.value,
                password: pass.value,
                score: 0,
                stars: 0,
                lesson_done: 0,
                letters_typed: 0,
                wrongs: 0,
                timing_done: 0,
                login: true
            }
            arrayofdata.push(userdata);
            window.localStorage.setItem("userdata",JSON.stringify(arrayofdata));

            email.value ="";
            name.value ="";
            pass.value ="";
        }
    }
    return(
        <div className="createaccount">
            <div className="createbox">
                <h3 className="title">Ready to get started?</h3>
                <div className="form">
                    <input className="name" type="text" placeholder="Full name"/>
                    <input className="email" type="email" defaultValue="" placeholder="Email address"/>
                    <input className="pass" type="password" placeholder="Password"/>
                    <button onClick={AddToLocal}>Sign up</button>
                    <p className="footer">Already have an account?<Link className="create" to='/login'>Login now</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Newaccount;