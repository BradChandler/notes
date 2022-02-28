import FAB from "./components/FAB";
import Header from "./components/Header";
import NoteCard from "./components/NoteCard";

const DUMMY_NOTES = [
  {id: 'n1', title: 'Note 1', body: '', category: 'category', data: '12-12-2020'},
  {id: 'n2', title: 'Note 2', body: '', category: 'category', data: '12-12-2020'},
  {id: 'n3', title: 'Note 3', body: '', category: 'category', data: '12-12-2020'},
  {id: 'n4', title: 'Note 4', body: '', category: 'category', data: '12-12-2020'},
]

const App = () => {
  return (
    <>
      <Header />
      <main style={{height: '100vh'}}>
        <section className="container">
          <ul className="padding__lg grid__one grid__just-null">
            {
              DUMMY_NOTES.map(nt => <NoteCard {...{...nt}}/>)
            }
          </ul>
        </section>
      </main>
      <FAB />
    </>
  );
}

export default App;
