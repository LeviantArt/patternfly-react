import { HTMLProps, FormEvent, ReactNode } from 'react';

export const SelectVariant: {
  single: 'single';
  checkbox: 'checkbox';
};

export interface SelectProps extends HTMLProps<HTMLOptionElement> {
  isExpanded?: boolean;
  isGrouped?: boolean;
  onToggle(value: boolean): void;
  placeholderText?: string | ReactNode;
  selections?: string | Array<string>;
  variant?: string;
  width?: string | number;
  ariaLabelledBy?: string;
}

declare const Select: React.FunctionComponent<SelectProps>;

export default Select;
