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
              <select>
                 <option>Most Upvotes</option>
                 <option>Least Upvotes</option>
                 <option>Most Comments</option>
                 <option>Least Comments</option>
              </select>
            </div>
            <div>
              <button>+ Add Feedback</button>
            </div>
          </header>
          <div className="suggestions">
            <div className="suggestions__block">
              <div className="suggestions__content-container">
                <div className="suggestions__upvotes">
                  <button>42</button>
                </div>
                <div className="suggestions__content">
                  <div className="suggestions__title">
                    <h3>Ability to follow others</h3>
                  </div>
                  <div className="suggestions__description">
                    <p className="primary-body-copy">Stay updated on comments and solutions other people post.</p>
                  </div>
                  <div className="suggestions__category">
                    <button>Enhancement</button>
                  </div>
                </div>
              </div>
              <div className="suggestions__comments">
                <span>1</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
