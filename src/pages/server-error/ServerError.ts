import { Block } from '@/classes/Block';
import { serverErrorTmpl } from './serverError.tmpl';
import { serverErrorReq } from '@/constants/mock'

type TProps = Record<string, unknown>;
export class ServerError extends Block<TProps> {
  constructor(props: TProps) {
    super('main', { ...props, serverErrorReq });
  }

  public render(): DocumentFragment {
    return this.compile(serverErrorTmpl, this.props);
  }
}
