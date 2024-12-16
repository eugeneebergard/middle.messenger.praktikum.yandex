// language=hbs
export const serverErrorTmpl = `
    <main class="server-error">
        <div class="container">
          <h1 class="title">{{ serverErrorReq.status }}</h1>
          <p class="description">Мы уже фиксим</p>
          <a class="link" href="/">Назад к чатам</a>
        </div>
    </main>
`;
