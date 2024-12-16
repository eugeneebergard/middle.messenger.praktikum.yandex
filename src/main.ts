import '@/style.scss';

import { SignIn } from '@/pages/sign-in';
import { SignUp } from '@/pages/sign-up';
import { Chat } from '@/pages/chat';
import { Profile } from '@/pages/profile';
import { ServerError } from '@/pages/server-error';
import { NotFound } from '@/pages/not-found';
import { renderRoot } from '@/core/helpers';
import { registerAllComponents } from '@/components';

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  const currentPage = () => {
    switch (path) {
      case '/': return new Chat({});
      case '/sign-in': return new SignIn({});
      case '/sign-up': return new SignUp({});
      case '/profile': return new Profile({});
      case '/server-error': return new ServerError({});
      default: return new NotFound({});
    }
  };

  registerAllComponents();
  renderRoot(currentPage());
});
