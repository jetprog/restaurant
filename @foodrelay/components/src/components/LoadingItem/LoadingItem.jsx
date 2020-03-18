import React from "react";
import styled, { css, cx, keyframes } from "react-emotion";
import { BarLoader } from "react-spinners";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const LoadingItem = ({ loading, type }) => {
  if (type) {
    switch (type) {
      case "title":
        return (
          <LoadingTitle>
            <BarLoader color={"#f5daad"} loading={loading} />
          </LoadingTitle>
        );
        break;
      case "text":
        return (
          <LoadingText>
            <BarLoader color={"#f5daad"} loading={loading} />
          </LoadingText>
        );
        break;
      case "order":
        return (
          <LoadingOrder>
            <BarLoader color={"#f5daad"} loading={loading} />
          </LoadingOrder>
        );
        break;
      case "menu":
        return (
          <LoadingOrder>
            <BarLoader color={"#f5daad"} loading={loading} />
          </LoadingOrder>
        );
        break;
      case "plate":
        return (
          <LoadingPlate>
            <BarLoader color={"#f5daad"} loading={loading} />
          </LoadingPlate>
        );
        break;
      case "food_option":
        return (
          <LoadingFoodOption>
            <BarLoader color={"#123abc"} loading={loading} />
          </LoadingFoodOption>
        );
        break;
      case "user":
        return (
          <LoadingUser>
            <div className="profile-pic">
              <BarLoader color={"#123abc"} loading={loading} />
            </div>
            <div className="name">
              <BarLoader color={"#123abc"} loading={loading} />
            </div>
          </LoadingUser>
        );
      default:
        return (
          <LoadingText>
            <BarLoader color={"#123abc"} loading={loading} />
          </LoadingText>
        );
        break;
    }
  }
};

const appear = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const LoadingTitle = styled("div")`
  min-width: 200px;
  max-width: 300px;
  min-height: 30px;
  margin: 24px 0;
  border-radius: 4px;
  background: #fcf7f0;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;

  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fcf7f0;
  }

  div div {
    background: #f5daad;
    filter: blur(20px);
  }
`;

const LoadingText = styled("div")`
  min-width: 150px;
  max-width: 250px;
  min-height: ${Spacing.md};
  margin: ${Spacing.md} 0;
  border-radius: 4px;
  background: #fcf7f0;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;

  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fcf7f0;
  }

  div div {
    background: #f5daad;
    filter: blur(20px);
  }
`;

const LoadingOrder = styled("div")`
  flex: 1;
  min-width: calc(50% - 24px);
  max-width: calc(50% - 24px);
  margin: 12px;
  min-height: 300px;
  border-radius: 4px;
  background: #fcf7f0;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;

  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fcf7f0;
  }
`;

const LoadingPlate = styled("div")`
  flex: 1;
  min-width: calc(33.33333% - 24px);
  max-width: calc(33.33333% - 24px);
  margin: 12px;
  min-height: 150px;
  border-radius: 4px;
  background: #fcf7f0;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;

  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fcf7f0;
  }
`;

const LoadingFoodOption = styled("div")`
  width: 100%;
  height: 90px;
  border-radius: 4px;
  background: #f0f0f0;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  opacity: 0;
  animation: ${appear} 0.3s ease normal forwards;

  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fcf7f0;
  }

  div div {
    background: #f5daad25;
    filter: blur(20px);
  }
`;

const LoadingUser = styled("div")`
  margin: 12px;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: row;
  max-width: calc(25% - 24px);
  min-width: calc(25% - 24px);

  .profile-pic {
    flex: 1;
    max-width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 50%;
    margin-right: 16px;
    overflow: hidden;
    background: #f0f0f0;
    position: relative;
  }

  .name {
    flex: 1;
    border-radius: 4px;
    overflow: hidden;
    background: #fcf7f0;
    position: relative;
    max-height: 16px;
    margin-top: 8px;
  }

  .profile-pic div,
  .name div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fcf7f0;
  }

  .profile-pic div div,
  .name div div {
    background: #f5daad25;
    filter: blur(20px);
  }
`

export default LoadingItem;
