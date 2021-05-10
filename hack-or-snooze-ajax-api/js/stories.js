'use strict';

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */
async function getAndShowStoriesOnStart() {
	storyList = await StoryList.getStories();
	$storiesLoadingMsg.remove();

	putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */
function generateStoryMarkup(story, deleteBtn) {
	const hostName = story.getHostName();
	const deleteBtnHtml = `<span class="trash">
      <i class="fas fa-trash-alt"></i></span>`;
	let starHtml;

	const showStar = Boolean(currentUser);
	if (showStar) {
		const favoriteCheck = currentUser.favoriteCheck(story);
		const starState = favoriteCheck ? 'fas' : 'far';
		starHtml = `<span class="star">
			<i class="${starState} fa-star"></i></span>`;
	}

	return $(`
      <li id="${story.storyId}">
				${deleteBtn ? deleteBtnHtml : ''}
        ${showStar ? starHtml : ''}
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */
function putStoriesOnPage() {
	console.debug('putStoriesOnPage');

	$allStoriesList.empty();

	// loop through all of our stories and generate HTML for them
	for (let story of storyList.stories) {
		const $story = generateStoryMarkup(story);
		$allStoriesList.append($story);
	}

	$allStoriesList.show();
}

/** Gets new story info from form and adds new story to api, DOM, & local lists. */
async function submitNewStory(evt) {
	console.debug('submitNewStory');
	evt.preventDefault();
	// Get story info from html form
	const title = $('#new-story-title').val();
	const author = $('#new-story-author').val();
	const url = $('#new-story-url').val();

	// Add story to api & local lists
	const submittedStory = await storyList.addStory(currentUser, { title, author, url });
	alert('Your Story Has Been Submitted!');
	// Add story to DOM and hide & reset form
	$allStoriesList.prepend(generateStoryMarkup(submittedStory));
	$submitNewStoryForm.hide();

	$('#new-story-title').val('');
	$('#new-story-author').val('');
	$('#new-story-url').val('');
}

$submitNewStoryForm.on('submit', submitNewStory);

function putUserFavoritesListOnPage() {
	console.debug('putUserFavoritesListOnPage');
	const userFavs = currentUser.favorites;

	$favoritesList.empty();

	if (userFavs.length) {
		for (let story of userFavs) {
			const $story = generateStoryMarkup(story);
			$favoritesList.append($story);
		}
	} else {
		$favoritesList.append('<h4>No Favorites Added Yet</h4>');
	}
	$favoritesList.show();
}

function putUserStoriesListOnPage() {
	console.debug('putUserStoriesListOnPage');
	const userStories = currentUser.ownStories;

	$userSubmittedStories.empty();

	if (userStories.length) {
		for (let story of userStories) {
			const $story = generateStoryMarkup(story, true);
			$userSubmittedStories.append($story);
		}
	} else {
		$userSubmittedStories.append('<h4>No Submitted User Stories</h4>');
	}
	$userSubmittedStories.show();
}

/** Handle click to favorite or unfavorite story */
async function handleToggleFavoriteClick(evt) {
	console.debug('handleToggleFavoriteClick');

	const $targ = $(evt.target);
	const storyId = $targ.closest('li').attr('id');
	const $curList = $targ.closest('ol')[0];
	const curlist =
		$curList === $allStoriesList[0]
			? storyList.stories
			: $curList === $favoritesList[0] ? currentUser.favorites : currentUser.ownStories;

	const story = curlist.find((s) => s.storyId === storyId);

	const evtOnFavoritesList = curlist === currentUser.favorites;

	// check if the item is already favorited and change star and update api
	if ($targ.hasClass('fas')) {
		await currentUser.togUserFavorite(story, 'remove');
		evtOnFavoritesList ? $targ.closest('li').remove() : $targ.closest('i').toggleClass('fas far');
	} else {
		await currentUser.togUserFavorite(story, 'add');
		$targ.closest('i').toggleClass('fas far');
	}
}

$allStoryLists.on('click', '.star', handleToggleFavoriteClick);

/** Handle click to delete a story. */
async function handleRemoveStoryClick(evt) {
	console.debug('handleRemoveStoryClick');
	const $targ = $(evt.target);
	const storyId = $targ.closest('li').attr('id');

	await storyList.removeOwnStory(storyId);
	putUserStoriesListOnPage();
}

$userSubmittedStories.on('click', '.trash', handleRemoveStoryClick);
