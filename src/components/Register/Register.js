import logo from "../../images/logo.svg"
import "./Register.css"
function Register() {
  return (
    <>
    <section className='register'>
      <img className='register__icon' alt='Лого' src={logo}/>
      <h3 className='register__title'>Добро пожаловать</h3>
      <form className='register__form'>
        <label for='name'>Имя</label>
        <input type='text' id='name' />
        <label for='email'>Email</label>
        <input type='email' id='name' />
        <label for='password'>Пароль</label>
        <input type='password' id='name' />
        <button type='submit'>Зарегестрироваться</button>
      </form>
      <p>Уже зарегестрированы? <a href='#'>Войти</a></p>
    </section>
    </>
  )
}
export default Register