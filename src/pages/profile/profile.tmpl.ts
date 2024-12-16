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
                        <input class="input input_email disable" name="email" disabled value="{{ userData.email }}">
                    </div>
    
                    <div class="field">
                        <label class="label label_login" for="login">Логин</label>
                        <input class="input input_login disable" name="login" disabled value="{{ userData.login }}">
                    </div>
    
                    <div class="field">
                        <label class="label label_first-name" for="first_name">Имя</label>
                        <input class="input input_first-name disable" name="first_name" disabled value="{{ userData.first_name }}">
                    </div>
    
                    <div class="field">
                        <label class="label label_second_name" for="second_name">Фамилия</label>
                        <input class="input input_second_name disable" name="second_name" disabled value="{{ userData.second_name }}">
                    </div>
    
                    <div class="field">
                        <label class="label label_nickname" for="display_name">Никнейм</label>
                        <input class="input input_nickname disable" name="display_name" disabled value="{{ userData.nickname }}">
                    </div>
    
                    <div class="field">
                        <label class="label label_phone" for="phone">Номер телефона</label>
                        <input class="input input_phone disable" name="phone" type="number" disabled value="{{ userData.phone }}">
                    </div>
                  </div>

                  {{{Button type="submit primary" style="submit hidden" text=buttonText }}}
              </form>
              
              <div class="controls">
                  {{{Button style="edit-info primary-link" text="Изменить данные" }}}
                  {{{Button style="edit-password primary-link" text="Изменить пароль" }}}
                  {{{Button style="logout danger_link" text="Выйти" }}}
              </div>
              
              <form class="password-form hidden">
                  <div class="field">
                      <label class="label label_old-password" for="oldPassword">Старый пароль</label>
                      <input class="input input_old-password" name="oldPassword" type="password">
                  </div>
  
                  <div class="field">
                      <label class="label label_password" for="password">Новый пароль</label>
                      <input class="input input_password" name="password" type="password">
                  </div>
  
                  <div class="field">
                      <label class="label label_new-password" for="newPassword">Новый пароль (ещё раз)</label>
                      <input class="input input_new-password" name="newPassword" type="password">
                  </div>

                  {{{Button type="submit" style="submit primary" text=buttonText }}}
              </form>
          </div>
        </div>
    </main>
`;
