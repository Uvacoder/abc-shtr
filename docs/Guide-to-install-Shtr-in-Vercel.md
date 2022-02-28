This guide includes every steps required for installing Shtr in Vercel.

- First create a PostgreSQL database, which you can get for free from the following platform.

  - Supabase: https://supabase.io
  - Railway.app: https://railway.app

- After creating the database, run the SQL query provided in this [link](https://github.com/projectashik/shtr/blob/main/prisma/db.sql) in your database.

- Now click on the button below.
  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fprojectashik%2Fshtr&env=DATABASE_URL,HASH_SALT)

- Then, connect to GitHub/Gitlab/Bitbucket to Vercel.
  ![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1646085552169/fcjUDlom2.png)
- Now, add the required credentials.
  ![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1646085612401/tp61U0jWx.png)

- Finally, click on `deploy` and see the magic.

- Now you can get access to the dashboard using the following credentials:
  <br/>
  Username: admin<br/>
  Password: shtr

> Once you enter the dashboard, make sure to change the admin password.
