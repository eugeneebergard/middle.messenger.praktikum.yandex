// language=hbs
export const buttonTmpl = `
    <button 
      {{#if type}}type="{{type}}" {{/if}}
      {{#if title}}title="{{title}}" {{/if}}
      class="button {{style}}"
    >{{text}}</button>
`;
