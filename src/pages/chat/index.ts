import Handlebars from 'handlebars';
import './chat.sass';
import { chatTmpl } from './chat.tmpl'

export const chat = () => Handlebars.compile(chatTmpl)({
  chats: [
    {
      name: 'Михал Палыч',
      avatar: '',
      last_message: 'Ну как там с деньгами?',
      time: '03:22',
      new: false,
    },
    {
      name: 'Чилловый парень',
      avatar: '',
      last_message: 'Отдыхаю',
      time: '14:88',
      new: false,
    },
    {
      name: 'Дядя прокурор',
      avatar: '',
      last_message: 'Уже купил stalker 2?',
      time: '02:28',
      new: false,
    },
    {
      name: 'Ив Геймо',
      avatar: '',
      last_message: 'Как тебе новый ассасин?',
      time: '12:12',
      new: false,
    },
  ],
  currentChat: {
    companion: {
      name: 'Евгений',
      avatar: '',
    },
    history: []
  }
});
