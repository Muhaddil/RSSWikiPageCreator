/**
 * @fileoverview Provides functions which can be used by the Base page creator.
 */

import { checkboxWikiCode, errorMessage, regexMatch, wikiCode } from "../../common";
import { globalElements } from "../../variables/objects";
import { createApp } from 'vue';
import App from '../../components/inputs/FeatureInput.vue';

const app = createApp(App);

app.mount('#featuresInput');


/**
 * Validates Discord tags.
 *
 * @returns {void}
 */
export function validateDiscord() {
	const element = globalElements.input.censusDiscordInput as HTMLInputElement;
	const tag = element.value;

	const hasValidNewTag = /^[a-z0-9._]+$/.test(tag);

	errorMessage(element, !tag || hasValidNewTag ? '' : 'Etiqueta de Discord no válida. Por favor proporcione su nombre de usuario, no su nombre para mostrar.');
}

/**
 * Validates the input value for a Reddit user name and generates wiki code for it.
 * @function
 *
 * @returns {void}
 */
export function validateReddit() {
	const element = globalElements.input.censusRedditInput as HTMLInputElement;
	const value = element.value.trim();
	const redditName = (() => {
		if (value.toLowerCase().startsWith('u/')) {
			return value.substring(2);	// NoSonar 0-1 are the `u/`, and we want to ignore that
		} else {
			return value;
		}
	})();
	if (redditName.includes(' ')) {
		errorMessage(element, 'El nombre de Reddit no debe incluir espacios.');
		return;
	} else {
		errorMessage(element);
	}
	const dest = element.dataset.destNoauto;
	wikiCode(redditName, dest);
}

/**
 * Capitalizes the input value of a friend code input element and calls the wikiCode function.
 * @function
 */
export function capitaliseFriendCode() {
	const element = globalElements.input.censusFriendInput as HTMLInputElement;
	element.value = element.value.toUpperCase();
	const dest = element.dataset.destNoauto;
	wikiCode(element, dest);
}

/**
 * Validates a friend code format (xxxx-xxxx-xxxxx).
 * @function
 * @returns {void}
 */
export function validateFriendcode() {
	const element = globalElements.input.censusFriendInput as HTMLInputElement;
	const friendCode = element.value;
	const friendCodeRegex = new RegExp(/(?:[0-9A-Za-z]{4}-){2}[0-9A-Za-z]{5}/);
	if (!friendCode || regexMatch(friendCode, friendCodeRegex)) {
		errorMessage(element);
	} else {
		errorMessage(element, 'Formato del código de amigo incorrecto');
	}
}

/**
 * Automatically checks or unchecks a checkbox to create a census entry.
 *
 * @function
 * @returns {void}
 */
export function createCensusEntry() {
	const checkbox = globalElements.input.censusShowInput as HTMLInputElement;
	const input = globalElements.input.censusPlayerInput as HTMLInputElement;
	const inputBool = Boolean(input.value);	// boolean from the input (true if any input is given)
	if (checkbox.checked == inputBool) return;
	checkbox.checked = inputBool;
	checkboxWikiCode(checkbox);
}