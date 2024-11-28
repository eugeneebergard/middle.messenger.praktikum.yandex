// language=hbs
export const chatTmpl = `
    <main class="chat">
        <div class="menu">
            <ul class="chat-list">
                {{#each chats}}
                    <li class="chat-list-item">
                        <img class="avatar" alt="avatar" src="#">
                        <div class="content">
                            <h3 class="name">{{ this.name }}</h3>
                            <p class="last-message">{{ this.last_message }}</p>
                        </div>
                        <div class="status">
                            <span class="time">{{ this.time }}</span>
                            <span class="label"></span>
                        </div>
                    </li>
                {{/each}}
            </ul>
        </div>
        <div class="chat-area">
            <form class="chat-form">
                <input class="message" name="message" placeholder="Введите сообщение">
                <button class="send-btn">Отправить</button>
            </form>
        </div>
    </main>
`
