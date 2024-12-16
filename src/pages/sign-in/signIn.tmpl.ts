// language=hbs
export const signInTmpl = `
    <main class="sign-in">
        <div class="container">
            <h1 class="title">Вход</h1>
            <form class="form">
                <div class="field">
                    {{{Label name="login" text="Логин" }}}
                    {{{Input name="login" }}}
                    <span class="error hidden">например ошибка</span>
                </div>
                
                <div class="field">
                    {{{Label name="password" text="Пароль" }}}
                    {{{Input name="password" type="password" autocomplete="on" }}}
                    <span class="error hidden">например ошибка</span>
                </div>
                
                {{{Button type="submit" style="primary" text="Авторизоваться" }}}
            </form>
            <a class="link" href="/sign-up">Зарегистрироваться</a>
        </div>
    </main>
`;
