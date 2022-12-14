# 11 Express.js: Note Taker

## Description
I have created a note taker app with a back end that saves the user input in a JSON file, and displays previously created notes on the screen for the user to see. This app solves the problem of losing papers or other notes, by creating an online source for all your note-taking needs. The user can create note titles and content for their notes and save them in the back end for persistant data regardless of browser or user. 

## Installation

This webpage can be accessed on Heroku, at: https://gentle-badlands-61765.herokuapp.com/

## Usage

The user can access the notes app by clicking the "Get Started" button on the opening page (see screenshot) or adding "/notes" to the URL/ filepath. Then, the user can add a note by typing in the User Input areas on the screen, with the placeholder text TITLE and NOTE. To save the note, the user can click the save icon in the upper right hand corner of the screen. This will persist the data by adding it to the JSON file and presenting it on the screen. If the user accesses the initial URL with the "/api/notes" filepath, the user will see the file with the notes saved as object for the user's viewing. These notes will be saved for future use, as they persist regardless of the web browser, due to the fact that they have been added into the back end code.

![Notes Readme Screenshot](/assets/screenshot.png)

## Contributing

Technologies used: Node.js, Express.js, Heroku

## License

NA
