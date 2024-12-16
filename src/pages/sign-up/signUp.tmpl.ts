// language=hbs
export const signUpTmpl = `
  <main class="sign-up">
    <div class="container">
      <h1 class="title">Регистрация</h1>
      <form class="form">
        <div class="field">
          {{{Label name="email" text="Электронная почта" }}}
          {{{Input name="email" type="email" }}}
          <span class="error hidden">например ошибка</span>
        </div>
          
        <div class="grid-container">
          <div class="field">
            {{{Label name="first_name" text="Имя" }}}
            {{{Input name="first_name" }}}
            <span class="error hidden">например ошибка</span>
          </div>

          <div class="field">
            {{{Label name="second_name" text="Фамилия" }}}
            {{{Input name="second_name" }}}
            <span class="error hidden">например ошибка</span>
          </div>

          <div class="field">
            {{{Label name="login" text="Логин" }}}
            {{{Input name="login" }}}
            <span class="error hidden">например ошибка</span>
          </div>

          <div class="field">
            {{{Label name="phone" text="Номер телефона" }}}
            {{{Input name="phone" type="number" }}}
            <span class="error hidden">например ошибка</span>
          </div>

          <div class="field">
            {{{Label name="password" text="Пароль" }}}
            {{{Input name="password" type="password" autocomplete="on" }}}
            <span class="error hidden">например ошибка</span>
          </div>

          <div class="field">
            {{{Label name="repeatPassword" text="Повторите пароль" }}}
            {{{Input name="repeatPassword" type="password" autocomplete="on" }}}
            <span class="error hidden">например ошибка</span>
          </div>
        </div>
          
        {{{Button type="submit" style="primary" text="Зарегестрироваться" }}}
      </form>
      <a class="link" href="/sign-in">Войти</a>
    </div>
  </main>
`;
