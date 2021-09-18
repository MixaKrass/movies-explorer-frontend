import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className='chechbox'>
        <label className='chechbox__toggle'>
          <input className='chechbox__input' type='checkbox' />
          <span className='chechbox__span'></span>
        </label>
      <p className='chechbox__text'>Короткометражки</p>
    </div>
  )
};

export default FilterCheckbox;