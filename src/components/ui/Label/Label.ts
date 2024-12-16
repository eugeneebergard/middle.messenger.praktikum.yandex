import { Block } from '@/core/Block';
import { TProps } from './label.types.ts';
import { labelTmpl } from './label.tmpl.ts';
import './label.scss';

export class Label extends Block<TProps> {
  constructor(props: TProps) {
    super({ ...props });
  }

  render() {
    return this.compile(labelTmpl, this.props);
  }
}
