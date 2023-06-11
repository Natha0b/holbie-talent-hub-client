import { useState } from 'react';

export const useSelectedTechnologies = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const handleTechnologySelection = (selectedTechnology: string) => {
    if (!selectedTechnologies.includes(selectedTechnology)) {
      setSelectedTechnologies([...selectedTechnologies, selectedTechnology]);
    }
  };

  const handleRemoveTechnology = (technology: string) => {
    const updatedTechnologies = selectedTechnologies.filter((tech) => tech !== technology);
    setSelectedTechnologies(updatedTechnologies);
  };

  return { selectedTechnologies, handleTechnologySelection, handleRemoveTechnology };
};
