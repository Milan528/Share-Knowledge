import React from 'react'
import { StyledButton, buttonSize } from './styles'
import { CreatePostContainer, StyledH2 } from './styles'

const CreatePost = () => {
  return (
    <CreatePostContainer>
      <StyledH2>Imaš pitanje ili material?</StyledH2>
      <StyledButton marginLeft="8px" backgroudColor="#18d4de" textColor='white' size={buttonSize.md}>KREIRAJ OBJAVU</StyledButton>
    </CreatePostContainer>
  )
}

export default CreatePost