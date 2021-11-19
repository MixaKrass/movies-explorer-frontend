import "./FilterCheckbox.css";

function FilterCheckbox({ handleFilter, setCheckboxFilter, checkboxFilter}) {

  const handleChangeFilter = (evt) => {
    setCheckboxFilter(evt.target.checked);
  }


 
  

  return (
    <div className='chechbox'>
        <label className='chechbox__toggle'>
          <input onChange={handleChangeFilter} className='chechbox__input' type='checkbox' />
          <span className='chechbox__span'></span>
        </label>
      <p className='chechbox__text'>Короткометражки</p>
    </div>
  )
};

export default FilterCheckbox;