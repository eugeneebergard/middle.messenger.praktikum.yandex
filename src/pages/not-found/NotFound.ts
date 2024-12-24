import { Block } from '@/core/Block';
import notFoundTmpl from './notFound.hbs?raw';

type TNotFoundProps = Record<string, unknown>;
export class NotFound extends Block<TNotFoundProps> {
  constructor(props: TNotFoundProps) {
    super({ ...props });
  }

  public render(): DocumentFragment {
    return this.compile(notFoundTmpl, this.props);
  }
}
