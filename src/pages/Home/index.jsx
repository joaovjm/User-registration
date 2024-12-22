import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const Users = [
    {
      id: '4541351535',
      name: 'João',
      age: '32',
      email: 'joao.oliveira18.jm@gmail.com'
    },
    {
      id: '1614684445',
      name: 'Leandro',
      age: '37',
      email: 'leandroamoedo@gmail.com'

    },
    {
      id: '1614683345',
      name: 'Carlos',
      age: '31',
      email: 'caboliverkung@gmail.com'

    },
    {
      id: '1614683345',
      name: 'Pedro',
      age: '67',
      email: 'pedropaulo@gmail.com'
    }];

  return (
    <>
      <div className='container'>
        <form>
          <h1>Cadastro de Usuário</h1>
          <input placeholder='Nome' name='nome' type='text' />
          <input placeholder='Idade' name='idade' type='number' />
          <input placeholder='E-mail' name='email' type='email' />
          <button type='button'>Cadastrar</button>
        </form>

        {Users.map((user) => (
          <div className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button>
              <img src={Trash}/>
            </button>
          </div>
        ))};

      </div>
    </>
  )
}

export default Home
