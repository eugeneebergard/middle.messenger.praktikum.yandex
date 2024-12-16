// language=hbs
export const signUpTmpl = `
  <main class="sign-up">
    <div class="container">
      <h1 class="title">Регистрация</h1>
      <form class="form">
        <div class="field">
          <label class="label label_email" for="email">Электронная почта</label>
          {{{Input name="email" type="email" }}}
          <span class="error hidden">например ошибка</span>
        </div>
          
        <div class="grid-container">
          <div class="field">
              <label class="label label_first-name" for="first_name">Имя</label>
              {{{Input name="first_name" }}}
              <span class="error hidden">например ошибка</span>
          </div>

          <div class="field">
              <label class="label label_second_name" for="second_name">Фамилия</label>
              {{{Input name="second_name" }}}
              <span class="error hidden">например ошибка</span>
          </div>

          <div class="field">
              <label class="label label_login" for="login">Логин</label>
              {{{Input name="login" }}}
              <span class="error hidden">например ошибка</span>
          </div>

          <div class="field">
              <label class="label label_phone" for="phone">Номер телефона</label>
              {{{Input name="phone" type="number" }}}
              <span class="error hidden">например ошибка</span>
          </div>

          <div class="field">
              <label class="label label_password" for="password">Пароль</label>
              {{{Input name="password" type="password" autocomplete="on" }}}
              <span class="error hidden">например ошибка</span>
          </div>

          <div class="field">
              <label class="label label_password-repeat" for="password-repeat">Повторите пароль</label>
              {{{Input name="password-repeat" type="password" autocomplete="on" }}}
              <span class="error hidden">например ошибка</span>
          </div>
        </div>
          
        {{{Button type="submit" style="primary" text="Зарегестрироваться" }}}
      </form>
      <a class="link" href="/sign-in">Войти</a>
    </div>
  </main>
`;
