# Bandapixels Frontend test task
## Description
The goal is to create simple Angular application for tracking time.
You can use any libraries that you want. 
You'll have simple Figma design, this is only mobile view.
_However, keep in mind, that application could be desktop as well. 
It's just for you, **don't implement desktop view**._

## How to start backend?
+ Install [Docker](https://docs.docker.com/engine/install/).  
+ Install npm packages 
  > npm install
+ Start backend 
  > npm run docker:start 
+ If backend was started you might see:
  > LOG [NestApplication] Nest application successfully started
+ After this your backend will be able on http://localhost:3000

## Pages
+ Registration page
+ Login page
+ List page
+ Create page
+ Edit Page
+ Confirmation modal window

All this pages you can find [on Figma project](https://www.figma.com/file/iaXMX1fPEfOfR3AFKdiSqL/Tracker-Task?node-id=1602%3A1439&t=8KaW6RLyAzl19zXl-1)

### Registration page
Contains only two fields. Login might be unique. 
If there is user with the same login, backend sends 400 error.
> Strong password validation would be great

After successfully registration you have to redirect user on login page. 


### Login page
If credentials are wrong, backend will send 400 error. 
On success login backend sends token, you might send requests with this token in headers.
> Authorization: { token }

### List page
This page has 2 states: user and admin. 
User state shows only tasks which belong to user and button "NEW".
However, admin view shows all users and their tasks, see it in design.
User and admin can click on tasks in order to edit them.
> This page should contain search based on tasks notes.
> High level is highlight search in results, not necessary but can show your skill.

### Create task
Only user can create a task. When click on "NEW" button. 
All fields are required in form. 
Also, you need to use libraries and validate date and time as you want. 
Just follow consistency which backend waits.

### Edit task
When user or admin clicks on task, it can be editable. Also, it can be removable from edit page.

### Confirmation modal window
You must show user confirmation modal window whenever he trys to remove the task.

## Hints
+ Keep in mind that your application relates on roles. Default and main admin is
> Login: Admin
> 
> Password: password

+ Unauthorized users cannot reach to any routes expect either login or registration page.
+ Don't think about this app as about something small. Realised that's going to be huge app.
+ Application architecture is very important.
+ Error handling and validation will be great and, definitely, up to you.
+ Use as many thing as you know.

## Which endpoints can you use?
    POST: /auth/sign-up
    body: { 
      name: string,
      password: string,
    }

this endpoint returns you result of registration either success or 400 error

    POST: /auth/sign-in
    body: { 
      name: string,
      password: string,
    }

returns token on success or 404/400 error

    GET: /users

returns array of all users, **works only for admins**

    POST: /track
    body: {
      date: Date,
      hours: number,
      message: string,
      done: boolean,
    }

creates new task

    GET: /track

returns array of current user tasks, **works only for users**

    GET: /track/:userId

returns array of user with ``:userId`` tasks

    GET: /track/:id

returns task where id = ``:id``

    PUT: /track/:id

updates task with id ``:id``

    DELETE: /track/:id

deletes task with id ``:id``


## Good luck and do you best body!




