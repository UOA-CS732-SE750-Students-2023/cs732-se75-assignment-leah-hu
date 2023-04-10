import React from 'react';

const SaveContext = React.createContext({
  savedItems: [],
  handleSaveItem: () => {},
});

export default SaveContext;
