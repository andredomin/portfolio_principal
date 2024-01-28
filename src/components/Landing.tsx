import {ScrollContainer} from "react-scroll-motion";
import Navbar from "./Navbar"
import Presentation from "./Presentation"
import Cards from "./Cards"
import Work from "./Work"
import About from "./About"
import Contact from './Contact'
const Landing = () => {
  return (
    <>
      <ScrollContainer>
        <Navbar />
        <Presentation />
        <Cards />
        <Work />
        <About />
        <Contact />
      </ScrollContainer>

    
    </>
  )
}

export default Landing