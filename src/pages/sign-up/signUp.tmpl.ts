export const template = `
    <main class="signIn">
        <div class="container">
          <h1 class="title">Регистрация</h1>
          <form class="form">
            <div class="field">
              <label class="label label_email" for="email">Почта</label>
              <input class="input input_email" type="email" name="email">
            </div>
            
            <div class="field">
              <label class="label label_login" for="login">Логин</label>
              <input class="input input_login" name="login">
            </div>
            
            <div class="field">
              <label class="label label_first-name" for="first_name">Имя</label>
              <input class="input input_first-name" name="first_name">
            </div>
            
            <div class="field">
              <label class="label label_second_name" for="second_name">Фамилия</label>
              <input class="input input_second_name" name="second_name">
            </div>
            
            <div class="field">
              <label class="label label_phone" for="phone">Телефон</label>
              <input class="input input_phone" name="phone" type="number">
            </div>
            
            <div class="field">
              <label class="label label_password" for="password">Пароль</label>
              <input class="input input_password" name="password" type="password">
            </div>
            
            <div class="field">
              <label class="label label_password-repeat" for="password-repeat">Пароль (ещё раз)</label>
              <input class="input input_password-repeat" name="password-repeat" type="password">
            </div>
            
            <button class="submit">{{ button }}</button>
          </form>
          <a class="link">Войти</a>
        </div>
    </main>
`
