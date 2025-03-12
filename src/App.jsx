import { Description } from './components/Ui/Description/Description'
import { Skills } from './components/Layouts/Sections/Skills'
import { Footer } from './components/Layouts/Footer/Footer'
import { Home } from './components/Pages/Home/Home'

export const App = () => {

  return (
    <>
    <Home/>
    <Description/>
    <Skills/>
    <Footer/>
    </>
  )
}