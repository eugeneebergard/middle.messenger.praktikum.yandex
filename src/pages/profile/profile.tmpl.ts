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
                        <label class="label label_email" for="email">Электронная почта</label>
                        {{{Input name="email" type="email" value=userData.email style="disable" disabled="true" required="true" }}}
                    </div>
    
                    <div class="field">
                        <label class="label label_login" for="login">Логин</label>
                        {{{Input name="login" value=userData.login style="disable" disabled="true" required="true" }}}
                    </div>
    
                    <div class="field">
                        <label class="label label_first-name" for="first_name">Имя</label>
                        {{{Input name="first_name" value=userData.first_name style="disable" disabled="true" required="true" }}}
                    </div>
    
                    <div class="field">
                        <label class="label label_second_name" for="second_name">Фамилия</label>
                        {{{Input name="second_name" value=userData.second_name style="disable" disabled="true" required="true" }}}
                    </div>
    
                    <div class="field">
                        <label class="label label_nickname" for="display_name">Никнейм</label>
                        {{{Input name="nickname" value=userData.nickname style="disable" disabled="true" }}}
                    </div>
    
                    <div class="field">
                        <label class="label label_phone" for="phone">Номер телефона</label>
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
                      <label class="label label_old-password" for="oldPassword">Старый пароль</label>
                      {{{Input name="oldPassword" type="password" value=userData.oldPassword required="true" }}}
                  </div>
  
                  <div class="field">
                      <label class="label label_password" for="password">Новый пароль</label>
                      {{{Input name="password" type="password" value=userData.password required="true" }}}
                  </div>
  
                  <div class="field">
                      <label class="label label_new-password" for="newPassword">Новый пароль (ещё раз)</label>
                      {{{Input name="new-password" type="password" value=userData.new-password required="true" }}}
                  </div>

                  {{{Button type="submit" style="submit primary" text="Сохранить" }}}
              </form>
          </div>
        </div>
    </main>
`;
