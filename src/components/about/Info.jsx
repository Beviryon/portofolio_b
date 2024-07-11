import React from 'react'

const styles = {
  card: {
    backgroundColor: 'var(--background-color)',
    color: 'var(--text-color)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};
const Info = () => {
  return (
    <div className="about_info grid" style={styles.card}>
        <div className="about_box">
            <i class='bx bx-award about_icon'></i>

            <h3 className="about_title">Experience</h3>
            <span className="about_subtitle">1 d'experience</span>
        </div>

        <div className="about_box">
            <i class='bx bx-briefcase-alt about_icon'></i>

            <h3 className="about_title">Completed</h3>
            <span className="about_subtitle">2 + Projects</span>
        </div>

        <div className="about_box">
            <i class='bx bx-support about_icon'></i>

            <h3 className="about_title">Support</h3>
            <span className="about_subtitle">Online 1</span>
        </div>   
    </div>
  )
}

export default Info
