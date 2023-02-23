import HomeBackground from '../../assets/home-illustration.svg'
import styled from 'styled-components'
import colors from '../../Utils/style/colors'
import { StyledLink } from '../../Utils/style/Atoms'

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const HomeContainer = styled.div`
    background-color: ${colors.background};
    margin: 30px;
    display: flex;
    padding: 60px 90px;
    flex-direction: row;
    max-width: 1200px;
`

const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    ${StyledLink} {
        max-width: 250px;
    }
`

const StyledTitle = styled.h2`
    padding-bottom: 30px;
    min-width: 280px;
    line-height: 50px;
`

const Illustration = styled.img`
    flex: 1;
`

function Home() {
    return (
        <HomeWrapper>
            <HomeContainer>
                <LeftCol>
                    <StyledTitle>
                        Repérez vos besions, on s'occupe du reste, avec les
                        meilleurs talents
                    </StyledTitle>
                    <StyledLink to="/survey/1" $isFullLink>
                        Faire le test !
                    </StyledLink>
                </LeftCol>
                <Illustration src={HomeBackground} />
            </HomeContainer>
        </HomeWrapper>
    )
}

export default Home
