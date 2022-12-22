import { useState } from "react";

const FilterBar = ({
  onDateFilter,
}) => {
  const [filters, setFilters] = useState({
    atDepture: "",

  });

  const handleInput = (field) => (event) => {

    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "atDepture":
        onDateFilter(value, "atDepture");
        break;
      default:
        break;
    }
  };

  return (
    <div >
      <div>
        <h4>Master Price</h4>
      </div>
      <div className="btn-containar">
        <button className="btn-round">Round Trip</button>
        <button className="btn-oneday">One Way</button>
        <button className="btn-round">Multi City</button>
      </div>
      <div className="underline"></div>
      <div className="input-containar">
        <button className="btn-input">LHR</button>
        <button className="btn-input">CDG</button>
        <input className="btn-input" type="date" id="startDate" format="dd-mm-yyyy" onChange={handleInput("atDepture")} />
        <select className="btn-input"><option value="">Day-</option></select>
        <select className="btn-input"><option value="">Day+</option></select>
        <select className="btn-input"><option value="">Any Time</option></select>
        <h5>+</h5>
        <select className="btn-input">
          <option value="">ADT</option>
          <option value="">CHILD</option>
        </select>
        <select className="btn-input">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <h5>+</h5>
      </div>
      <div className="underline"></div>
      <div className="input-containar-two">
        <div className="environment">
          <input type="checkbox" id="option" name="option" value="Extra Options" />
          <label className="option" htmlfor="vehicle1">Extra Options</label>
        </div>
        <div className="environment">
          <h5 className="txt">Environment:</h5>
          <input type="radio" id="dummy" name="fav" value="Dummy" />
          <label className="txtt" htmlfor="dummy">Dummy</label>
          <input type="radio" id="pdt" name="fav" value="PDT" />
          <label className="txtt" htmlfor="pdt">PDT</label>
        </div>
        <button className="btn-search">SEARCH</button>
      </div>
      <div className="underline"></div>
      <p> Data Parsed Successful</p>
    </div>
  );
};

export default FilterBar;
