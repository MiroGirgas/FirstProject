/// <reference types='codeceptjs' />
type GoogleHomePage = typeof import('./GoogleHomePage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, GoogleHomePage: GoogleHomePage }
  interface Methods extends Playwright {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
