import React from 'react'

const intro = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <div>
            <div className='fisherman-icon'>
                <object type="image/svg+xml" data="/icons/Fisherman (2).svg">svg-animation</object>
            </div>
          <header className="intro-header">
            Will Parrish
          </header>
        </div>
        <div className="intro-subheader">
          <a href="https://github.com/willptci" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/icons/Github-Logo.svg" alt="GitHub" className="social-icon-github" />
              willptci
          </a>
          <a href="https://www.linkedin.com/in/will-m-parrish/" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="social-icon-linkedin" />
            will-m-parrish
          </a>
        </div>
        <div className="intro-description">
            <p>
              3rd Year Computer Science Student at
            </p>
            <img 
            src="/icons/GTBlackLogo.png"
            alt="Georgia Tech" 
            className="GT-logo"
            />
        </div>
        <div className="arrow-down-container">
          <p className="see-projects"> See Projects</p>
          <img src="/icons/black-down-arrow.svg" alt="arrow" className="arrow-down" />
        </div>
      </div>
    </section>
  )
}

export default intro