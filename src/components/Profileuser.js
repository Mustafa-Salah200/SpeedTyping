import './Profileuser.css';
import Login from './Login';
import { Link } from 'react-router-dom';

function Profileuser(){
    let userdata;
    let arrayofletter = [" "];
    // if(window.localStorage.getItem("userdata")){
    //     let data = JSON.parse(window.localStorage.getItem("userdata"));
    //     document.getElementById("score").innerHTML = data.score;
    // }
    const Show = ()=>{
        if(window.localStorage.getItem("userdata")){
            let array = JSON.parse(window.localStorage.getItem("userdata"));
            array.forEach(ele => {
                if(ele.login === true){
                    userdata = ele;
                }
            });
            let showletter = ()=>{
                let letter = document.querySelector(".testletter");
                if(letter.value !== "" && letter.value !== null && letter.value.length === 1){
                    let div = document.createElement("div");
                    div.appendChild(document.createTextNode(`${letter.value}`));
                    document.querySelector(".showletter").appendChild(div);
                    arrayofletter.push(letter.value);
                    letter.value = "";
                }
            }
            let saveletter = ()=>{
                console.log("save");
                let num = document.querySelector(".letter_number");
                if(num.value !== "" && num.value !== null){
                    console.log(num.value);
                    let ob = {
                        letters: arrayofletter,
                        length: num.value
                    }
                    console.log(ob);
                    console.log(JSON.stringify(ob));
                    window.localStorage.setItem("testdata",JSON.stringify(ob));
                }
            }
            return (
                <>
                    <div className='header'>
                        <h1 className='title'>{userdata.name}</h1>
                        <div className='userinfo'>
                            <p className='starsbox'>Stars: <span className='stars'>{userdata.stars}</span></p>
                            <p><span className='scorebox'>Score: </span><span id='score'>{userdata.score}</span></p>
                        </div>
                    </div>
                    <div className='info'>
                        <h1 className='stats'>Stats</h1>
                        <div className='moreinfo'>
                            <div>
                                <h1>{userdata.lesson_done}</h1>
                                <p>Lesson Done</p>
                            </div>
                            <div>
                                <h1>{userdata.letters_typed}</h1>
                                <p>Letters Typed</p>
                            </div>
                            <div>
                                <h1>{userdata.wrongs}</h1>
                                <p>Wrongs</p>
                            </div>
                            <div>
                                <h1>{userdata.letters_typed}</h1>
                                <p>Timing Done</p>
                            </div>
                        </div>
                    </div>
                    <div className='content pb-5'>
                        <h1>Create Test</h1>
                        <div className='contentbox'>
                            <div className='d-flex'>
                                <div className='test'>
                                    <input className='testletter' type='text' placeholder='One Letter' />
                                    <button onClick={showletter}>Add</button>
                                </div>
                                <div className='numberofletter'>
                                    <input className='letter_number' type='number' placeholder='Number Of Letter' />
                                </div>
                            </div>
                            <div className='showletter'></div>
                            <button className='bg-success saved' onClick={saveletter}>Save</button>
                        </div>
                        <Link className='gototest bg-primary text-light p-2 mt-3' to='/test'>Go To Test</Link>
                    </div>
                </>
            )
        } else {
            return (
                <Login />
            )
        }
    }
    
    return(
        <div className="profileuser">
            { Show() }
        </div>
    )
}
export default Profileuser;