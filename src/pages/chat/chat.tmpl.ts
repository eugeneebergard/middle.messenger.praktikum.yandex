// language=hbs
export const chatTmpl = `
    <main class="chat">
        <div class="menu">
            <div class="menu-header">
                <div class="link-container">
                    <a class="link" href="/profile">Профиль</a>
                </div>
                <input class="search" placeholder="Поиск">
            </div>
            <ul class="chat-list">
                {{#each chats}}
                    <li class="chat-list-item">
                        <div class="avatar-container">
                            <img class="avatar" alt="avatar" src="#">
                        </div>
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
            <div class="chat-header">
                <div class="person-info">
                    <img class="avatar" src="#" alt="avatar">
                    <h4 class="name">{{ currentChat.companionName }}</h4>
                </div>
                <button class="options">опции</button>
            </div>
            <div class="chat-history"></div>
            <form class="chat-form">
                <button class="attach">Прикрепить</button>
                <input class="input" name="message" placeholder="Введите сообщение">
                <button class="send">Отправить</button>
            </form>
        </div>
    </main>
`
