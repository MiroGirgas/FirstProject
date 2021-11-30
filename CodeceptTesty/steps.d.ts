/// <reference types='codeceptjs' />
type GoogleHomePage = typeof import('./pages/GoogleHomePage.js');
type GoogleImagesPage = typeof import('./pages/GoogleImagesPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, GoogleHomePage: GoogleHomePage, GoogleImagesPage: GoogleImagesPage }
  interface Methods extends Playwright {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
