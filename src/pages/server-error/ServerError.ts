import { Block } from '@/core/Block';
import serverErrorTmpl from './serverError.hbs?raw';
import { serverErrorReq } from '@/constants/mock';

type TProps = Record<string, unknown>;
export class ServerError extends Block<TProps> {
  constructor(props: TProps) {
    super({ ...props, serverErrorReq });
  }

  public render(): DocumentFragment {
    return this.compile(serverErrorTmpl, this.props);
  }
}
