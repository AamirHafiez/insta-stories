## How to start the project in development mode

### Step 1:

Get the ip that your machine is working on:

For Mac Users, use the following command:

`ipconfig getifaddr en0`

This should give you something like this, `192.168.1.4`

### Step 2:

After cloning the project,

Create a new file called `.env.local`

Add the following in the file `.env.local`:

`NEXT_PUBLIC_BASE_URL=http://192.168.1.4:3000`

_Note that 192.168.1.4 in the above should be replaced with the ip that you got in Step 1 and port 3000 should not be changed._

### Step 3:

To install dependencies for the project run `npm install`

### Step 4:

To run the project in development run `npm run dev`

### Step 5:

In the browser, if you open the project at `http://localhost:3000`, you will get a cors error since the server is not configured for development cors.

Instead use the ip that you get in step 1 to run the app in the browser.

For example if I get the ip as `192.168.1.4`,

In the browser copy and paste this, `http://192.168.1.4:3000`

And thus the project will run.

## Deployment of the Project:

The project is connected with the vercel at `https://vercel.com/new`.

The production branch for the project is `main`

The development (testing) branch for the project is `development`

#### Everytime, code is merged with branch,

1. `main`: The code is deployed to production.
2. `development`: The unit tests are run before the build, if they pass, the code is deployed to development.
