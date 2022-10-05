### Angular Prac Day

Here is the information for your Angular Prac Day

### Scope

You have 3 tasks to complete
These tasks require you to build a login system and successfully log in to view the rest of the work.
We use OAuth2 for our authentication, the credentials to a basic login are provided.
You have the day to do these tasks.
You’re allowed to use the internet to your full disposal and ask questions if you’re stuck or need clarification
There are an additional 3 tasks to do once you complete the first 3 if you have enough time.
You will also be required to use the functionalities we specified below.
You will find a postman json file attached which you can import into Postman to test the API endpoints

### Server

You’ll be connecting to a staging server of ours.
The server expects API calls from port 3000
Tips
Note the server data types, the code snippet below should guide you in the right direction

### Git

Please push your code to a Github public repo which you can link us with to review your code at the end of the demo.
We recommend doing this early so you can commit your progress to make sure you don’t break your code before the end of the prac day.

### Tasks

1. Create a login page, where the user can sign in.

-   After login, you will use your access_token you got to complete the user form and the other tasks.

2. Update the current user’s information using the API (Endpoint will only use name, surname and email so ignore other fields with the update call). Create a page that contains inputs for the following user details:

-   Name (3-8 required characters)
-   Surname (3-8 required characters)
-   Email (3-8 required characters and a check for email)
-   ID Number
-   Date of birth
-   The user does not want to input their date of birth if they provided an ID number and the data also needs to be checked to make sure it matches.

3. Pull the ‘categories’ api and style the categories on the Home Screen. Use the router to navigate to each item.

### Important

Please focus on functionality first before styling.
Get the login and user forms working then style them.
Get the categories pulled and displayed on your page then style them.
A beautiful page means nothing if I can’t use it.

### Credentials

Will be provided to you on arrival

### Features to use:

Make use of @Input and @Output
Use the built in Angular routing
Exchange data between two components not related to each other (parent child)
Make use of the FormsModule to build the register page form

### Packages to use:

Angular Material UI: https://material.angular.io/
Or something like Tailwind if you want custom styles.

### Optional Tasks

Do these if you finish the first 3 tasks with enough time left.
These don’t need to be done, they’re just bonus tasks.1. Create a validator for the ID number that checks the validity of the Luhn algorithm and a more complex email validator

2. Create a page for viewing / creating / editing & deleting Tags

3. Create a page/form where you can add new words to a category.
