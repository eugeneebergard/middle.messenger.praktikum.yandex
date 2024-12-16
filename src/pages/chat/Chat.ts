import { Block } from '@/classes/Block';
import { chatTmpl } from './chat.tmpl';
import { chatData } from '@/constants/mock'

type TProps = Record<string, unknown>;
export class Chat extends Block<TProps> {
  constructor(props: TProps) {
    super('main', { ...props, chatData });
  }

  public render(): DocumentFragment {
    return this.compile(chatTmpl, this.props);
  }
}
