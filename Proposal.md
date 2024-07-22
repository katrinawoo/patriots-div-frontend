# Project Title
StartSite -- Phase 1 Implementation for client company Patriots Division

# Installation
The project is a website built with React Vite, it has two github repositories, with running instructions:

BACKEND
- https://github.com/katrinawoo/katrina-woo-patriots-div-backend
-- Run backend first on VS code.
-- Clone git repository and navigate to the "main" branch.
-- Connect to your MySQL server from git bash terminal using command "mysql -h 127.0.0.1 -u root -p patdiv".
-- In main branch, start server with command in terminal git bash with "npm start".
-- Can check various tables in the database in MySQL with commands such as "SELECT * FROM job_applications;".

FRONTEND
- https://github.com/katrinawoo/katrina-woo-patriots-div
-- Run frontend in VS code once backend server is running.
-- In main branch, start server with command in terminal git bash with "npm run dev".
-- The website should open in your browser using the local server.

# Navigating the Startsite for Patriots Division
- HOME/GAMES PAGE: the landing page. Referred to as GAMES in the nav bar.
-- Hero with layered images of the game that moves responsively as screen size changes. Has the effect of an animation.  "More About the Game" button that directs to the videogame website www.shadowwar.com.
-- About Us section that describes the company.  Cards below listing company values.
-- "Check Open Positions" button directs to the CAREERS PAGE.

- HEADER: on all pages. No background for Nav because the Hero images start at top of page. 
-- Has company logo in left corner that directs to the home page.
-- Has NAV that directs to the GAMES, TEAM, CAREERS, and CONTACTS pages.
-- In mobile view, NAV is a popup modal.

- FOOTER:
-- Has company logo in left corner that directs to the home page.
-- Has Twitter(X) and LinkedIn icons that direct to the company's pages for those platforms.
-- Has links that direct you to different areas of the site, depending on what your interest is-- Their Vision? Shadow War? Wanna work with us? Open jobs?.

- TEAM PAGE: gives details about the company's team.
-- Cards with details about each team member:
-- Each card contains: photo, name, bio, position, and icon linking to their LinkedIn profile.
-- Images shift and brighten on hover.
-- Youtube video for "Loyalty Protocol".  Company has many unique assets, so tried to incorporate them where I could that made sense.

- CAREERS PAGE:
-- Descriptive section with articles that describe company culture, describing their remote working style and benefits.
-- Currently Open Positions section, pulling data from the API.
-- Cards for each open position, containing the position title available, experience level required, location of work (remote), and salary.
-- Youtube video for "The Making of Shadow War".  Shows the team members describing their roles and vision for the game.
-- Cards shift and brighten on hover, when clicked will lead to JOB DETAILS PAGE.

- JOB DETAILS PAGE:
-- Has hero with same information as its respective card in the CAREERS PAGE.
-- Section with articles containing job description, experience required, and additional info.
-- When the "APPLY NOW" button is clicked, a form appears below it and the button disappears.
-- The FORM contains fields for NAME, EMAIL, LINKEDIN URL, OTHER LINKS (i.e. Portfolio, Twitter handle, etc.), and Additional Information.
-- The form has a "Choose File" BUTTON for resume upload, allows you to navigate in your computer to select a pdf file for upload.
-- The "Submit" Button: If fields are missing, red outline around fields, and red message below field stating "This field is required.".  If fields are filled out and resume in correct format and below 5MB limit, a popup will appear with a green checkmark animation saying "Thanks Patriot, your application has been submitted!", must press "OK" button to exit popup, and will be automatically redirected to the homepage.
-- The uploaded resumes are stored in the backend, in the "uploads/resumes" folder.
-- The data from the form submission is saved in backend in the "job_applications" table in the database.

- CONTACTS PAGE:
-- Tells the user that they may reach out to the team via the form on the page.
-- The FORM contains fields for NAME, EMAIL, and MESSAGE. 
-- The "Send Message" Button: If fields are missing, red outline around fields, and red message below field stating "This field is required.".  If fields are filled out correctly, a popup will appear with a green checkmark animation saying "Thanks Patriot, message sent successfully!", must press "OK" button to exit popup, and will be automatically redirected to the homepage.
-- The data from the form submission is saved in backend in the "contact_messages" table in the database.


## Overview

Patriots Division is a start up that develops video games, they need an app to convey information about their company and team to potential investors and employees, this is where StartSite comes in.

My project is divided into two phases. 

In Phase 1, I will build a company website featuring company info, their values,  team bios, job postings it’ll have the ability to apply for them through the site, and a messaging functionality.   This is the Brainstation Capstone project.

In Phase 2, I will create a template from this website and deploy it in an app, allowing other startups to easily customize and maintain their own sites.


### Problem

The way that most startups communicate information to potential investors is through slides decks that are not as exciting to look at or as easy to access as an app or website.  Most investors look at a deck a few times around the time of a presentation, but then it gets lost amongst their other links and files.  By having an app, the important information about a company is easily accessible in the future.  Many startups are eager to set up a digital presence, but there is considerable expense to doing so.  This app creates a template that could make building team websites for startups more attainable.

Many startups struggle with creating a professional online presence, and the question is, why does a website matter? Startups often rely on social media but they lack a credible website that showcases their team and open job opportunities. However, as these companies try to grow, attract talent, and fundraise, it is challenging for them to appeal to outside investors without establishing a professional persona and trustworthy company presence.  These issues are helped by establishing a website, making it easier for stakeholders to access essential information about the company.


### User Profile

StartSite could be for any company wanting to build an app to convey information about their company, team, and potential employment opportunities.  Many companies work on multiple projects/startups, so a separate team site may be suitable.

### Features

Company information with values.  Team bios.  Careers page with open positions, should link to form where people can apply and submit resumes.  Contacts page where you can submit a message to the company.

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Node.js
- Client libraries:
    - react
    - react-router
    - axios
    - sweetalert for popups
- Server libraries
    - knex
    - express
    - multer for pdf uploads

### APIs

- No external APIs will be used. Unless it's in the nice to have.

### Sitemap

- Home: company information and intro to the game in development, ShadowWar. Company values.
- Team: team photos and bios. Bios link to team member's linkedin profile.
- Careers: informations about working for the company, available opportunities.
- Apply: form to apply to open positions
- Contact: page to send the company a message.

### Mockups -- please note, all mockups were provided by the clients' designer

#### Home, Team, and Careers Pages for Desktop
![](./src/assets/mockups/mockup-PD.jpg)

#### Job Application Page for Desktop
![](./src/assets/mockups/job-application-PD-desktop.png)

#### Home, Modal, Team, Careers, and Job Application Pages for Mobile
![](./src/assets/mockups/mockup-PD-mobile.png)

#### Contacts Page for Mobile and Desktop
- this was designed by me, no mockup.  Styled based off of other pages.

#### Team saturate on hover
- since the color images weren't provided, I brightened the images on hover.
![](./src/assets/mockups/team-photos-saturate-example-PD.png)

### Data

Team bios: photos, names, and bio.
Job listing: available jobs.
User data: those who have applied for jobs, their contact information and attached resume.

### Endpoints

GET (get available jobs)
GET (team members)
POST (a job application with pdf)
POST (a message in contacts page)


## Roadmap

Setup project structure.  Acquire all assets required for app.  Develop pages.  Finalize and connect all features.  Testing and edits.

## Nice-to-haves

- Video of the game on the site.
- Possible Shadow War lobby music to play when opening the site. [took this out because client did not want music]
-- https://www.youtube.com/watch?v=HBdC3jnZyKw
- Could incorporate loyalty protocol music or videos somewhere in team or careers pages.
-- https://www.youtube.com/watch?v=GenHD72bN9I
- Have an interactive component with the game characters.  Although the game's website is already comprehensive.
-- https://www.shadowwar.com/operatives
