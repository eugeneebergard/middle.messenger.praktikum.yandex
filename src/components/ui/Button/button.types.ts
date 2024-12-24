export type TButtonProps = {
  text?: string;
  type?: string,
  style?: string,
  className?: string,
  onClick?: () => void;
  events?: Record<string, unknown>
};
