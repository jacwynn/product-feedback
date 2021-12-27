export default function Home() {
  return (
    <section>
      <div className="wrapper">
        <aside className="sidebar">
          <div className="sidebar__block">
            <div>
              <h2>Wynn Solutions</h2>
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
          <header>
            <div>
              <div>
                <img src="/images/bulb.png" />
                <h3>0 Suggestions</h3>
              </div>
              <div className="custom-select">
                <label>Sort By :</label>
                <select>
                  <option>Most Upvotes</option>
                  <option>Least Upvotes</option>
                  <option>Most Comments</option>
                  <option>Least Comments</option>
                </select>
              </div>
            </div>
            <div>
              <button>+ Add Feedback</button>
            </div>
          </header>
          <div className="suggestions empty">
            <img src="/images/illustration-empty.svg" />
            <div className="suggestions__empty-content">
              <h1>There is no feedback yet.</h1>
              <p className="primary-body-copy">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
              <button>+ Add Feedback</button>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
