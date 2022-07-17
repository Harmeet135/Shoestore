
import About from './components/about/About';
import Shop from './components/shop/Shop';
import Explore from './components/explore/Explore';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Scroll from './components/scroll/Scroll';
import Show from './components/show/Show'
import './index.css'

const App = () => {
    return (
        <div className='whole'>

            <div className='left'>
                <Header />
                <Show />
                <Explore />
            </div>
            <Scroll />
            <div className='left'>
                <About />
                <Shop />

            </div>
            <Footer />


        </div>
    )
}

export default App

