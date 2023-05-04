import sacola from '../../imagens/sacola.svg'
import perfil from '../../imagens/perfil.svg'
import styled from 'styled-components'

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
  align-items: center;
`

const Icones = styled.ul`
  display: flex;
  margin-top: 30px;
`

const icones = [perfil, sacola]

function iconesHeader(){

   return(<Icones>
          { icones.map((icone) => (
            <Icone><img src={icone}></img></Icone>
          ))}
          </Icones>) 
}

export default iconesHeader