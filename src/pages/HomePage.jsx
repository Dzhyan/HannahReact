import GreenBox from '../components/GreenBox.jsx';
import portrait from '../assets/images/portrait.jpg';
import { Outlet } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
  <>
    <Outlet context={{ topbox: null }} /> 
      <section className="home">
        <GreenBox to="/about" className="homebox">
            <img className="photo" src={portrait} />
        </GreenBox>
      </section>
    </>
  )
}

export default HomePage;
