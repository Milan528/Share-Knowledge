import React from 'react'
import { StyledButton, buttonSize } from './styles'
import { CreatePostContainer } from './styles'

const CreatePost = () => {
  return (
    <CreatePostContainer>
      <h2>Imaš pitanje ili material?</h2>
      <StyledButton marginLeft="8px" backgroudColor="#18d4de" textColor='white' size={buttonSize.md}>KREIRAJ OBJAVU</StyledButton>
    </CreatePostContainer>
  )
}

export default CreatePost