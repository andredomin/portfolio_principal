import Slide from './Slide'
import SlideZero from './SlideZero'
const Cards = () => {
  return (
    <>
    <Slide>
        <h1 id="abilities"><span>Skills</span></h1>
    </Slide>
      

      <SlideZero>
      <div className="cards">
        <div className="card card_1"><h2>HTML + <span>CSS</span> 📐</h2></div>
        <div className="card card_2"><h3></h3><h2> JavaScript + <span>React</span> ⚛️</h2></div>
        <div className="card card_3"><h2><span>Next</span>.js📡</h2></div>
      </div>
      </SlideZero>
    </>
  )
}

export default Cards