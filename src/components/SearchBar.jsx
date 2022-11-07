import { useState } from 'react';

export const SearchBar = ({ buscar, setBuscar }) => {
  const handleSearch = (e) => {
    setBuscar(e.target.value);
  };
  return (
    <>
      <input
        placeholder="Java"
        onChange={handleSearch}
        value={buscar}
        className={`searchInput`}
      />
    </>
  );
};
