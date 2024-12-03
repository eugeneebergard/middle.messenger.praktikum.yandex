// language=hbs
export const chatTmpl = `
    <main class="chat">
        <div class="menu">
            <div class="menu-header">
                <div class="link-container">
                    <a class="link" href="/profile">Профиль</a>
                </div>
                <div class="search-container">
                  <input class="search" placeholder="Поиск">
                </div>
            </div>
            <ul class="chat-list">
                {{#each chats}}
                    <li class="chat-list-item">
                        <div class="avatar-container">
                            <img 
                              class="avatar" 
                              alt="avatar"
                              src="{{#if this.avatar }}{{ this.avatar }}{{else }}/images/empty-avatar.png{{/if }}">
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
                    <img
                      class="avatar"
                      alt="avatar"
                      src="{{#if currentChat.companion.avatar }}{{ this.companion.avatar }}{{else }}/images/empty-avatar.png{{/if }}">
                    <h4 class="name">{{ currentChat.companion.name }}</h4>
                </div>
                <button class="options" title="Действия"></button>
            </div>
            <div class="chat-history"></div>
            <form class="chat-form">
                <button class="attach" title="Прикрепить"></button>
                <input class="input" name="message" placeholder="Введите сообщение">
                <button class="send" title="Отправить"></button>
            </form>
        </div>
    </main>
`
