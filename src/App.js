import AddBook from "./Component/Home/AddBook";
import EditBook from "./Component/Home/EditBook";
import Header from "./Component/Shared/Header";
import Footer from "./Component/Shared/Footer";
import { Routes, Route } from "react-router-dom";
import ShowBook from "./Component/Home/ShowBook";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="add_book" element={<AddBook />} />
        <Route path="edit_book" element={<EditBook />} />
        <Route path="show_book" element={<ShowBook />} />
        <Route path="/" element={<ShowBook />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
