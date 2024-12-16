// language=hbs
export const buttonTmpl = `
    <button 
      {{#if type}}type="{{type}}"{{/if}} 
      class="button {{style}}"
    >{{text}}</button>
`;
