import './About.css';

function About(){
  return(
    <div className="about pb-5">
      <header>
        <p>Hello!</p>
        <h1 className='title'>Mustafa Salah Alden</h1>
        <h1>I Am a <span className='developer'>Web Developer</span></h1>
      </header>
      <div className='content container mt-3'>
        <div>
          <h1 className='mt-3'>About Me</h1>
          <p>I'm Mustafa Salah ,22 Years Old From Sudan.I Love Programming and Wed Design,I was Studyong at The University of Sudan.I'm Ready to Make a lot of Designs for You ,If You want to Know More About Me Contact with Me</p>
        </div>
        <div>
          <h1 className='mt-3'>My Skills</h1>
          <div className='skills d-flex'>
            <span>HTML</span>
            <span>CSS</span>
            <span>SASS</span>
            <span>JS</span>
            <span className='boot'>BOOTSTRAP</span>
            <span>REACT</span>
            <span>GIT</span>
            <span>NPM</span>
          </div>
        </div>
      </div>
    </div>
    )
}

export default About;