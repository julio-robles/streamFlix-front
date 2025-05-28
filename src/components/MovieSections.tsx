import React from 'react';

type Section = {
  id: string;
  name: string;
};

type MovieSectionsProps = {
  sections: Section[];
  onSectionSelect: (sectionId: string) => void;
};

const MovieSections: React.FC<MovieSectionsProps> = ({ sections, onSectionSelect }) => {
  return (
    <div className="movie-sections">
      <h2 className="text-xl font-bold mb-4">Secciones</h2>
      <div className="flex space-x-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionSelect(section.id)}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          >
            {section.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieSections;
