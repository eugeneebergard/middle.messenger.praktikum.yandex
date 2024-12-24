import { Block } from '@/core/Block';
import { TErrorMessageProps } from './errorMessage.types.ts';
import errorMessageTmpl from './errorMessage.hbs?raw';
import './errorMessage.scss';

export class ErrorMessage extends Block<TErrorMessageProps> {
  constructor(props: TErrorMessageProps) {
    super({ ...props });
  }

  render() {
    return this.compile(errorMessageTmpl, this.props);
  }
}
