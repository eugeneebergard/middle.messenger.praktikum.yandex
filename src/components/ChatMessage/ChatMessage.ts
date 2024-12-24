import { Block } from '@/core/Block';
import chatMessageTmpl from './chatMessage.hbs?raw';
import './chatMessage.scss';

type TProps = {
  chatMessage: Record<string, unknown>;
};

export class ChatMessage extends Block<TProps> {
  constructor(props: TProps) {
    super({ ...props });
  }

  render() {
    return this.compile(chatMessageTmpl, this.props);
  }
}
