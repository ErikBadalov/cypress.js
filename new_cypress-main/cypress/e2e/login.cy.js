import * as data from "/Users/luka/Downloads/new_cypress-main/cypress/helpers/default_data.json"
import * as main_page from "/Users/luka/Downloads/new_cypress-main/cypress/locators/main_page.json"
import * as result_page from "/Users/luka/Downloads/new_cypress-main/cypress/locators/result_page.json"
import * as recovery_password from "/Users/luka/Downloads/new_cypress-main/cypress/locators/recovery_password_page.json"

describe('Проверка авторизации', function () {
    
    beforeEach('Начало теста', function () {
        cy.visit('https://login.qa.studio'); //Зашли на сайт
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки восст.пароль
          });

    afterEach('Конец теста', function () {
        cy.get(result_page.close).should('be.visible'); //Есть крестик и он виден для пользователя
           });

    it('Позитивный кейс авторизации', function () {
         cy.get(main_page.email).type(data.login); //Ввели верный логин
         cy.get(main_page.password).type(data.password); //Ввели верный пароль
         cy.get(main_page.login_button).click(); //Нажал Войти
         cy.get(result_page.title).contains('Авторизация прошла успешно'); //Проверяю, что после авторизации вижу текст
         cy.get(result_page.title).should('be.visible'); //Текст виден пользователю

     })

 //Найти поле логин и ввести правильный логин
 //Найти поле пароль и ввести правильный пароль
 //Найти кнопку Войти и нажать на нее
 //Проверить нужный текст и наличие кнопки крестик


     it('Восстановление пароля', function () {
        cy.get(main_page.fogot_pass_btn).click(); //Нажимаю "Забыли пароль"
        cy.get(recovery_password.email).type('sjkdfhsk@mail.ru'); //Ввели любой email
        cy.get(recovery_password.send_button).click(); //Нажал Получить код
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); //Проверяю, что вижу текст
        cy.get(result_page.title).should('be.visible'); //Текст виден пользователю
        
    })
 
 //Найти кнопку Забыли пароль и нажать на нее
 //Найти поле E-mail и ввести любой e-mail
 //Найти кнопку Получить код и нажать на нее
 //Проверить нужный текст и наличие кнопки крестик

 it('Негативный кейс авторизации', function () {
    cy.get(main_page.email).type(data.login); //Ввели верный логин
    cy.get(main_page.password).type('USER_PASSWORD'); //Ввели неверный пароль
    cy.get(main_page.login_button).click(); //Нажал Войти
    cy.get(result_page.title).contains('Такого логина или пароля нет'); //Проверяю, что после авторизации вижу текст
    cy.get(result_page.title).should('be.visible'); //Текст виден пользователю

})

it('Негативный кейс авторизации №2', function () {
    cy.get(main_page.email).type('USER_LOGIN'); //Ввели неверный логин
    cy.get(main_page.password).type(data.password); //Ввели верный пароль
    cy.get(main_page.login_button).click(); //Нажал Войти
    cy.get(result_page.title).contains('Авторизация прошла успешно'); //Проверяю, что после авторизации вижу текст
    cy.get(result_page.title).should('be.visible'); //Текст виден пользователю

})

it('Негативный кейс валидации', function () {
    cy.get(main_page.email).type('USER_LOGIN'); //Ввели логин без @
    cy.get(main_page.password).type(data.password); //Ввели верный пароль
    cy.get(main_page.login_button).click(); //Нажал Войти
    cy.get(result_page.title).contains('Нужно исправить проблему валидации'); //Проверяю, что после авторизации вижу текст
    cy.get(result_page.title).should('be.visible'); //Текст виден пользователю

})

it('Строчные буквы в логине', function () {
    cy.get(main_page.email).type('USER_LOGIN'); //Ввели логин строчными буквами
    cy.get(main_page.password).type(data.password); //Ввели верный пароль
    cy.get(main_page.login_button).click(); //Нажал Войти
    cy.get(result_page.title).contains('Авторизация прошла успешно'); //Проверяю, что после авторизации вижу текст
    cy.get(result_page.title).should('be.visible'); //Текст виден пользователю

})
 }) 



 
