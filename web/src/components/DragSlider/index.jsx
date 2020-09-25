import React, { useRef, useEffect, useState } from 'react';

import { useMotionValue, motion } from 'framer-motion';

import { IntersectionObserver } from '~/contexts/intersectionContext';
import AnimatedCard from '../Card/AnimatedCard/index';
import { Flex } from '@chakra-ui/core';

const DragSlider = ({
  children,
  bounceStiffness = 100,
  bounceDamping = 10,
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);

  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0);
  const [sliderConstraints, setSliderConstraints] = useState(0);

  useEffect(() => {
    const calcSliderChildrenWidth = () => {
      setSliderChildrenWidth(
        Array.from(ref.current.childNodes).reduce(
          (acc, node) => acc + node.clientWidth,
          0,
        ),
      );
    };

    calcSliderChildrenWidth();

    const calcSliderWidth = () => {
      setSliderWidth(ref.current.clientWidth);
    };

    calcSliderWidth();
    window.addEventListener('resize', calcSliderWidth);

    const calcSliderConstraints = () => {
      setSliderConstraints(sliderChildrenWidth - sliderWidth);
    };

    calcSliderConstraints();
    window.addEventListener('resize', calcSliderConstraints);
  }, [ref, sliderChildrenWidth, sliderWidth]);

  const Container = motion.custom(Flex);

  const SliderWrap = ({ children }) => {
    return (
      <Container
        as="main"
        w="100%"
        flexDirection="row"
        ref={ref}
        drag="x"
        initial={{ x: 0 }}
        style={{ x }}
        dragConstraints={{
          left: `${-sliderConstraints}`,
          right: 0,
        }}
        dragTransition={{ bounceStiffness, bounceDamping }}
      >
        {children}
      </Container>
    );
  };

  return (
    <SliderWrap>
      {React.Children.map(children, (child) => (
        <IntersectionObserver reset="true">
          <AnimatedCard>{React.cloneElement(child)}</AnimatedCard>
        </IntersectionObserver>
      ))}
    </SliderWrap>
  );
};

export default DragSlider;
