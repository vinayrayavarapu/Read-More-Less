import {useState} from 'react'
import styled from 'styled-components'

const ReadMore = props => {
  const [readMore, setReadMore] = useState(false)
  const {reactHooksDescription} = props
  const slicedText = reactHooksDescription.slice(0, 170)

  const handleClick = () => setReadMore(!readMore)
  return (
    <MainContainer>
      <TopContainer>
        <Heading>React Hooks</Heading>
        <Text>Hooks are a new addition to React</Text>
      </TopContainer>
      <BottomContainer>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Text>{readMore ? reactHooksDescription : slicedText}</Text>
        <Button onClick={handleClick}>
          {readMore ? 'Read Less' : 'Read More'}
        </Button>
      </BottomContainer>
    </MainContainer>
  )
}

export default ReadMore

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TopContainer = styled.div``
const Heading = styled.h1`
  font-family: Roboto;
`
const Text = styled.p``
const BottomContainer = styled.div`
  width: 500px;
`
const Image = styled.img`
  height: 300px;
`
const Button = styled.button``
