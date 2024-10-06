import React,{useState} from 'react'
import "./Hero.css"

const images = [
  'https://images.unsplash.com/photo-1655394009590-c21e51af2e27?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1655394009590-c21e51af2e27?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1655394009590-c21e51af2e27?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1655394009590-c21e51af2e27?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // Dodaj ostale linkove slika ovde
];

const tags = ['čajevi,', 'tinkture,', 'knjige,', 'biljni suplementi'];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState(tags[0]);

  const handleTagClick = (index) => {
    setCurrentIndex(index);
    setSelectedTag(tags[index]);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='heroGlavniKontejner'>
      <div className='leviKontejner'>
        <div className="tekst">
          {tags.map((tag, index) => (
            <p
              key={index}
              className={selectedTag === tag ? 'selected' : ''}
              onClick={() => handleTagClick(index)}
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="kursor">
          <div className="levaStrelica" onClick={handlePrevClick}>←</div>
          <div className="desnaStrelica" onClick={handleNextClick}>→</div>
          <hr className="linijaDoSlika" />
        </div>
      </div>
      <div className='desniKontejner'>
        <div className="slajderSlika">
          <img src={images[currentIndex]} alt="Slajder slika" />
          <div className="dugneInfo">
            {/* Dodaj dugmad ili informacije ovde */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;