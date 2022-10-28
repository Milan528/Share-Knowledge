import React from 'react'
import { StyledButton, buttonSize, FlexContainer } from '../../../../../../components/styles'

const Fliters = () => {
  return (

    <FlexContainer>
      <h2>Imaš pitanje ili material?</h2>
      <StyledButton backgroudColor="#18d4de" textColor='white' size={buttonSize.md}>Pretraži</StyledButton>
    </FlexContainer>

  )
}

export default Fliters