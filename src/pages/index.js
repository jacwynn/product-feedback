import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import EmptySuggestion from '../components/EmptySuggestion';
import Suggestion from "../components/Suggestion";

export default function Home() {
  return (
    <section>
      <div className="wrapper">
        <Sidebar />
        <main className="main-content">
          <Header />
          {/* Empty Suggestion */}
          <div className="suggestions empty">
            <EmptySuggestion />
          </div>

          {/* Suggestion */}
          {/* <div className="suggestions">
            <Suggestion />
          </div> */}
        </main>
      </div>
    </section>
  )
}
