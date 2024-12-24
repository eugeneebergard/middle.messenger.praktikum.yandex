import { Block } from '@/core/Block';
import { TChatItemProps } from './chatItem.types.ts';
import chatItemTmpl from './chatItem.hbs?raw';
import './chatItem.scss';

export class ChatItem extends Block<TChatItemProps> {
  constructor(props: TChatItemProps) {
    super({ ...props });
  }

  render() {
    return this.compile(chatItemTmpl, this.props);
  }
}
