"use client";
import React from 'react';
import styles from './TechCard.module.scss'
import { useSelectedTechnologies } from '$components/hooks/useSelectedTechnologies';

const TechCard = () => {
  const {
    selectStackIcons,
    setValueFilter,
    valueFilter,
    selectOne,
    selectActive,
    removeOne,
  } = useSelectedTechnologies();

  return (
    <section className={styles.form__tech}>
      <label htmlFor="">Technology</label>
      <div className={styles["selected-technologies"]}>
        {selectActive().map(({Icon, color, name}, key) => (
            <Icon
              style={{'--color': color} as React.CSSProperties}
              key={key}
              type="button"
                onClick={removeOne(name)}
            />
        ))}
      </div>
        <input
          type="text"
          // list="technologies"
          name=""
          id=""
          value={valueFilter}
          onChange={(e) => setValueFilter(e.target.value)}
          // onChange={(e) => handleTechnologySelection(e.target.value)}
        />
        <nav className={styles['dropdown__container-list']} >
          {
            selectStackIcons().map(({Icon, name, color}, index) => (
              <button
                key={index}
                type='button'
                style={{'--color': color} as React.CSSProperties}
                className={styles['dropdown__icon']}
                onClick={selectOne(name)}
              >
                <span>{name}</span>
                <Icon />
              </button>
            ))
          }

        </nav>
    </section >
  );
};

export { TechCard };

/*
import React, { useState } from 'react';
import { technologies } from '$company/(pages)/find/profile/profile.data'
import styles from './TechCard.module.scss'

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