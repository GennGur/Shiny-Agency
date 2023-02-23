import styled from 'styled-components'
import colors from '../../Utils/style/colors'
import ErrorIllustration from '../../assets/404.svg'

const ErrorWrapper = styled.div`
    margin: 3%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.background};
    align-items: center;
`
const ErrorTitle = styled.h1`
    font-weight: 300;
`
const ErrorSubTitle = styled.h2`
    font-weight: 300;
    color: black;
`
const Illustration = styled.img`
    max-width: 800px;
`

function Error() {
    return (
        <ErrorWrapper>
            <ErrorTitle>Oups...</ErrorTitle>
            <Illustration src={ErrorIllustration} />
            <ErrorSubTitle>Il semblerait qu'il y ait un problème</ErrorSubTitle>
        </ErrorWrapper>
    )
}

export default Error
