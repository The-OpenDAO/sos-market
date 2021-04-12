import { useContext, useState, useEffect } from 'react';

import { ViewportContext } from 'contexts/viewport';

const mobileBreakpoint = 758;

function useViewport() {
  const { width, height } = useContext(ViewportContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width <= mobileBreakpoint) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width, setIsMobile]);

  return { width, height, isMobile };
}

export default useViewport;
