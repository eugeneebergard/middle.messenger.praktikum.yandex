import { Block } from '@/core/Block';
import { TFieldProps } from './field.types.ts';
import errorMessageTmpl from './field.hbs?raw';
import './field.scss';

export class Field extends Block<TFieldProps> {
  constructor(props: TFieldProps) {
    super({ ...props });
  }

  render() {
    return this.compile(errorMessageTmpl, this.props);
  }
}
