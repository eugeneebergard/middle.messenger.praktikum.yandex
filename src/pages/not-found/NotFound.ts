import { Block } from '@/classes/Block';
import { notFoundTmpl } from './notFound.tmpl';

type TProps = Record<string, unknown>;
export class NotFound extends Block<TProps> {
  constructor(props: TProps) {
    super('main', { ...props });
  }

  public render(): DocumentFragment {
    return this.compile(notFoundTmpl, this.props);
  }
}
