# Golf Stats Management App in Java and React.js

## The App
This app allows users to keep track of their stats for each round of golf. Players first include information about each golf course, such as yardage, course, and rating, and then updates player statistics such as the number of fairways, greens in regulation, up and downs, and putts they had per round. This information is saved in an API and connected to a MySQL database so each round is saved. 

Players must sign into the app using their Google account credentials and their golf stat are saved to their Google account profile. The Google credentials are authenticated using Next.js and Next-Auth.js

Demo: https://www.youtube.com/watch?v=1moth46KYtA

## Backend/API
The API has 1 route and 2 ways to utilize them
1. /api/v1/courses
  - GET: fetches all the courses in the database returned as JSON
  - POST: creates a round for a course
    - Requires a name of the golf course, date of the round, player’s score, course yardage, par for the course, course rating,  course slope, course handicap, number of fairways the player hit, number of greens in regulation the player reached, the number of up and downs the player achieved, and the number of putts the player recorded(course_name, date, user_score, yardage, par, course_rating, course_slope, course_handicap, fairways, gir, ud, putts)
    - Example (raw body data):{“course_name”: “The “Courses at Watters Creek - Traditions, ”date”: “07/18/21, ”user_score”: “72”, ”yardage” : ”5876”, “par”: “71”, “course_rating” : “71”,  “course_slope” : “128”, “course_handicap”: “74”,  “fairways” : “12”, “gir” : “14”, “ud”: “3”, putts: “28”)
   
## Requirements 
- Java
- MySQL
- npm and React.js

## Environement Variables
There are two separate .env files: one for the Google authentication on the frontend and one for the database login on the backend: 

Frontend variables: 
1. GOOGLE_CLIENT_ID
2. GOOGLE_CLIENT_SECRET

Backend variables:
1. spring.datasource.username=DB_USER
2. spring.datasource.password=DB_PASSWORD

## What I Used
- Springboot for backend
- Node.js
- Next-Auth.js
- Next.js
- my-sql-driver for MySQL queries
- Tailwind CSS for styling
