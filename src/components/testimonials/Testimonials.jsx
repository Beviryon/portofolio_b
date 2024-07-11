import React, { useState } from 'react';
import './testimonials.css';
import { Data } from './Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(Data.length / projectsPerPage));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + Math.ceil(Data.length / projectsPerPage)) % Math.ceil(Data.length / projectsPerPage));
  };

  const displayedProjects = Data.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

  return (
    <section className="testimonial_section" id="testimonials">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Mes Projets</span>

      <div className="testimonial_container">
        {displayedProjects.map(({ id, image, title, description, github }) => (
          <div className="testimonial_card" key={id}>
            <img src={image} alt={title} className="testimonial_img" />
            <div className="testimonial_content">
              <h3 className="testimonial_name">{title}</h3>
              <p className="testimonial_description">{description}</p>
              <a href={github} className="testimonial_github" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial_navigation">
        <button onClick={handlePrevPage}>Précédent</button>
        <button onClick={handleNextPage}>Suivant</button>
      </div>
    </section>
  );
};

export default Testimonials;
