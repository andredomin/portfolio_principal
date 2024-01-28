import Slide from "./Slide"
import SlideZero from "./SlideZero"

const Presentation = () => {
  return (
    <>
    <SlideZero>
      <div className="presentation presentation_text"><h2>Hello <span>there!</span> 👋🚀</h2></div>
    </SlideZero>
    <Slide>
      <div className="presentation presentation_text--2"><h2>Welcome to my <span>portfolio</span> 💼</h2></div>
    </Slide>
    <SlideZero>
        <div className="presentation presentation_text--3"><h2>I'm Andres, a dynamic <span>front-end developer</span> with an unquenchable thirst for innovation and a love for turning ideas into digital realities.</h2></div>
    </SlideZero>
    
    <Slide>
    
        <div className="description">
        
        <img id="arrow" src="./img/arrow.gif" alt="arrow" />
            <div className="circle"><img id="circle" src="./img/circle.gif" alt="circle" /></div>
            <div className="profile profile_button "></div>
        </div>
    </Slide>
    </>
  )
}

export default Presentation