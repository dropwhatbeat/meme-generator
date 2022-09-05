# Meme Generator
## Running the project on local
### `npm install`

Installs dependencies. Ensure that you have npm installed.
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Features

- fetches a new meme on load / page refresh / clicking of get new meme button
- get meme button disabled until meme is loaded to prevent spam
- click save will save the current displayed meme to favourites list
- default meme title available in text box
- memes are added to the bottom of the favourites list
- changing name of saved meme will push the meme to the top of list
- deleting of meme when trash icon is clicked
- no duplicated memes will be saved
- auto scrolling based on actions
- caching of favourite list in local cache 

## Deployment on Vercel

Project is also currently hosted on https://meme-generator-orcin.vercel.app/ .
Local cache of saved data will be stored on the browser.

## Resources

API from https://github.com/D3vd/Meme_Api .

