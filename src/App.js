function App() {
  return (
    <>
      <header>
        <nav>
          <img src="/imgs/logo.jpg" className="logo" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Porfolio</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Hire Me</a>
            </li>
          </ul>
          <img src="/imgs/moon.png" className="darkmood" id="icon" />
        </nav>
      </header>
      <main>
        <section className="info">
          <h1>
            I AM <span>Front End</span> Devolver
          </h1>
          <p>
            This is my official portfolio website to showcase
            <br />
            all my work related to web development and UI design
          </p>
          <a href="#">Download CV</a>
        </section>
        <section className="img-box">
          <img src="/imgs/13.jpg" className="backI" alt="" />
          <img src="/imgs/12.png" className="frontI" alt="" />
        </section>
      </main>
      <footer className="so_links">
        <a href="#">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa-solid fa-basketball" />
        </a>
        <a href="#">
          <i className="fa-brands fa-whatsapp" />
        </a>
      </footer>
    </>
  );
}

export default App;
