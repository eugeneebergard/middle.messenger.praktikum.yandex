export type TFieldProps = {
  //field
  className?: string;
  //input
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  title?: string;
  autocomplete?: string;
  disabled?: string;
  required?: string;
  //events
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onInput?: () => void;
  events?: Record<string, unknown>
  style?: string;
  //texts
  textLabel: string;
  textError?: string
};
