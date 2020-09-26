import React, { useEffect, useState } from 'react';
import { useIntersection } from 'react-use';
import { Flex } from '@chakra-ui/core';

export const IntersectionContext = React.createContext({ inView: true });

type IntersectionObserverProps = { reset: boolean };

export const IntersectionObserver: React.FC<IntersectionObserverProps> = ({
  children,
  reset = false,
}) => {
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    } else if (reset) {
      return setInView(false);
    }
  }, [intersection, reset]);

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <Flex ref={intersectionRef}>{children}</Flex>
    </IntersectionContext.Provider>
  );
};
