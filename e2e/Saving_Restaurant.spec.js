/* eslint-disable no-undef */
const assert = require('assert');

Feature('Saving Restaurant');

Before((I) => {
    I.amOnPage('/');
  });
  
  Scenario('Showing empty saved restaurant', (I) => {
    I.amOnPage('/#/favorites');
    I.see('There are no favorite restaurants yet', '#emptyData');
  });
  
  Scenario('Saving a restaurant', async (I) => {
    I.amOnPage('/');
  
    I.seeElement('#content');
    I.seeElement('restaurant-list');
    I.seeElement('restaurant-items a');
  
    const firstRestaurant = locate('restaurant-items a').first();
    const firstRestaurantName = await I.grabTextFrom(locate('restaurant-items .title').first());
  
    I.click(firstRestaurant);
  
    I.seeElement('#saveButton');
    I.click('#saveButton');
  
    I.amOnPage('/#/favorites');
    I.seeElement('restaurant-list');
    I.seeElement('restaurant-items');
  
    const savedRestaurantName = await I.grabTextFrom('restaurant-items .title');
  
    assert.strictEqual(firstRestaurantName, savedRestaurantName);
  });
  
  Scenario('Removing a restaurant', async (I) => {
    I.amOnPage('/');
  
    I.seeElement('#content');
    I.seeElement('restaurant-list');
    I.seeElement('restaurant-items a');
  
    const lastRestaurant = locate('restaurant-items a').last();
    const lastRestaurantName = await I.grabTextFrom(locate('restaurant-items .title').last());
  
    I.click(lastRestaurant);
  
    I.seeElement('#saveButton');
    I.click('#saveButton');
  
    I.amOnPage('/#/favorites');
    I.seeElement('restaurant-items');
  
    const savedRestaurantName = await I.grabTextFrom('restaurant-items .title');
    assert.strictEqual(lastRestaurantName, savedRestaurantName);
  
    const savedRestaurant = locate('restaurant-items a').last();
    const lastSavedRestaurantName = await I.grabTextFrom(locate('restaurant-items .title').last());
  
    I.click(savedRestaurant);
  
    I.seeElement('#deleteButton');
    I.click('#deleteButton');
  
    const removedRestaurantName = await I.grabTextFrom('restaurant-details .resto-title');
    assert.strictEqual(lastSavedRestaurantName, removedRestaurantName);
  
    I.amOnPage('/#/favorites');
    I.see('There are no favorite restaurants yet', '#emptyData');
  });

  Scenario('Add Review', async (I) => {
    I.amOnPage('/');
  
    I.seeElement('#content');
    I.seeElement('restaurant-list');
    I.seeElement('restaurant-items a');
  
    const firstRestaurant = locate('restaurant-items a').first();
  
    I.click(firstRestaurant);
  
    I.seeElement('#inputName');
    I.click('#inputName');
    I.fillField('#inputName', 'Test Name');

    I.seeElement('#inputReview');
    I.click('#inputReview');
    I.fillField('#inputReview', 'Test Review');

    I.seeElement('#submit-review');
    I.click('#submit-review');

    const addReview = locate('.review').last();
    I.seeElement(addReview);
  });
