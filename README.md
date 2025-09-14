# CineHub App (Movie App)

A movie and TV browsing application built with **React + Vite**.  
Includes authentication, search, filtering, actor profiles, and responsive UI.  
Powered by **The Movie Database (TMDb) API** with links to **IMDb**.

## Features
- **Authentication with JWT**
  - User login and register
  - Token saved in localStorage
  - **jwt-decode** used to extract profile info from token
- **Profile Page**
  - User data decoded from token
- **Movies & TV**
  - Browse popular movies and TV shows
  - Search across both movies and TV
  - Filter and sort by:
    - Popularity
    - Release/air date
    - Rating
    - Title (A–Z / Z–A)
- **Actors / Cast**
  - View actor profile
  - Fetch filmography (movies and TV works)
  - Each actor/movie page includes link to **IMDb profile**
- **Form Validation**
  - Implemented with **Joi**
- **Routing**
  - Client-side routing using **React Router**
  - Protected routes for authenticated users
- **State Management**
  - **React Context API** for global state
- **Responsive UI**
  - Built with **react-responsive** and **Tailwind CSS**
- **API Integration**
  - Data fetched from **TMDb API** with **Axios**
  - IMDb IDs used to provide external links for movies, TV shows, and actors
- **Custom Hooks**
  - Encapsulate reusable logic
    
##  Live Demo
[Click here to try the app](https://cinehub-movieapp.netlify.app)
