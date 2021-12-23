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
            <h1>Suggestions</h1>
          </div>
          <div className="sidebar__block">
            <h1>Roadmap</h1>
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
