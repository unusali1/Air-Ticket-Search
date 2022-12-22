import { useState } from "react";
import dayjs from "dayjs";
import Table from 'react-bootstrap/Table';
import "./App.css";
import { data } from "./Data";
import FilterBar from "./components/FilterBar";
import Navbar from "./components/Navabr.js";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function App() {
  const [allData, setData] = useState(data);
  const handleFilterDate = (atDepture, field) => {
    const filteredData = data.filter((item) => {
      if (field === "atDepture" && dayjs(item.atDepture).isSameOrAfter(dayjs(atDepture))) {
        return item;
      }
    });

    setData(filteredData);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div >
            <FilterBar
              onDateFilter={handleFilterDate}
            />
          </div>
          <div >
            <div >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>FLIGHT</th>
                    <th>AIRCRAFT</th>
                    <th>CLASS</th>
                    <th>FARE</th>
                    <th>ROUTE</th>
                    <th>DEPATURE</th>
                    <th>ARRIVAL</th>
                    <th>DURATION</th>
                    <th>PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  {allData.map((item) => (
                    <tr>
                      <td>
                        <span>{item.marketingCarrier} {item.aircraft} </span><br></br>
                        <span>{item.marketingCarrier2} {item.aircraft2} </span>
                      </td>
                      <td>
                        <span>{item.flightNumber}  </span><br></br>
                        <span>{item.flightNumber2} </span>
                      </td>
                      <td>
                        <span>{item.class}  </span><br></br>
                        <span>{item.class} </span>
                      </td>
                      <td>
                        <span>{item.fareBasis}  </span><br></br>
                        <span>{item.fareBasis} </span>
                      </td>
                      <td>
                        <span>{item.iataCodeDepture} - {item.iataCodeArival}  </span><br></br>
                        <span>{item.iataCodeDepturee} - {item.iataCodeArivall} </span>
                      </td>
                      <td>
                        <span>{item.atDepture} </span><br></br>
                        <span>{item.atDepturee} </span>
                      </td>
                      <td>
                        <span>{item.atArival}  </span><br></br>
                        <span>{item.atArivall}  </span>
                      </td>
                      <td>{item.duration}</td>
                      <td>
                        <span>{item.price}</span><br></br>
                        <button className="btn-select">SELECT</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
