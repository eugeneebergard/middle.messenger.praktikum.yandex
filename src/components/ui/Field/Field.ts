import { Block } from '@/core/Block';
import { TProps } from './field.types.ts';
import errorMessageTmpl from './field.hbs?raw';
import './field.scss';

export class Field extends Block<TProps> {
  constructor(props: TProps) {
    super({ ...props });
  }

  render() {
    return this.compile(errorMessageTmpl, this.props);
  }
}
