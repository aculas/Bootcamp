'use strict';

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */
function navAllStories(evt) {
	console.debug('navAllStories', evt);
	hidePageComponents();
	putStoriesOnPage();
}

$body.on('click', '#nav-all', navAllStories);

/** Show login/signup on click on "login" */
function navLoginClick(evt) {
	console.debug('navLoginClick', evt);
	hidePageComponents();
	$loginForm.show();
	$signupForm.show();
}

$navLogin.on('click', navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */
function updateNavOnLogin() {
	console.debug('updateNavOnLogin');
	$('.main-nav-links').show();
	$navLogin.hide();
	$navLogOut.show();
	$navUserProfile.text(`${currentUser.username}`).show();
}

/** Show new story submit form on click on "submit" */
function navSubmitClick(evt) {
	evt.preventDefault();
	console.debug('navSubmitClick', evt);
	hidePageComponents();
	$submitNewStoryForm.show();
}

$navSubmitNewStory.on('click', navSubmitClick);

/** Show user favorites list on click on "favorites" */
function navFavoritesClick(evt) {
	console.debug('navFavoritesClick', evt);
	hidePageComponents();
	putUserFavoritesListOnPage();
}

$navFavoritesList.on('click', navFavoritesClick);

/** Show user submitted stories on click on "my stories" */
function navMyStoriesClick(evt) {
	console.debug('navMyStoriesClick', evt);
	hidePageComponents();
	putUserStoriesListOnPage();
}

$navUserSubmittedStories.on('click', navMyStoriesClick);

/** Show user profile on click on profile name */
function navProfileClick(evt) {
	console.debug('navProfileClick', evt);
	hidePageComponents();
	$userProfile.show();
}

$navUserProfile.on('click', navProfileClick);
