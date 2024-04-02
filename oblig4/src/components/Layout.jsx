import React, { useState } from 'react';

function Layout({ children }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    
    console.log(`Searching for ${searchTerm}`);
  };

  return (
  <>
    <div>
      {/* Søkefelt */}
      <input 
        type="text" 
        placeholder="Søk etter bøker" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Søk</button>
    </div>
    <div>
      {/* Opplisting av bøker */}
      {children}
    </div>
  </>
  );
}

export default Layout;