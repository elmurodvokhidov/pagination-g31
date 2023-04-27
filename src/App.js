import { useEffect, useState } from "react";
import DarkExample from "./Table";
import './Main.css';

function App() {

  const [info, setInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  let content = currentPage === totalPage ? <i class="fa-solid fa-arrow-left"></i> : <i class="fa-solid fa-arrow-right"></i>;

  // API'dan ma'lumot olish
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${currentPage}`)
      .then(reponse => reponse.json())
      .then(bar => {
        setInfo(bar.data)
        setCurrentPage(bar.page)
        setTotalPage(bar.total_pages)
      })
      .catch(err => console.log(err))
  }, [currentPage])

  // Next & Previous button function
  function handleClick() {
    if (currentPage === totalPage) {
      setCurrentPage(currentPage - 1)
    }
    else {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="App">
      {/* Ma'lumotlarni render qilish */}
      <DarkExample info={info} />
      {/* Click function */}
      <button id="nextBtn" onClick={handleClick} className="btn btn-dark">{content}</button>
    </div >
  );
}

export default App;
