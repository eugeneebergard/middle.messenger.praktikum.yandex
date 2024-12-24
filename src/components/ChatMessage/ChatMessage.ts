import { Block } from '@/core/Block';
import { TChatMessageProps } from './chatMessage.types.ts';
import chatMessageTmpl from './chatMessage.hbs?raw';
import './chatMessage.scss';

export class ChatMessage extends Block<TChatMessageProps> {
  constructor(props: TChatMessageProps) {
    super({ ...props });
  }

  render() {
    return this.compile(chatMessageTmpl, this.props);
  }
}
