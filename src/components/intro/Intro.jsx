import './intro.scss'
// import { init } from 'ityped'
import ITyped from 'react-ityped';
import { useEffect ,useRef} from 'react'

const Intro = () => {
  const textRef = useRef();
  // const displayPosts = () =>{
  //   init(textRef.current,{
  //     showCursor:true,
  //     backDelay:1500,
  //     typeSpeed:30,
  //     strings:['Full Stack Developer',"Designer","Competitive Coder"],
  //   });
  // }
  const strings = ['Full Stack Developer',"Designer","Competitive Coder"]
  // useEffect(() => {
  //   console.log("Samkit");
  //     // displayPosts()
  // }, [])
  
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profilepic.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Samkit Jain</h1>
          {/* <h3>Software Engineer, <span><ITyped
            showCursor={false}
            strings={strings}
            typeSpeed={50}
            backSpeed={50}
            startDelay={100}
            backDelay={250}
        /></span></h3> */}
        <h3>
        Software Engineer,
        Competitive Coder,
        Full Stack Developer
        </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro