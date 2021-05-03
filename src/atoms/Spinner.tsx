import type { FunctionComponent } from 'react';
import styled, { keyframes, withTheme } from 'styled-components';
import type { SpaceProps } from 'styled-system';
import { space } from 'styled-system';

const rotate = keyframes`
   100% { transform: rotate(360deg)}
`;

const Svg = styled.svg<{ $size: number } & SpaceProps>`
  ${space}
  animation: ${rotate} 0.8s linear infinite;

  ${(p) => p.$size && `width: ${p.$size}em;`}
  ${(p) => p.$size && `height: ${p.$size}em;`}
`;

export interface SpinnerProps extends SpaceProps {
  size?: number;
  color?: string;
  theme: any;
}

const Spinner: FunctionComponent<SpinnerProps> = ({
  size = 1,
  color = 'spinner',
  theme,
  ...props
}) => {
  return (
    <Svg
      data-testid="spinner"
      viewBox="0 0 50 50"
      aria-busy="true"
      $size={size}
      color={color}
      {...props}>
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke={theme.colors[color] || color}
        strokeWidth="5"
        strokeDasharray="90, 150"
        strokeDashoffset={0}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default withTheme(Spinner);
