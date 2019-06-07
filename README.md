## To Run 
```
$ git clone https://github.com/Deokjj/game-bets.git
$ cd game-bets
$ npm install or $ yarn install
$ expo start OR $ npm start OR $ yarn start
Scan QR code to demonstrate on expo on your mobile.
```
# `$expo start` in a root directory.

You may ignore ./server directory.
I tried to use an Express app to server static games data. 
But Expo tunnel could not http request to Local server on laptop.

"get new Games" Button in the bottom randomly selects one of three static JSON object.
