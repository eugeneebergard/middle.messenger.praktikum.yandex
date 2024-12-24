import { Block } from '@/core/Block';
import chatTmpl from './chat.hbs?raw';
import { chatData } from '@/constants/mock';
import { currentChatData } from '@/constants/mock';

type TProps = Record<string, unknown>;
export class Chat extends Block<TProps> {
  constructor(props: TProps) {
    super({ ...props, chatData, currentChatData });
  }

  public render(): DocumentFragment {
    return this.compile(chatTmpl, this.props);
  }
}
