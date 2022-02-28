Shtr is my submission to the Netlify x Hashnode Hackathon.

## What is Shtr?

Shtr is a powerful, free, open-source, and self hosting url shortner. Shtr includes many pro features like password protection, bot detection (coming soon), qr code generation, and many more.

## Why Shtr? &star;

<iframe src="https://giphy.com/embed/1jajMAVf2vN9KxoFfw" width="480" height="288" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

Shtr contains lots of features, that are not available in other url shortners for free. Some of the important features are:

### Opensource and free

Shtr is an open source url shortner available under MIT License.

### Easy to install

Shtr provide simple installation for the following platform.
[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/projectashik/shtr)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/projectashik/shtr)
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Fprojectashik%2Fshtr&plugins=postgresql&referralCode=dZNXiZ)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fprojectashik%2Fshtr&env=DATABASE_URL,HASH_SALT)

Later in the future, docker will also be available. Through which you can easily install shtr in other platforms too.

### Bulk Shortening

Shorten more than one links at a time. You can upload csv file containing the links to shorten them at once.
![Bulk Shortening in Shtr](https://cdn.hashnode.com/res/hashnode/image/upload/v1646075980413/t2dvwIC2v.png)

### Password Protection

You can protect your short links from unauthorized access by setting a password.
![password protection](https://cdn.hashnode.com/res/hashnode/image/upload/v1646075789384/Iz4bhQw5M.png)

### QR Code Generation

You can share the short links with the QR code provided by shtr. In future releases, user's will be able to customize the look of the QR code according to their brand (this will be done within this week).
![Generating qr code](https://cdn.hashnode.com/res/hashnode/image/upload/v1646076105978/ON_aC6_SZ.png)

### Bot Detection (coming soon)

You can enable bot protection and Shtr will stop bots from accessing the links. (Already started implementing it.)

### API

Users can easily create short urls using the API too.
![Manage api tokens](https://cdn.hashnode.com/res/hashnode/image/upload/v1646076256604/dtjl4UmV5.png)

### Multiple Users

The Admin can add multiple users who can shorten links.
![manage users](https://cdn.hashnode.com/res/hashnode/image/upload/v1646076866700/rrfezeDHm.png)

### Detailed analytics

You can view from which country, device, and browser the link was visited and which was the referral website.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1646078085106/IpBIz4-kJ.png)
![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1646078129948/foffq_6pc.png)
![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1646078106210/D81r36SL_.png)

### Internationalization

Currently, Shtr is available in two languages. I'm planning to make it available in more than 10 languages.
![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1646078350055/Hysa3gJR-f.png)

and many more are there.

## How to Shtr?

In order to use Shtr, you need to deploy/host this on your own, which is very simple AF.

### Netlify

Here's a guide on deploying Shtr in Netlify.

- First create a PostgreSQL database, which you can get for free from the following platform.

  - Supabase: https://supabase.io
  - Railway.app: https://railway.app

- After creating the database, run the SQL query provided in this [link](https://github.com/projectashik/shtr/blob/main/prisma/db.sql) in your database.

- Now click on the button below.
  [![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/projectashik/shtr)

- Then, connect to GitHub on Netlify.
- Now, add the required credentials.
  ![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1646078956423/SxsE4vsKe.png)

- Finally, click on `save & deploy` and see the magic.

- Now you can get access to the dashboard using the following credentials:
  Username: admin<br/>
  Password: shtr

> Once you enter the dashboard, make sure to change the admin password.

### Heroku

Here's a guide on deploying Shtr in Heroku.

- Click on the button below to get started.
  [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/projectashik/shtr)

- Give `HASH_SALT` value in the heroku and hit `Deploy App`.
  ![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1646079416917/UPq86HcGm.png)

- Wait until the app is installed.
- Now you can get access to the dashboard using the following credentials:
  Username: admin<br/>
  Password: shtr

> Once you enter the dashboard, make sure to change the admin password.

## Roadmap

Let's see what the other's upcoming features of Shtr.

### Discord Bot

I'm planning to build a Discord bot that can help you manage all the tasks of the Shtr from Discord.

### App Link

With this feature, you can open different links based on the device user's are using. Like playstore for android user and app store for iOS user.
