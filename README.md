# UX Engineering Test

## A challenge for UX engineers

While this app does technically work it is lacking in both UI design and UX. That's where you come in!

For this test you will be updating the design and applying whatever CSS wizardry you think would make it better.

We will be looking specifically at what you choose to do and how you choose to do it.

Feel free to use libraries like Tailwind. You might also want to move some of the components into their own files/folders.

## Submitting your solution

Clone this repository and set up your own, new repository as the origin remote.

Once your remote repository is ready, add @ckortekaas and @nathanhoad and let us know that you've completed the challenge.

## Your comments

This section is used as a brain dump so I plan the project by identifying what I'm trying to achieve here.
I might re-organise my thoughts as the project evolve.

Apologies for any grammar mistakes, I tend to write fast and clean up language issues later.

### Roadmap

- [x] Initial Roadmap
- [x] Initial setup
  - [x] Add support for Tailwind
  - [x] Refactor existing code (split into components/custom hooks)
  - [x] Add test cases to describe existing behaviour. Do not unit test existing code, but rather integration/e2e-ish
- [x] Plan UX
  - [x] Identify use cases
  - [x] Describe user journey
  - [x] Explore existing app/API technical limitations
- [x] Plan UI
  - [x] Mood: colors, fonts, icons.
  - [x] Sketch/Wireframe
- [x]  Implement!
  - [x] Landing screen UI
  - [x] Search result UI
  ... and other UI pages/work as required!
- [x] Release
  - [x] Bump up the release version
  - [ ] Add real README
  - [ ] Reorganize the existing README
  - [ ] Writeup a feedback/review

### Goal/Context

From my initial read of the codebase, the application allows users to search TV shows using an external API.
The user can search for a TV show by name and get a bunch of information about it: cast, year, genre, etc.

My role is to enhance the user experience by both improving the UX and the UI of the application.
I will be acting as if we are trying to produce a high-fidelity prototype.

This exercise is two folds:

- from a UX perspective, we want to identify the use case of the application and address them,
- from a UI perspective, we want to make the application appealing,

### Known Issues

#### Landing screen

The landing screen has a great UI, but it causes issues in terms of UX.
It works fine as long as the internet is reliable and fast as the images are fetched from the internet.

In a real-world situation, I would advocate turning it into a video.

Also, a 'prefer reduce motion' mode should be implemented for accessibility reasons.

Finally, the background is distracting once the search is done.
I am unsure at this stage how I will address this issue, I have two options:

  1. Remove that background once the research is done. I can easily add this with a simple routing feature.
  2. Darken the background once the research is done and stop the animation.

#### UX

---
UPDATE: After the refactoring phase, I got to know the codebase a bit better.

It seems to fit perfectly the needs I identified below, which is great.
At this stage, I am fairly happy with the general flow of the application.
I think the UX improvements will be more granular: animation, accessibiltiy, consistency as well as guiding the user to success through a clear path.

There are some improvements that can be made:

- in terms of accessibility by using semantic markup (HTML),
- adding empty state,
- improving error handling,

I am sure I will find improvements along the way.

One missing feature is the ability to share results, as identified below
---

I do not have why this application has been created in the first place.
However, the scenario in which this application is the user is most likely the following:

> Nathan is exchanging with friends about the TV shows.
  Nathan wants to recommend a TV show to his friends, but can't remember exactly who played in it and when it was released.
  He needs a quick, simple and straightforward app that allows him to quickly search and find information about that show.
  Nathan might not remember the exact name of the show, but he has a fair idea.
  Ideally, he could send a link to that show to his friends.

As often, we could extend this application to cover more use cases.
For sake of brevity and given the time available, we will focus on this one use case.

The following use cases won't be covered:

- Wiki links on any cast members, director, genre or any information related to the show.
- The search will only allow searching by title.
- There won't be any ability to store and review the previous search: the application will be stateless.
- The application won't require any login or authentification.

The key differentiator for this application to be useful is simplicity.

The user journey / happy path would look like this:

A. Search by title
B. Get a list of relevant results with summarised information
C. Choose an option from the list of result
D. View the detailed information about the option chosen

From there, the user can:
E1. Share the result
E2. Go back to the list of results
E3. Go back to the initial search

##### A. Search by title

We have identified that simplicity is paramount.
Therefore I would suggest a very simple search box combined with a search button.

A helper text/placeholder could suggest how to use the search box by providing contextual information.
However, given the simplicity of the application, we assume the user would 'learn' the interaction quickly - especially at it would mimic the ubiquitous behaviour of Google.

##### B. Get a list of the relevant result

At this stage, I don't have information about how the result is returned from the API.
We might have to face a technical challenge such as pagination.

But let's assume that the results are less than 10 results.

Again, following simplicity, we want to not overcrowd the list of results.
TV shows are visual: we watch them. Users are likely to attach an image to their memory of a show.
Displaying the image of the show is probably going to be the most important information along with the title.

Therefore I would limit the result to image + title.

##### C. Choose an option from the list of result

No comments here from a UX perspective, it will be more of a UI.
The only requirement is to make it obvious that you can see more about the show.
This could be done via the use of icons.

In a real-world situation, I would test this behaviour to ensure it is obvious to the user that the list is clickable.

I want to avoid repetition through words (show more) as from experience it tends to make the screen look crowded.

##### D. View the detailed information about the option chosen

Again, visuals are very strong, especially since the medium is something you watch.

Given this, we should emphasize visuals. The API returns an image of the cast.
I think this, along with the visual of the show itself should have more importance.

Secondary information would be the textual information: genre, year, etc.

At this stage, I haven't looked at the API response too much so we might have limitations.

##### E1. Share the result

I sound like a broken record, but simplicity is key.
I think given the time constraints, the sharing will have to be simple.

Ideally, it would be a link to the show.

We might hit some technical roadblocks here, I will have to build upon that later.
At the very least, a screenshot-like could be to satisfy this.

##### E2. Go back to the list of results

No big surprises here, but it means that we don't want to re-fetch the list of results every time.
A user might be going back and forth between results and prefetching would create unwanted friction in the user experience.

##### E3. Go back to the initial search

The only requirement here is to communicate that the user will lose the current search.
However, given the low barrier to getting the result back, it's not a critical point - but avoiding unwanted pain to the user is always better.

I would suggest a clear action button such as: 'New search' or 'Reset' rather than a simple icon.

#### UI

UI can't be described only by words, but I believe the UX above give a good starting point for where we are heading.

The mood should be modern, but simple.
A 'dark' mode would be the preference here: when watching TV shows, it's often in the dark and the evening.

Font: use a clear, non-formal (i.e. non serif) font.
Colour: a palette of dark purple - which is a safe bet for dark palettes and is well used.
Look and feel round (playful), plenty of negative space (simplicity), leverage cards pattern. An 'aurora' background with cards on top would look great for this application.
Icon-set: Feathers icons would fit the general mood quite well.

Inspirations:

- <https://frame.io>

I don't intend to wireframe other than a sketch on paper, I have a clear vision of where I want this to go.
Using Tailwind, I can quickly prototype and apply changes as required directly in the code.

#### Responsiveness

The application should be mobile first: no one is going to fire up their computer to look up a TV show.
While being accessible on a desktop, the mobile/tablet version will be the primary concern.
The desktop version will be an accessible version of the mobile/table version.

#### Why Tailwind?

The README allows the use of Tailwind.
Without going into debating whether or not polluting the markup is a good idea, I will be using Tailwind for the project as it is perfect for quick prototyping.
(As discussed in the UI point above).

#### Testing

---
UPDATE: I ended up adding more tests cases than I originally thought when refactoring but it was a good way to review the codebase.

---

The exercise does not mention writing test cases: it is focused on UX/UI.
However, in my experience refactoring without test cases is not the best idea.
To treat this as a 'real-world' example, I will add integration tests to ensure the current behaviour is not altered.

I will not go down too far the rabbit hole of unit testing, except maybe for the extra behaviour I'm adding.

Although testing AFTER writing the code is painful, I am keeping in mind that this application is fictional and does not justify a flawless testing suite.
Overall the testing will remain concise and high-level, as I'm treating this exercise as a high fidelity prototype.

Ultimately, the goal of testing here will be more about proof that I can test code - it's not justifiable from the application point of view.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
