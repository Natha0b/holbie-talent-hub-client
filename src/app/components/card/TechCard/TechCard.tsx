import React, { useState } from 'react';
import { technologies } from '$company/(pages)/find/profile/profile.data'
import styles from './TechCard.module.css'
import { useSelectedTechnologies } from '$components/hooks/useSelectedTechnologies';

const TechCard = () => {
  const { selectedTechnologies, handleTechnologySelection, handleRemoveTechnology } =
    useSelectedTechnologies();

  return (
    <section className={styles.form__tech}>
      <label htmlFor="">Technology</label>
      <div className="selected-technologies">
        {selectedTechnologies.map((technology) => (
          <span key={technology} className="selected-technology">
            {technology}
            <button
              className="remove-technology"
              onClick={() => handleRemoveTechnology(technology)}
            >
              ✅
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        list="technologies"
        name=""
        id=""
        onChange={(e) => handleTechnologySelection(e.target.value)}
      />
      <datalist id="technologies">
        {technologies.map((technology) => (
          <option key={technology} value={technology} />
        ))}
      </datalist>
    </section>
  );
};

export { TechCard };

/*
import React, { useState } from 'react';
import { technologies } from '$company/(pages)/find/profile/profile.data'
import styles from './TechCard.module.css'

const TechCard = () => {
    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]); // Utilizamos un array de strings en lugar de un array de números
  
    const handleTechnologySelection = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedTechnology = event.target.value;
  
      if (!selectedTechnologies.includes(selectedTechnology)) {
        setSelectedTechnologies([...selectedTechnologies, selectedTechnology]);
      }
    };
  
    const handleRemoveTechnology = (technology: string) => {
      const updatedTechnologies = selectedTechnologies.filter((tech) => tech !== technology);
      setSelectedTechnologies(updatedTechnologies);
    };
  
    return (
      <section className={styles.form__tech}>
        <label htmlFor="">Technology</label>
        <div className="selected-technologies">
          {selectedTechnologies.map((technology) => (
            <span key={technology} className="selected-technology">
              {technology}
              <button
                className="remove-technology"
                onClick={() => handleRemoveTechnology(technology)}
              >
                ✅
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          list="technologies"
          name=""
          id=""
          onChange={handleTechnologySelection}
        />
        <datalist id="technologies">
          {technologies.map((technology) => (
            <option key={technology} value={technology} />
          ))}
        </datalist>
      </section>
    );
  };

export { TechCard };
*/