export type TProps = {
  name: string;
  style?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  autocomplete?: string;
  disabled?: string;
  required?: string;
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onInput?: () => void;
  events?: Record<string, unknown>
};
