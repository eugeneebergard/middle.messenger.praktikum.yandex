// language=hbs
export const profileTmpl = `
    <main class="profile">
        <aside class="aside">
            <a class="back" href="/" title="Назад к чатам"></a>
        </aside>
        <div class="content">
          <div class="container">
              <div class="heading">
                  <img 
                    class="avatar" 
                    alt="avatar" 
                    src="{{#if userData.avatar }}{{ userData.avatar }}{{else }}/images/empty-avatar.png{{/if }}">
                  <input class="file-upload hidden" name="avatar" type="file" accept="image/*"/>
                  <h3 class="name-title">{{ userData.name }}</h3>
              </div>
  
              <form class="info-form">
                  <div class="grid-container">
                    <div class="field">
                        {{{Label name="email" text="Электронная почта" }}}
                        {{{Input name="email" type="email" value=userData.email style="disable" disabled="true" required="true" }}}
                    </div>
    
                    <div class="field">
                        {{{Label name="login" text="Логин" }}}
                        {{{Input name="login" value=userData.login style="disable" disabled="true" required="true" }}}
                    </div>
    
                    <div class="field">
                        {{{Label name="first_name" text="Имя" }}}
                        {{{Input name="first_name" value=userData.first_name style="disable" disabled="true" required="true" }}}
                    </div>
    
                    <div class="field">
                        {{{Label name="second_name" text="Фамилия" }}}
                        {{{Input name="second_name" value=userData.second_name style="disable" disabled="true" required="true" }}}
                    </div>
    
                    <div class="field">
                        {{{Label name="display_name" text="Никнейм" }}}
                        {{{Input name="display_name" value=userData.display_name style="disable" disabled="true" }}}
                    </div>
    
                    <div class="field">
                        {{{Label name="phone" text="Номер телефона" }}}
                        {{{Input name="phone" type="number" value=userData.phone style="disable" disabled="true" required="true" }}}
                    </div>
                  </div>

                  {{{Button type="submit primary" style="submit hidden" text="Сохранить" }}}
              </form>
              
              <div class="controls">
                  {{{Button style="edit-info primary-link" text="Изменить данные" }}}
                  {{{Button style="edit-password primary-link" text="Изменить пароль" }}}
                  {{{Button style="logout danger-link" text="Выйти" }}}
              </div>
              
              <form class="password-form hidden">
                  <div class="field">
                      {{{Label name="oldPassword" text="Пароль" }}}
                      {{{Input name="oldPassword" type="password" required="true" }}}
                  </div>
  
                  <div class="field">
                      {{{Label name="newPassword" text="Новый пароль" }}}
                      {{{Input name="newPassword" type="password" required="true" }}}
                  </div>
  
                  <div class="field">
                      {{{Label name="repeatPassword" text="Повторите пароль" }}}
                      {{{Input name="repeatPassword" type="password" required="true" }}}
                  </div>

                  {{{Button type="submit" style="submit primary" text="Сохранить" }}}
              </form>
          </div>
        </div>
    </main>
`;
