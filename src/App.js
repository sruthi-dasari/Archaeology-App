import "./App.css";

import { Component } from "react";

import {
  MainContainer,
  DescriptionContainer,
  MainHeading,
  LikeShareViewContainer,
  IconAndCountContainer,
  IconContainer,
  HeartIcon,
  ShareIcon,
  ViewIcon,
  CountText,
  ImageDisplayContainer,
  KeyValueContainer,
  KeyValuePair,
  DescriptionHeading,
  DescriptionText,
  ReadMoreContainer,
  ArrowIcon,
  ReadMoreText,
  ButtonsContainer,
  BrownButton,
  TransparentButton,
  StatueImage,
} from "./styledComponents";

class App extends Component {
  render() {
    console.log("In App.js render()");

    return (
      <MainContainer>
        <DescriptionContainer>
          <MainHeading>
            MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)
          </MainHeading>
          <LikeShareViewContainer>
            <IconAndCountContainer>
              <IconContainer>
                <HeartIcon></HeartIcon>
              </IconContainer>
              <CountText>0</CountText>
            </IconAndCountContainer>
            <IconAndCountContainer>
              <IconContainer>
                <ShareIcon></ShareIcon>
              </IconContainer>
              <CountText>120</CountText>
            </IconAndCountContainer>
            <IconAndCountContainer>
              <IconContainer>
                <ViewIcon></ViewIcon>
              </IconContainer>
              <CountText>27</CountText>
            </IconAndCountContainer>
          </LikeShareViewContainer>
          <KeyValueContainer>
            <KeyValuePair>Dynasty: Ahichchhatra</KeyValuePair>
            <KeyValuePair>Period: 200 CE</KeyValuePair>
            <KeyValuePair>Material: Sandstone</KeyValuePair>
            <KeyValuePair>Location: National Museum</KeyValuePair>
          </KeyValueContainer>
          <DescriptionHeading>Description:</DescriptionHeading>
          <DescriptionText>
            Maitreya, the future Buddha to be, resides in the Tushita heaven as
            a bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is
            the eighth Buddha, a successor of the seven historical
            Buddhas(sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya
            Buddha will be born in ketumati, in present-day Varanasi, Uttar
            Pradesh. As a bodhisattva, Maitreya wears a heavily adorned with
            earings, wristlets, necklaces and an amulet. The
          </DescriptionText>
          <ReadMoreContainer>
            <ArrowIcon />
            <ReadMoreText>Read More</ReadMoreText>
          </ReadMoreContainer>
          <ButtonsContainer>
            <BrownButton type="button">ADD TO COLLECTIONS</BrownButton>
            <TransparentButton type="button">SOUVENIR</TransparentButton>
          </ButtonsContainer>
        </DescriptionContainer>
        <ImageDisplayContainer>
          <StatueImage
            src="https://res.cloudinary.com/my-cloud123/image/upload/v1692708978/img3_h2ewuj.png"
            alt="statue"
          />
        </ImageDisplayContainer>
      </MainContainer>
    );
  }
}

export default App;
