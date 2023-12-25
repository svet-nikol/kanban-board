function WelcomeMessage({ name }) {
    return (<h1 style={{color: 'red'}}>Добро пожаловать на наш сайт, {name || "пользователь"}!</h1>)
  }
  
  export default WelcomeMessage;