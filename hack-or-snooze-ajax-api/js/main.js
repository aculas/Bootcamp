'use strict';

// So we don't have to keep re-finding things on page, find DOM elements once:

const $body = $('body');

const $storiesLoadingMsg = $('#stories-loading-msg');

//Story selectors
const $allStoriesList = $('#all-stories-list');
const $favoritedStories = $('#favorited-stories');
const $userSubmittedStories = $('#user-submitted-stories');
const $allStoryLists = $('.stories-list');

// Forms
const $loginForm = $('#login-form');
const $signupForm = $('#signup-form');
const $submitNewStoryForm = $('#submit-new-story-form');

//Navigation selectors
const $navSubmitNewStory = $('#nav-submit-new-story');
const $navFavoritesList = $('#nav-favorites-list');
const $navUserSubmittedStories = $('#nav-user-submitted-stories');
const $navLogin = $('#nav-login');
const $navUserProfile = $('#nav-user-profile');
const $navLogOut = $('#nav-logout');

const $userProfile = $('#user-profile');

/** To make it easier for individual components to show just themselves, this
 * is a useful function that hides pretty much everything on the page. After
 * calling this, individual components can re-show just what they want.
 */

function hidePageComponents() {
	const components = [ $submitNewStoryForm, $allStoriesList, $loginForm, $signupForm ];
	components.forEach((c) => c.hide());
}

/** Overall function to kick off the app. */

async function start() {
	console.debug('start');

	// "Remember logged-in user" and log in, if credentials in localStorage
	await checkForRememberedUser();
	await getAndShowStoriesOnStart();

	// if we got a logged-in user
	if (currentUser) updateUIOnUserLogin();
}

// Once the DOM is entirely loaded, begin the app

console.warn(
	'HEY STUDENT: This program sends many debug messages to' +
		" the console. If you don't see the message 'start' below this, you're not" +
		' seeing those helpful debug messages. In your browser console, click on' +
		" menu 'Default Levels' and add Verbose"
);
$(start);
