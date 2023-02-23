import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../Utils/style/colors'

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`
const PageTitle = styled.h1`
    font-size: 30px;
    text-align: center;
    color: black;
    padding: 30px;
`

const SubTitle = styled.h2`
    color: ${colors.secondary};
    text-align: center;
    font-size: 20px;
    font-weight: normal;
    padding-bottom: 30px;
`

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
    {
        name: 'Lauren Ipsum',
        jobTitle: 'UX Designer',
        picture: DefaultPicture,
    },
]

function Freelances() {
    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <SubTitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </SubTitle>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </div>
    )
}

export default Freelances
