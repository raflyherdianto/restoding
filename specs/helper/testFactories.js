/* eslint-disable import/prefer-default-export */
import SaveButtonInitiator from '../../src/scripts/utils/save-button-initiator';

const createSavedButton = async (restaurant) => {
  await SaveButtonInitiator.init({
    saveButtonContainer: document.querySelector('#saveButtonContainer'),
    restaurant,
  });
};

export { createSavedButton };
