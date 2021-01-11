import React from 'react';

import Input from 'components/input';

function App() {
  return (
    <div className="App">
      <Input
        variant="error"
        name="Input de teste"
        label="Label"
        placeholder="placeholder"
        description="description"
      />
    </div>
  );
}

export default App;
