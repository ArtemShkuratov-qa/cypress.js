
describe('Проверка формы авторизации', function () {
   
   
    it('Позитивный кейс: авторизация с существующим логином и корректным паролем', function () {
         cy.visit('https://staya.dog/');
         cy.get('.header-bottom__right--link').click();
         cy.get('.auth-form > form > [type="email"]').type('artem_shkuratov@bk.ru');
         cy.get('.auth-form > form > [type="password"]').type('o8jqVe4NY7');
         cy.get('.auth-form__submit > .s-button__content').click();

         cy.contains("Мои заказы");
     })

     it('Негативный кейс: авторизация с существующим логином и некорректным паролем', function () {
        cy.reload();
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok > .s-button__content').click();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('artem_shkuratov@bk.ru');
        cy.get('.auth-form > form > [type="password"]').type('o8jqVe4NY7345');
        cy.get('.auth-form__submit > .s-button__content').click();

        cy.contains("Невозможно войти с предоставленными учетными данными.");
    })
 })
 