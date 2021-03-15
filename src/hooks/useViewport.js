import React from 'react';

import { ViewportContext } from 'contexts/viewport';

function useViewport() {
  const { width, height } = React.useContext(ViewportContext);

  return { width, height };
}

export default useViewport;
