import { Block } from '@/core/Block';
import notFoundTmpl from './notFound.hbs?raw';

type TProps = Record<string, unknown>;
export class NotFound extends Block<TProps> {
  constructor(props: TProps) {
    super({ ...props });
  }

  public render(): DocumentFragment {
    return this.compile(notFoundTmpl, this.props);
  }
}
