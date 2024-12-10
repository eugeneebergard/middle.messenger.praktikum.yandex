// language=hbs
export const template = `
    <main class="sign-up">
        <div class="container">
          <h1 class="title">Регистрация</h1>
          <form class="form">
            <div class="field">
              <label class="label label_email" for="email">Электронная почта</label>
              <input class="input input_email" type="email" name="email">
              <span class="error hidden">например ошибка</span>
            </div>
              
            <div class="grid-container">
                <div class="field">
                    <label class="label label_first-name" for="first_name">Имя</label>
                    <input class="input input_first-name" name="first_name">
                    <span class="error hidden">например ошибка</span>
                </div>
  
                <div class="field">
                    <label class="label label_second_name" for="second_name">Фамилия</label>
                    <input class="input input_second_name" name="second_name">
                    <span class="error hidden">например ошибка</span>
                </div>

                <div class="field">
                    <label class="label label_login" for="login">Логин</label>
                    <input class="input input_login" name="login">
                    <span class="error hidden">например ошибка</span>
                </div>
  
                <div class="field">
                    <label class="label label_phone" for="phone">Номер телефона</label>
                    <input class="input input_phone" name="phone" type="number">
                    <span class="error hidden">например ошибка</span>
                </div>
  
                <div class="field">
                    <label class="label label_password" for="password">Пароль</label>
                    <input class="input input_password" name="password" type="password" autocomplete="on">
                    <span class="error hidden">например ошибка</span>
                </div>
  
                <div class="field">
                    <label class="label label_password-repeat" for="password-repeat">Повторите пароль</label>
                    <input class="input input_password-repeat" name="password-repeat" type="password" autocomplete="on">
                    <span class="error hidden">например ошибка</span>
                </div>
            </div>
              
            <button class="button">{{ buttonText }}</button>
          </form>
          <a class="link" href="/sign-in">Войти</a>
        </div>
    </main>
`;
