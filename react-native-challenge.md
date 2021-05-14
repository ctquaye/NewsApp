
# React Native Challenge

News searching and saving application.

## Summary

Create a react native application that via user input, can search the news API for any keyword, see the result of a search
in a list and can save news articles to read while offline. In other words, the app should consist of 2 screens, 1. being
the initial page where the user can type in a search input field a keyword to search for a news article and get presented
with news articles based on that key and 2. a page where the user can see all the news articles they have saved which can
be viewed and read even if offline.

## Guide & Suggestions

- Create a new react native project

- Recommended api for news is https://newsapi.org since it is easy and free to use, just go the url and click on "Get API Key".
As soon as you fill the information they require you should get your API key.

- To fetch news from the api we recommend using the library [axios](https://github.com/axios/axios) and
the news url would be: `http://newsapi.org/v2/everything?apiKey=YOUR_API_KEY&q=USER_SEARCH_INPUT`.

- To store the news articles the user decides to save, use a combination of [Context and AsyncStorage](https://www.reactnativeschool.com/easily-persist-data-with-context-and-asyncstorage).

- The user should be able to go to a specific screen and see all their news articles they have saved even if they
 are offline. You can use the library [react-navigation](https://reactnavigation.org) to manage the screens and navigation,
 unless you want to make the 2 screens tabs.

## Project Assumptions.

- The project should take approximately 8hrs.
- Git should be used for keeping a commit history with the project.
- Project can be presented via GitHub or a zip folder.