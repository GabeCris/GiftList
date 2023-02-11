import React, { useState } from 'react';

import { FilterContext } from './FilterContext';

function FilterProvider({children}) {
    const [selected, setSelected] = useState('Todas');
 
  return (
    <FilterContext.Provider
      value={{
        selected,
        setSelected
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;