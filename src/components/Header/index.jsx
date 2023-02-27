import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DarkLogo from '../../assets/dark-logo.png'
import { StyledLink } from '../../Utils/style/Atoms'
import { useTheme } from '../../Utils/hooks'
import LightLogo from '../../assets/light-logo.png'

const HomeLogo = styled.img`
    height: 70px;
`

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function Header() {
    const { theme } = useTheme()

    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} />
            </Link>
            <div>
                <StyledLink $theme={theme} to="/">
                    Accueil
                </StyledLink>
                <StyledLink $theme={theme} to="/freelances">
                    Profils
                </StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header
