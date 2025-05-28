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
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => onSectionSelect(section.id)}
              className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
            >
              {section.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSections;
