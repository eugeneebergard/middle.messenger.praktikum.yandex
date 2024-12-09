// language=hbs
export const signInTmpl = `
    <main class="sign-in">
        <div class="container">
            <h1 class="title">Вход</h1>
            <form class="form">
                <div class="field">
                    <label class="label label_login" for="login">Логин</label>
                    <input class="input input_login" name="login">
                    <span class="error hidden">например ошибка</span>
                </div>
                
                <div class="field">
                    <label class="label label_password" for="password">Пароль</label>
                    <input class="input input_password" name="password" type="password">
                    <span class="error hidden">например ошибка</span>
                </div>
                
                <button class="button">{{ buttonText }}</button>
            </form>
            <a class="link" href="/sign-up">Зарегистрироваться</a>
        </div>
    </main>
`;
