import { Link } from "react-router-dom";
import './AllLesson.css';

function Lesson(){
    return(
        <div className="alllesson">
            <h1>Home Row</h1>
            <div className="lessonbox row">
                <div className="col-4 col-md-3">
                <Link to='/lesson1' data-num="1">Key F & J</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson2' data-num="2">Key D & K</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson3' data-num="3">Review</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson4' data-num="4">Key S & L</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson5' data-num="5">Review</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson6' data-num="6">Key A & ;</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson7' data-num="7">Key G & H</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson8' data-num="8">Review</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson9' data-num="9">Key R & U</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson10' data-num="10">Review</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson11' data-num="11">Key E & I</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson12' data-num="12">Review</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson13' data-num="13">Key W & O</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson14' data-num="14">Key W & O</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson15' data-num="15">Review</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson16' data-num="16">Key Q & Y</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson17' data-num="17">Key Q & Y</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson18' data-num="18">Key P & T</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson19' data-num="19">Review</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson20' data-num="20">Review</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson21' data-num="21">Review</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson22' data-num="22">Key V & M</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson23' data-num="23">Key C & ,</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson24' data-num="24">Review</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson25' data-num="25">Key X & .</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson26' data-num="26">Key Z & /</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson27' data-num="27">Review</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson28' data-num="28">Key B & N</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson29' data-num="29">Review</Link>
                </div>
                <div className="col-4 col-md-3">
                <Link to='/lesson30' data-num="30">Review</Link>
                </div>
            </div>
        </div>
    )
}

export default Lesson;