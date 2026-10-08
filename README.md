<div align="center">

# 🎬 CineHub

A responsive movie and TV browsing application with authentication, search, filtering, sorting, pagination, and actor profiles — powered by the TMDb API.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-01e2da?style=for-the-badge\&logo=vercel\&logoColor=white)](https://cinehub-movieapp.vercel.app/)
[![Source Code](https://img.shields.io/badge/Source%20Code-181717?style=for-the-badge\&logo=github\&logoColor=white)](https://github.com/rawdamohamed2/movieApp)

</div>

---

## 📸 Preview

<div align="center">
  <img src="https://res.cloudinary.com/dw956xm88/image/upload/v1758138474/cinehub-movieapp.netlify.app__rs3whd.png" alt="CineHub preview" width="85%" />
</div>

---

## 🚀 Live Demo

🔗 **[cinehub-movieapp.vercel.app](https://cinehub-movieapp.vercel.app/)**

---

## 📖 About

**CineHub** is a responsive movie and TV browsing application built with React and the TMDb API.

Users can register and log in with JWT authentication, browse movies and TV shows, search and filter content, sort results, navigate through paginated results, and explore actor profiles with IMDb links.

The project uses **TanStack React Query** for server-state management, API data fetching, caching, loading and error handling, while **Context API** is used for shared client-side application state such as authentication and messages.

---

## ✨ Features

* 🔐 Login and registration with JWT-based authentication
* ✅ Form validation using Joi
* 🔍 Search movies and TV shows
* 🎯 Filter movies by genre, year, rating, language, and other criteria
* ↕️ Sort movie results by popularity, release date, rating, and title
* 📄 Pagination for browsing search and filtered results
* 💾 Server-state management and caching with TanStack React Query
* ⏳ Loading and error states handled with React Query
* 🎭 Actor profiles with IMDb links
* 🎬 Movie and TV show details and trailers
* 🌐 Real-time data from the TMDb API
* 📱 Fully responsive design across desktop, tablet, and mobile devices

---

## 🛠️ Built With

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square\&logo=react\&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square\&logo=vite\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square\&logo=tailwindcss\&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square\&logo=reactquery\&logoColor=white)

* **React** — component-based UI development
* **Vite** — fast build tooling and development server
* **Tailwind CSS** — utility-first responsive styling
* **TanStack React Query** — server-state management, caching, pagination, and API data fetching
* **Context API** — shared client-side state such as authentication and application messages
* **Axios** — HTTP requests to the TMDb API
* **React Router** — client-side routing
* **Joi** — form and data validation
* **JWT** — authentication and session handling
* **TMDb API** — movie, TV, and actor data source
* **React Responsive** — responsive behavior based on screen size

---

## 🏗️ Project Structure

The application is organized into dedicated pages, reusable components, hooks, contexts, and utilities.

```text
src/
├── Components/
│   ├── Loader/
│   ├── MediaItem/
│   ├── Movies/
│   ├── TV/
│   └── ...
│
├── Context/
│   ├── AuthContext/
│   ├── MessageContext/
│   └── ...
│
├── Hooks/
│   ├── useMovieSearch.js
│   ├── useTrending.js
│   ├── useTopRated.js
│   └── ...
│
├── Pages/
│   ├── Home/
│   ├── Movies/
│   ├── TV/
│   ├── Details/
│   └── ...
│
├── Utils/
│
└── App.jsx
```

---

## ⚡ Data Fetching with TanStack React Query

CineHub uses **TanStack React Query** to manage server state instead of manually handling API requests with `useEffect` and multiple `useState` values.

React Query is used for:

* Fetching movie and TV data
* Caching API responses
* Managing loading and error states
* Query-based data fetching
* Pagination
* Keeping previous results while loading a new page
* Avoiding unnecessary duplicate requests

For example, movie search and filtering use query keys based on the current filters and page:

```js
["movieSearch", filters, page]
```

This allows each combination of filters and pagination state to be managed and cached independently.

---

## 🔎 Movie Search & Filtering

The movie discovery page supports multiple filtering and sorting options, including:

* Search query
* Genre
* Release year
* Minimum rating
* Original language
* Sorting preference

Users can apply filters and browse the results using pagination.

---

## 📄 Pagination

Movie results support page-based pagination using the TMDb API.

Pagination is managed through the current page and total page count returned by the API, while React Query handles fetching and caching each page.

The previous page's data can remain visible while the next page is loading for a smoother user experience.

---

## 🔐 Authentication

CineHub includes JWT-based authentication with:

* User registration
* Login
* Authentication state
* Protected user functionality
* Form validation with Joi

Authentication-related client state is managed through the **Context API**.

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rawdamohamed2/movieApp
```

### 2. Go to the project directory

```bash
cd movieApp
```

### 3. Install dependencies

```bash
npm install
```

### 4. Add your TMDb API key

Create a `.env` file in the root directory:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

### 5. Run the development server

```bash
npm run dev
```

### 6. Build for production

```bash
npm run build
```

---

## 👩‍💻 Author

**Rawda Mohamed** — Frontend Developer & Computer Science graduate, Alexandria University

* 💼 [LinkedIn](https://www.linkedin.com/in/rawda-mohamed-367a77370)
* 💻 [GitHub](https://github.com/rawdamohamed2)
* 📧 [rawdamohamedsengab@gmail.com](mailto:rawdamohamedsengab@gmail.com)
