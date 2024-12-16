// language=hbs
export const inputTmpl = `
  <input
    name="{{name}}"
    {{#if type}}type="{{type}}" {{/if}}
    {{#if value}}value="{{value}}" {{/if}}
    {{#if placeholder}}placeholder="{{placeholder}}" {{/if}}
    {{#if autocomplete}}autocomplete="on" {{/if}}
    {{#if disabled}}disabled="disabled" {{/if}}
    {{#if required}}required {{/if}}
    class="input {{style}}"
  >
`;