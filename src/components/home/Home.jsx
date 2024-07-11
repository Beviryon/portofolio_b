import React from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const styles = {
  card: {
    backgroundColor: 'var(--background-color)',
    color: 'var(--text-color)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};
const Home = () => {
  return (
    <section className='home section' id='home' style={styles.card}>
        <div className="home_container container grid">
            <div className="home_content grid">
                <Social />

                <div className="home_img"></div>

                <Data />
            </div>

            <ScrollDown />
        </div>
    </section>
  )
}

export default Home