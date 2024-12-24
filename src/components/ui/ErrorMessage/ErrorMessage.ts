import { Block } from '@/core/Block';
import { TProps } from './errorMessage.types.ts';
import errorMessageTmpl from './errorMessage.hbs?raw';
import './errorMessage.scss';

export class ErrorMessage extends Block<TProps> {
  constructor(props: TProps) {
    super({ ...props });
  }

  render() {
    return this.compile(errorMessageTmpl, this.props);
  }
}
