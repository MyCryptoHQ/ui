// Same as `@types/rebass__forms` but updated to work with styled-components
declare module '@rebass/forms/styled-components' {
  // Type definitions for @rebass/forms 4.0
  // Project: https://github.com/rebassjs/rebass#readme
  // Definitions by: zinozzino <https://github.com/zinozzino>
  //                 trumanshuck <https://github.com/trumanshuck>
  //                 Eddie Cooro <https://github.com/Eddie-CooRo>
  // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
  // TypeScript Version: 3.1

  import type React from 'react';
  import type { BaseProps, SxProps } from 'rebass';
  import type StyledSystem from 'styled-system';

  export {};

  type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

  interface BoxKnownProps
    extends BaseProps,
      StyledSystem.SpaceProps,
      StyledSystem.LayoutProps,
      StyledSystem.FontSizeProps,
      StyledSystem.FontWeightProps,
      StyledSystem.ColorProps,
      StyledSystem.FlexProps,
      StyledSystem.OrderProps,
      StyledSystem.AlignSelfProps,
      SxProps {
    variant?: StyledSystem.ResponsiveValue<string>;
    tx?: string;
  }

  interface LabelKnownProps
    extends BoxKnownProps,
      StyledSystem.FlexWrapProps,
      StyledSystem.FlexDirectionProps,
      StyledSystem.AlignItemsProps,
      StyledSystem.JustifyContentProps {}

  export interface LabelProps
    extends LabelKnownProps,
      Omit<React.LabelHTMLAttributes<HTMLLabelElement>, keyof LabelKnownProps> {}

  export const Label: React.ComponentType<LabelProps>;

  export interface InputProps
    extends BoxKnownProps,
      Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BoxKnownProps> {}

  export const Input: React.ComponentType<InputProps>;

  export interface SelectProps
    extends BoxKnownProps,
      Omit<React.SelectHTMLAttributes<HTMLSelectElement>, keyof BoxKnownProps> {}

  export const Select: React.ComponentType<SelectProps>;

  export interface TextareaProps
    extends BoxKnownProps,
      Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, keyof BoxKnownProps> {}

  export const Textarea: React.ComponentType<TextareaProps>;

  export interface RadioProps
    extends BoxKnownProps,
      Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BoxKnownProps> {}

  export const Radio: React.ComponentType<RadioProps>;

  export interface SliderProps
    extends BoxKnownProps,
      Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BoxKnownProps> {}

  export const Slider: React.ComponentType<SliderProps>;

  export interface CheckboxProps
    extends BoxKnownProps,
      Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BoxKnownProps> {}

  export const Checkbox: React.ComponentType<CheckboxProps>;

  export interface SwitchProps
    extends BoxKnownProps,
      Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BoxKnownProps> {
    checked?: boolean;
  }

  export const Switch: React.ComponentType<SwitchProps>;
}
