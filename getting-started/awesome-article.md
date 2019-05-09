---
title: Value of Values (VoV) Server
sort: 1
category: Blockchain, Basic, Safety
excerpt: We're really excited to release Gridsome 0.5. The biggest update yet. It has many important features that make data handling easier and a lot more flexible. It opens up a whole new world of what you can build with Gridsome. Easily build Taxonomy pages and connections for any data.

---

# Value of Values (VoV) Server

This is the backend repo of VoV.

## Development
### Prerequisite

#### STEP - 2

Before running this application you first need to set up a few things, This project needs MongoDB and Cloudinary. 

- Setup and run MongoDB server  (ex. mongodb://....)
- Get Cloudinary URL  (ex. cloudinary://271....)

In case you do not want to run local MongoDB server you can get one free from **[here](https://www.mongodb.com/cloud/atlas/pricing)**

Cloudinary is used as CDN, Cloudinary is a powerful tool for managing not just images but also videos. The interesting thing about this tool is that it abstracts a lot (actually all) of the challenges we encounter when managing images and other media files. You can get a free account from **[here](https://cloudinary.com/)**

#### STEP -2

You need to setp enviornment variable. Create a `.env` file in dir root folder and put following thing

```env
COOKIE_SECRET=32fad5701ba7a509a5b9a230071c428
MONGO=mongodb://...
CLOUDINARY_URL=cloudinary://...
PORT=4200
```


### Run Application

``` bash
# install dependencies
$ npm install # yarn install
# serve with hot reload
$ npm run dev #  yarn dev
# in production mode
$ npm start # yarn start
```


## Production

For production deployment, you need to follow the same steps as the development but some additional dev-op steps too.

#### Step 3

Need to setup heroku account.

