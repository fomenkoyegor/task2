import React from "react";
import { NotesContainer } from "./features/notes/NotesContainer";

import { FaArchive } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="table w-full container mx-auto">
        <div className="table-header-group ...">
          <div className="table-row bg-slate-500 text-white">
            <div className="table-cell text-center p-3">Name</div>
            <div className="table-cell text-left">Created</div>
            <div className="table-cell text-left">Category</div>
            <div className="table-cell text-left">Content</div>
            <div className="table-cell text-left">Dates</div>
            <div className="table-cell text-left">
              <button>
                <FaArchive />
              </button>
              <span>0</span>
            </div>
          </div>
        </div>
        <div className="table-row-group">
          <div className="table-row bg-slate-200 ">
            <div className="table-cell p-2 align-middle ">
              <button className="bg-slate-800 text-white p-2 rounded-full inline-block">
                <FaArchive />
              </button>
              shopping cart
            </div>
            <div className="table-cell align-middle ">22 April 2022</div>
            <div className="table-cell align-middle">Category</div>
            <div className="table-cell overflow-hidden w-1/4 content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                aliquid animi minus quibusdam ad consequatur cumque adipisci.
                Laudantium enim fugit officia. Quis assumenda dolores vero animi
                omnis quasi deleniti ea? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. At, aut saepe ratione maiores, rem soluta,
                unde accusantium minus delectus quos ipsum distinctio illo
                aliquid? Dolorem quae fugit quibusdam ipsam aperiam?
              </p>
            </div>
            <div className="table-cell align-middle ">
              05.12.23 05/12/23 05.12.23 05/12/23{" "}
            </div>
            <div className="table-cell align-middle ">
              <button className="bg-slate-800 text-white p-2 rounded-full inline-block">
                <FaArchive />
              </button>
              <button className="bg-slate-800 text-white p-2 rounded-full inline-block">
                <FaArchive />
              </button>
              <button className="bg-slate-800 text-white p-2 rounded-full inline-block">
                <FaArchive />
              </button>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell ...">Witchy Woman</div>
            <div className="table-cell ...">The Eagles</div>
            <div className="table-cell ...">1972</div>
          </div>
          <div className="table-row">
            <div className="table-cell ...">Shining Star</div>
            <div className="table-cell ...">Earth, Wind, and Fire</div>
            <div className="table-cell ...">1975</div>
          </div>
        </div>
      </div>
      <NotesContainer />
    </div>
  );
}

export default App;
