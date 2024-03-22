import Login from "./Login";
import Profileuser from "./Profileuser";
import './Profile.css';

function Profile(){
    let login = false;
    if(window.localStorage.getItem("userdata")){
        let array = JSON.parse(window.localStorage.getItem("userdata"));
        array.forEach(ele => {
            if(ele.login === true){
                login = true;
            }
        });
    }
    const profile = ()=>{
        if(login){
            return <Profileuser />
        } else {
            return <Login />
        }
    }
    return(
        <div className="profile">
            <div>{ profile() }</div>
        </div>
    )
}
export default Profile;