import type { FunctionComponent, ReactNode } from 'react';
import { useEffect, useState } from 'react';

import type { FlexProps } from '../atoms';
import { Box, Flex, Heading, Image, SubHeading } from '../atoms';

export interface CarouselElement {
  title: string;
  text: ReactNode;
  icon: string;
}

export interface CarouselProps {
  title: string;
  inverted?: boolean;
  elements: CarouselElement[];

  /**
   * The interval between switching elements. Set to 0 to disable.
   */
  interval?: number;
}

interface CarouselHeadingProps {
  title: string;
  index: number;
  isActive: boolean;
  onClick?(index: number): void;
}

const CarouselHeading: FunctionComponent<CarouselHeadingProps> = ({
  title,
  index,
  isActive,
  onClick
}) => {
  const handleClick = () => onClick?.(index);

  return (
    <SubHeading
      key={title}
      onClick={handleClick}
      flex="0 0 auto"
      fontSize={['3', null, '4']}
      color={isActive ? 'carousel.active' : 'text.discrete'}
      my="3"
      mr="4"
      lineHeight="150%"
      sx={{
        '&:first-child': {
          ml: ['4', null, 0]
        },
        '&:last-child': {
          mr: ['4', null, 0]
        },
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        borderBottom: '2px solid',
        borderBottomColor: isActive ? 'carousel.active' : 'transparent'
      }}>
      {title}
    </SubHeading>
  );
};

export const Carousel: FunctionComponent<CarouselProps & FlexProps> = ({
  title,
  elements,
  inverted = false,
  interval = 7500,
  ...props
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (interval > 0) {
      const timeout = setTimeout(() => {
        if (elements.length - 1 > index) {
          return setIndex((state) => state + 1);
        }

        setIndex(0);
      }, interval);

      return () => clearTimeout(timeout);
    }
  }, [index, interval]);

  const selected = elements[index];

  return (
    <Flex
      flexDirection={{ _: 'column', md: inverted ? 'row-reverse' : 'row' }}
      alignItems="center"
      justifyContent="center"
      {...props}>
      <Flex
        alignItems="flex-start"
        flexDirection="column"
        mr={{ _: 0, sm: inverted ? '0' : '4' }}
        ml={{ _: 0, sm: inverted ? '4' : '0' }}
        width={{ _: '100%', sm: '600px' }}>
        <Heading fontSize={{ _: '4', sm: '5' }} px={{ _: '4', sm: 0 }}>
          {title}
        </Heading>
        <Flex
          flexDirection="row"
          flexWrap="nowrap"
          alignItems="center"
          justifyContent={{ _: 'flex-start', sm: 'center', md: 'flex-start' }}
          overflowX={{ _: 'auto', sm: 'visible' }}
          overflowY="hidden"
          width="100%"
          sx={{
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}>
          {elements.map((el, current) => (
            <CarouselHeading
              key={el.title}
              title={el.title}
              index={current}
              isActive={current === index}
              onClick={setIndex}
            />
          ))}
        </Flex>

        <Box
          display={{ _: 'none', md: 'block' }}
          height={{ _: 'auto', sm: '70px' }}
          px={{ _: '4', sm: 0 }}>
          {selected.text}
        </Box>
      </Flex>
      <Flex
        width={{ _: '247px', sm: '400px' }}
        height={{ _: '247px', sm: '400px' }}
        my={{ _: '5', md: 0 }}>
        <Image src={selected.icon} width="100%" />
      </Flex>
      <Box
        display={{ _: 'block', md: 'none' }}
        height={{ _: 'auto', sm: '70px' }}
        px={{ _: '4', sm: 0 }}>
        {selected.text}
      </Box>
    </Flex>
  );
};
