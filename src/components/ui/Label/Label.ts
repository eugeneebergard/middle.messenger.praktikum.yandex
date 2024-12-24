import { Block } from '@/core/Block';
import { TLabelProps } from './label.types.ts';
import labelTmpl from './label.hbs?raw';
import './label.scss';

export class Label extends Block<TLabelProps> {
  constructor(props: TLabelProps) {
    super({ ...props });
  }

  render() {
    return this.compile(labelTmpl, this.props);
  }
}
