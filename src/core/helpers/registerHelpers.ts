import Handlebars from 'handlebars';

export function ifEquals() {
  Handlebars.registerHelper('ifEquals', function (
    this: any,
    arg1: unknown,
    arg2: unknown,
    options: Handlebars.HelperOptions,
  ) {
    return arg1 === arg2 ? options.fn(this) : options.inverse(this);
  });
}



