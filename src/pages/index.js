export default function Home() {
  return (
    <section>
      <div className="wrapper">
        <aside className="sidebar">
          <div className="sidebar__block">
            <div>
              <h2>Frontend Mentor</h2>
              <p className="secondary-body-copy">Feedback Board</p>
            </div>
          </div>
          <div className="sidebar__block">
            <ul>
              <li>All</li>
              <li>UI</li>
              <li>UX</li>
              <li>Enhancement</li>
              <li>Bug</li>
              <li>Feature</li>
            </ul>
          </div>
          <div className="sidebar__block">
            <div className="sidebar__heading">
              <h3>Roadmap</h3>
              <a href="#">View</a>
            </div>
            <ul>
              <li>
                <div>Planned</div>
                <div>2</div>
              </li>
              <li>
                <div>In-Progress</div>
                <div>3</div>
              </li>
              <li>
                <div>Live</div>
                <div>5</div>
              </li>
            </ul>
          </div>
        </aside>
        <main className="main-content">
          <div>
            <h1>Header</h1>
          </div>
          <div>
            <h1>Main Content</h1>
          </div>
        </main>
      </div>
    </section>
  )
}
