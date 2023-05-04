import Logo from '../../componentes/Logo'
import Opcoes from '../../componentes/opcoesHeader'
import IconesHeader from '../../componentes/iconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`
function Header(){

    return(
        <HeaderContainer>
            <Logo/>
            <Opcoes/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header