import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <section>
      <div className="wrapper">
        <Sidebar />
        <main className="main-content">
          <Header />
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
