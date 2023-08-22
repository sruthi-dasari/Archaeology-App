import styled from "styled-components";

import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineEye,
  AiOutlineArrowRight,
} from "react-icons/ai";

export const MainContainer = styled.div`
  display: flex;
  padding: 40px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 30vw;
  flex-direction: column;
`;

export const MainHeading = styled.h1`
  display: flex;
  font-family: "Roboto";
  font-size: 25px;
`;

export const LikeShareViewContainer = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-between;
`;

export const IconAndCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  background-color: #c6cdcf;
  height: 35px;
  width: 35px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;

export const HeartIcon = styled(AiOutlineHeart)`
  display: flex;
`;

export const ShareIcon = styled(AiOutlineShareAlt)`
  display: flex;
`;

export const ViewIcon = styled(AiOutlineEye)`
  display: flex;
`;

export const CountText = styled.p`
  margin-top: 5px;
  font-size: 17px;
  color: black;
  font-weight: 500;
`;

export const KeyValueContainer = styled.div``;

export const KeyValuePair = styled.p`
  color: #939696;
  font-weight: 700;
  font-size: 16px;
  margin: 7px;
  margin-left: 0px;
`;

export const DescriptionHeading = styled.h1`
  font-family: "Roboto";
  font-size: 18px;
`;

export const DescriptionText = styled.p`
  color: #939696;
  font-weight: 700;
  font-size: 16px;
  margin: 7px;
  margin-left: 0px;
`;

export const ReadMoreContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowIcon = styled(AiOutlineArrowRight)`
  color: #ab6533;
`;

export const ReadMoreText = styled.h1`
  font-family: "Roboto";
  font-size: 18px;
  color: #ab6533;
`;

export const ButtonsContainer = styled.div``;

export const BrownButton = styled.button`
  background-color: #ab6533;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  margin-right: 10px;
  font-size: 12px;
`;

export const TransparentButton = styled.button`
  background-color: #ffffff;
  color: #ab6533;
  padding: 10px;
  border: 1px solid #ab6533;
  border-radius: 5px;
  font-weight: 800;
  font-size: 12px;
`;

export const ImageDisplayContainer = styled.div`
  //   background-image: linear-gradient(to left, #1c1c1b, #575350, #7a7572);
  background-image: url("https://res.cloudinary.com/my-cloud123/image/upload/v1692708641/img2_dxpnsi.jpg");
  background-size: cover;
  width: ${(props) => (props.displayDesc ? "100vw" : "70vw")};
  height: 100vh;
  display: grid;
`;

export const StatueImage = styled.img`
  height: 400px;
  width: 400px;
  justify-self: center;
`;

export const ArrowButton = styled.button`
  height: 30px;
  width: 40px;
  justify-content: flex-start;
  align-self: flex-start;
  margin-top: 50px;
`;
