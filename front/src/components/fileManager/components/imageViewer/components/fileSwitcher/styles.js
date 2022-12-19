import styled from 'styled-components';

export const ControlsContainer = styled.div`
  position: relative;
  margin-top: 0.2rem;
  height: 20%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlidesContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Slide = styled.div`
  flex: ${(props) => (props.isSelected ? '0.3' : '0.25')};
  min-width: 80px;
  height: ${(props) => (props.isSelected ? '95%' : '80%')};
  border: ${(props) => (props.isSelected ? '1px solid blue' : 'none')};
  cursor: pointer;

  margin: 5px;
  border-radius: 10px;
  background-image: ${(props) =>
    props.image ? `url(${props.image})` : 'transparent'};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
