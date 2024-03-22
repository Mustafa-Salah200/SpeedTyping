import './Lesson.css';

function Lesson18(){
    let y = 0;
    let x = 0;
    let timer;
    let right = 0;
    let wrong = 0;
    const location = "/lesson18";
    let testdata = {
        letters:["p","t"],
        length:"15"
    }
    const length = testdata.length;
    const testarray = testdata.letters;
    let array =[];
    for(let x=0;x< length;x++){
        let letter = testarray[Math.floor(Math.random() * testarray.length)];
        array.push(letter)
    }
    const words = array.map(ele=>{
        x++;
        return <div className='box' key={x} id={x}>
            <span className='let'>{ele}</span>
        </div>
    })
    const boxs = array.map(e=>{
        y++;
        let classbox = `box${y}`;
        let nextbox = `box${y + 1}`;
        return <div className="letter" key={y} id={y}>
        <input className={classbox}   onChange={(ele)=>{
            let wordbox1 = document.querySelectorAll(".words div")
            wordbox1.forEach(e=>{
                if(+e.id === +ele.target.parentElement.id + 1){
                    e.classList.add("boxactive");
                } else if (+e.id + 1 === +ele.target.parentElement.id){
                    e.classList.remove("boxactive");
                }
            })
            if(e === ele.target.value){
                right++;
                document.querySelector(".inforscore").innerHTML++;
                let wordbox = document.querySelectorAll(".words div")
                wordbox.forEach(e=>{
                    if(e.id === ele.target.parentElement.id){
                        e.style.backgroundColor = "#86f20a59";
                        e.style.color ="#21be0c";
                        e.style.border = "1px solid #21be0c";
                        e.classList.remove("boxactive");
                    }
                })
            } else if(e !== ele.target.value){
                wrong++;
                document.querySelector(".infowrong").innerHTML++;
                let wordbox = document.querySelectorAll(".words div")
                wordbox.forEach(e=>{
                    if(e.id === ele.target.parentElement.id){
                        e.style.backgroundColor = "#e3a019a1";
                        e.style.color ="#fff";
                        e.style.border = "1px solid #e3a019";
                        e.classList.remove("boxactive");
                    }
                })
            }
            if(`${nextbox}` !== `box${array.length + 1}`){
                return document.querySelector(`.${nextbox}`).focus();
            } else {
                clearInterval(timer)
                ele.target.blur();
                let box = document.createElement("div");
                let div = document.createElement("div");
                let scorediv = document.createElement("div");
                let buttondiv = document.createElement("div");
                let h1 = document.createElement("h1");
                let span = document.createElement("span");
                let p_right = document.createElement("p");
                let p_wrong = document.createElement("p");
                let rightspan = document.createElement("span");
                let wrongspan = document.createElement("span");
                let agin = document.createElement("a");
                let end = document.createElement("a");
                if(wrong === 0){
                    h1.appendChild(document.createTextNode("Great"));
                } else {
                    h1.appendChild(document.createTextNode("Completed"));
                }
                span.appendChild(document.createTextNode(`Your Time: ${document.querySelector(".time").innerHTML}`));
                rightspan.appendChild(document.createTextNode(`${right}`));
                if(window.localStorage.getItem("userdata")){
                    let array = JSON.parse(window.localStorage.getItem("userdata"));
                    array.forEach(ele =>{
                        if(ele.login){
                            ele.score += +right;
                            ele.wrongs += wrong;
                            ele.letters_typed += 2;
                            ele.timing_done += +document.querySelector(".time").innerHTML;
                            ele.lesson_done++ ;
                            if(wrong === 0){
                                ele.stars++;
                            }
                            window.localStorage.setItem("userdata",JSON.stringify(array));
                        }
                    })
                }
                wrongspan.appendChild(document.createTextNode(`${wrong}`));
                p_right.appendChild(document.createTextNode("Score:"));
                p_wrong.appendChild(document.createTextNode("Wrong:"));
                agin.appendChild(document.createTextNode("Agin"));
                end.appendChild(document.createTextNode("End"));
                agin.setAttribute("href",location)
                end.setAttribute("href","/lesson")
                h1.className = "done_title";
                span.className = "text-success";
                div.className = "done";
                box.className = "overlay";
                scorediv.className = "scorediv";
                buttondiv.className = "buttondiv";
                p_right.className = "text-success";
                p_wrong.className = "text-danger";
                p_right.appendChild(rightspan)
                p_wrong.appendChild(wrongspan)
                scorediv.appendChild(p_right);
                scorediv.appendChild(p_wrong);
                buttondiv.appendChild(agin);
                buttondiv.appendChild(end);
                div.appendChild(h1);
                div.appendChild(span);
                div.appendChild(scorediv);
                div.appendChild(buttondiv);
                box.appendChild(div);
                document.querySelector(".lesson").appendChild(box)
            }
        }} type="text" />
    </div>
    })
    return(
        <div className="lesson">
            <div className='cover'>
                <div className='start'>
                    <h2 className='starttitle'>Get Started Now !</h2>
                    <button onClick={(e)=>{
                        e.target.parentElement.parentElement.remove();
                        document.querySelector(".box1").focus();
                        timer = setInterval(()=>{
                            if(document.querySelector(".time")){
                                document.querySelector(".time").innerHTML++;
                            } else {
                                clearInterval(timer)
                            }
                        },1000)
                    }}>Start</button>
                </div>
            </div>
            <h1 className='lessontitle'>Start [P,T]</h1>
            <h2 className='info'>
                <p className='text-primary d-flex'>Time:<span className='time'>0</span></p>
                <p className='text-success'>Score: <span className='inforscore'>0</span></p>
                <p className='worning'>Wrong: <span className='infowrong'>0</span></p>
            </h2>
            <div className='d-flex words'>{words}</div>
            <div className="d-flex p-3 letters">
                { boxs }
            </div>
        </div>
    )
}
export default Lesson18;