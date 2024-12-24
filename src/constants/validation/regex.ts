export const REGEX = {
  FIRST_NAME: /^[A-ZА-Я][a-zа-яA-ZА-Я-]*$/,
  LOGIN: /^(?!\d+$)[a-zA-Z0-9_-]+$/,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/,
  PASSWORD: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
  PHONE: /^\+?\d+$/,
};
