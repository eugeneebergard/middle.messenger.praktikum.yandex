import '@/styles/normalize.css'
import '@/style.sass'

import { signIn } from '@/pages/sign-in/'
import { signUp } from '@/pages/sign-up/'
import { chat } from '@/pages/chat/'
import { profile } from '@/pages/profile'
import { serverError } from '@/pages/server-error/'
import { notFound } from '@/pages/not-found/'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');
  const path = window.location.pathname
  const getTemplate = () => {
    switch (path) {
      case '/': return chat();
      case '/sign-in' : return signIn();
      case '/sign-up' : return signUp();
      case '/profile' : return profile();
      case '/server-error' : return serverError();
      default : return notFound();
    }
  }

  root!.innerHTML = getTemplate();
})
