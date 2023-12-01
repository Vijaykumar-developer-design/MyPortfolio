import { Chrono } from "react-chrono";
import NavBar from "../NavBar";
import "./index.css";
const items = [
  { title: "Food Munch" },
  { title: "Wikipedia " },
  { title: "Book Hub" },
  { title: "Jobby App" },
];
const Projects = () => (
  <div className="projects-bg">
    <NavBar />
    <h1 className="project-title"> My Projects</h1>
    <div className="projcects-container">
      <Chrono
        mode="VERTICAL"
        items={items}
        theme={{ titleColor: "pink", cardBgColor: "#6e90ba" }}
        scrollable={{ scrollbar: true }}
      >
        <div className="card">
          <img
            className="food-img"
            alt="Food Munch"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1701072534/foodmunch_fwaeyi.png"
          />
          <h1 className="card-title">Food Munch Website</h1>
          <p className="project-description">
            A responsive website that lets you browse through a wide range of
            food items with ease.
            <br /> ● Built with a mobile-first approach, this website features
            HTML structure elements and Bootstrap components to ensure seamless
            navigation.
            <br /> ● Get a clear view of the food items with product videos,
            available at your fingertips. <br /> <b>Technologies used:</b> HTML,
            CSS, Bootstrap
          </p>
          <a
            className="hyper-link"
            href="https://vijyfoodmunch.ccbp.tech/"
            rel="noreferrer"
            target="_blank"
          >
            {"->"}Project Link
          </a>
        </div>
        <div className="card">
          <img
            className="food-img"
            alt="Wikipedia"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1701073090/wiki_uqt3yn.png"
          />
          <h1 className="card-title">Wikipedia Website</h1>
          <p className="project-description">
            Experience a new level of information access with a custom wikipedia
            search application that simplifies the search process. With a
            user-friendly interface and relevant results, users can expand their
            knowledge in no time.
            <br /> ● Intuitive search results with HTML list elements, styled
            with CSS, Bootstrap, and responsive design for a seamless user
            experience.
            <br /> ● Effortlessly access desired information with asynchronous
            fetch GET HTTP API calls and the option to open results in a new tab
            for further exploration. <br /> <b>Technologies used:</b>
            HTML, CSS, JS, REST API Calls, Bootstrap
          </p>
          <a
            className="hyper-link"
            href="https://vijywikipedia.ccbp.tech/"
            rel="noreferrer"
            target="_blank"
          >
            {"->"}Project Link
          </a>
        </div>
        <div className="card">
          <img
            className="food-img"
            alt="BookHub"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1701081521/books_jpnd2w.png"
          />
          <h1 className="card-title">Book Hub Website</h1>

          <p className="project-description">
            Implemented BookHub where users can log in and can see a list of
            books with search by Book title,filters,etc <br />● Implemented
            different pages like Login, Home, BookShelves, Book item details
            using React components, props, state, lists, event handlers, form
            inputs. Authenticating by taking username, password and doing login
            post HTTP API Call.
            <br /> ● Persisted user login state by keeping jwt token in client
            storage, Sending it in headers of further API calls to authorize the
            user.
            <br /> ● Implemented different routes for Login, Home, Bookshelves,
            Book item details pages by using React Router components Route,
            Switch, Link.
            <br /> ● Implemented filters and search text by sending them as
            query parameters to Books API calls.
            <br /> ● Redirecting to the login page if the user tries to open
            Home, Bookshelve, Book item details routes which need authentication
            by implementing protected Route.
            <br /> <b>Technologies used:</b> React JS, JS, CSS, Bootstrap,
            Routing, REST API Calls, Local Storage, JWT Token, Authorization,
            Authentication
          </p>
          <p className="login">
            <b>Login Credentials:</b>
            <br />
            Username:rahul
            <br />
            Password:rahul@2021
          </p>
          <a
            className="hyper-link"
            href="https://bookhubvijy.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            {"->"}Project Link
          </a>
        </div>
        <div className="card">
          <img
            className="food-img"
            alt="JobbyApp"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1701081821/jobs_kx7yut.png"
          />
          <h1 className="card-title">Jobby App Website</h1>
          <p className="project-description">
            Implemented Jobby App where users can log in and can see a list of
            jobs with search by Job title, filters based on Salary range and
            Employment type, etc <br />● Implemented different pages like Login,
            Home, Jobs, Job item details using React components, props, state,
            lists, event handlers, form inputs. Authenticating by taking
            username, password and doing login post HTTP API Call.
            <br /> ● Persisted user login state by keeping jwt token in client
            storage, Sending it in headers of further API calls to authorize the
            user.
            <br /> ● Implemented different routes for Login, Home, Jobs, Job
            item details pages by using React Router components Route, Switch,
            Link.
            <br /> ● Implemented filters and search text by sending them as
            query parameters to jobs API calls.
            <br /> ● Redirecting to the login page if the user tries to open
            Home, Jobs, Job item details routes which need authentication by
            implementing protected Route.
            <br /> <b>Technologies used:</b> React JS, JS, CSS, Bootstrap,
            Routing, REST API Calls, Local Storage, JWT Token, Authorization,
            Authentication
          </p>
          <p className="login">
            <b>Login Credentials:</b>
            <br />
            Username:rahul
            <br />
            Password:rahul@2021
          </p>
          <a
            className="hyper-link"
            href="https://jobsappvijy.ccbp.tech/"
            rel="noreferrer"
            target="_blank"
          >
            {"->"}Project Link
          </a>
        </div>
      </Chrono>
    </div>
  </div>
);
export default Projects;
