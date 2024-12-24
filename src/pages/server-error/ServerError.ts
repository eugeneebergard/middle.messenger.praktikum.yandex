import { Block } from '@/core/Block';
import serverErrorTmpl from './serverError.hbs?raw';
import { serverErrorReq } from '@/constants/mock';

type TServerErrorProps = Record<string, unknown>;
export class ServerError extends Block<TServerErrorProps> {
  constructor(props: TServerErrorProps) {
    super({ ...props, serverErrorReq });
  }

  public render(): DocumentFragment {
    return this.compile(serverErrorTmpl, this.props);
  }
}
