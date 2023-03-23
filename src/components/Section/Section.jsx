import { MainContainer, Heading } from "./Section.styled"

export const Section = ({ title, children }) => {
    return <MainContainer><Heading>{title}</Heading>
    {children}
    </MainContainer>
}