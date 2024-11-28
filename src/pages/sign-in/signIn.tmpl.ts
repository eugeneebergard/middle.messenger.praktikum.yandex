// language=hbs
export const signInTmpl = `
    <main class="signIn">
        <div class="container">
          <h1 class="title">Вход</h1>
          <form class="form">
            <div class="field">
              <label class="label label_login" for="login">Логин</label>
              <input class="input input_login" name="login">
            </div>
            
            <div class="field">
              <label class="label label_password" for="password">Пароль</label>
              <input class="input input_password" name="password" type="password">
            </div>
            
            <button>{{ buttonText }}</button>
          </form>
          <a class="link">Нет аккаунта?</a>
        </div>
    </main>
`
