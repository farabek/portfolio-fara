import styled from 'styled-components';
import {theme} from '../../../styles/Theme';
import {font} from '../../../styles/Common';

const Main = styled.section`
  min-height: 100vh;
  background-color: #fff5e7;
  display: flex;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  
  &::before {
    content: "";
    width: 290px;
    height: 374px;
    border: 5px solid ${theme.colors.accent};
    
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    @media ${theme.media.mobile} {
      width: 244px;
      height: 324px;
      top: -17px;
      left: 20px;
    }
  }

  @media ${theme.media.mobile} {
    margin-top: 65px;
  }
  
`

const Photo = styled.img`
    width: 280px;
    height: 344px;
    object-fit: cover;
    margin-right: 20px;
  
  @media ${theme.media.mobile} {
    width: 240px;
    height: 294px;
  }
`

const MainTitle = styled.h1`
  ${font({weight: 400, Fmax: 27, Fmin: 20})};
  
  p {
    display: none;
  }
`

const Name = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
  letter-spacing: 0.05em;
  margin: 10px 0;
  
  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;
    
    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
  
  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`

const SmallText = styled.h2`
  font-weight: 400;
  font-size: 14px;
`

const Education = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 24px;
  font-size: 16px;

  strong {
    font-size: 20px;
    color: ${theme.colors.accent};
  }
`

export const S = {
    Main,
    PhotoWrapper,
    Photo,
    MainTitle,
    Name,
    SmallText,
    Education
}
