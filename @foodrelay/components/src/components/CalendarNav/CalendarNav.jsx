import React from "react";
import moment from "moment";
import styled, { css, cx, keyframes } from "react-emotion";
import { injectIntl, formatMessage } from "react-intl";
import { isMobile } from "react-device-detect";
import { isToday, isPast } from "../../utils/time.js";
// Atoms
import { NavLink, Link } from "react-router-dom";
import ButtonLink from "../ButtonLink";
import Button from "../Button";
import DropDownMenu from "../DropDownMenu";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const getMobileDayClass = date => {
  let class_name = Future;
  if (isToday(date)) {
    class_name = Present;
  } else if (isPast(date)) {
    class_name = Past;
  }
  return class_name;
};

class CalendarNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropDownShown: false, left: 0, touchStartX: 0 };
  }

  componentDidMount() {}

  handleChangeWeek() {}

  handleTouchStart() {
    console.log("touch start");
  }

  handleTouchMove() {
    console.log("touch move");
  }

  handleTouchEnd() {
    console.log("touch end");
  }

  toggleDropDown = () => {
    this.setState({
      dropDownShown: !this.state.dropDownShown
    });
  };

  render() {
    const {
      weekDates = [],
      view = "week",
      showToggle = true,
      orders,
      previousLink,
      nextLink,
      dayLink,
      filters,
      buttons,
      leftButtons,
      weeklyNavLock,
      isLoading,
      date,
      intl,
      forceMobile = false,
      baseUrl
    } = this.props;

    const { dropDownShown } = this.state;

    let month = "";
    let class_name = Future;
    let isNextDisabled = false;
    let showMobile = isMobile;
    let nextDayLink = "";
    let previousDayLink = "";
    let todayLink = "/";
    let root = "/";
    let dayBaseUrl = baseUrl;
    let weekBaseUrl = baseUrl;

    const todayLabel = intl.formatMessage({
      id: "calendarNav.today"
    });
    const dayLabel = intl.formatMessage({
      id: "calendarNav.day"
    });
    const weekLabel = intl.formatMessage({
      id: "calendarNav.week"
    });
    console.log("base url");
    console.log(baseUrl);

    if (baseUrl) {
      root = "/" + baseUrl.split("/")[1] + "/";
      // switch from day to week and back
      if (baseUrl.includes("day")) {
        dayBaseUrl = baseUrl;
        weekBaseUrl = baseUrl.replace("day", "week");
      } else if (baseUrl.includes("week")) {
        dayBaseUrl = baseUrl.replace("week", "day");
        weekBaseUrl = baseUrl;
      } else {
        weekBaseUrl = root + "week/";
        dayBaseUrl = root + "day/";
      }
    }

    if (date && moment.isMoment(date)) {
      month = date.format("MMMM YYYY");
      // create next previous links on day mode
      // monday skip to friday on previous
      if (date.isoWeekday() == 1) {
        previousDayLink =
          root +
          "day/" +
          date
            .clone()
            .subtract(3, "day")
            .format("YYYY-MM-DD") +
          "/";
      } else {
        previousDayLink =
          root +
          "day/" +
          date
            .clone()
            .subtract(1, "day")
            .format("YYYY-MM-DD") +
          "/";
      }
      // friday skip to monday on next
      if (date.isoWeekday() == 5) {
        nextDayLink =
          root +
          "day/" +
          date
            .clone()
            .add(3, "day")
            .format("YYYY-MM-DD") +
          "/";
      } else {
        nextDayLink =
          root +
          "day/" +
          date
            .clone()
            .add(1, "day")
            .format("YYYY-MM-DD") +
          "/";
      }
    }

    if (view == "day") {
      todayLink = root + "day/";
    } else {
      todayLink = root + "week/";
    }

    if (weeklyNavLock) {
      const lockDate = moment()
        .startOf("week")
        .add(weeklyNavLock - 1, "w");
      if (weekDates && weekDates.length > 0) {
        isNextDisabled = moment(weekDates[0]).isSameOrAfter(lockDate, "d");
      }
    }

    if (forceMobile) {
      showMobile = true;
    }

    if (!showMobile) {
      return (
        <Nav>
          <Wrap>
            <Row>
              {leftButtons && <ButtonsLeft>{leftButtons}</ButtonsLeft>}
              <BackToToday>
                <ButtonLink
                  to={todayLink}
                  label={todayLabel}
                  color="egg-shell"
                  disabled={!todayLink}
                />
              </BackToToday>
              {showToggle && (
                <Toggle>
                  <Button
                    onClick={this.toggleDropDown}
                    label={
                      view == "week" ? weekLabel : view == "day" && dayLabel
                    }
                    color="egg-shell"
                    iconRight="chevron-down"
                  />
                  <DropDownMenu
                    shown={dropDownShown}
                    padding={false}
                    position="left"
                    buttons={
                      <div onClick={this.toggleDropDown}>
                        <NavLink to={weekBaseUrl}>{weekLabel}</NavLink>
                        <NavLink to={dayBaseUrl}>{dayLabel}</NavLink>
                      </div>
                    }
                  />
                </Toggle>
              )}
              {view == "day" && !isMobile ? (
                <NavButtons>
                  <ButtonLink
                    to={previousDayLink}
                    label=""
                    color="transparent"
                    icon="arrow-left"
                    disabled={isLoading || !previousLink}
                  />
                  <ButtonLink
                    to={nextDayLink}
                    label=""
                    color="transparent"
                    iconRight="arrow-right"
                    disabled={isNextDisabled || isLoading || !nextLink}
                  />
                </NavButtons>
              ) : (
                <NavButtons>
                  <ButtonLink
                    to={previousLink}
                    label=""
                    color="transparent"
                    icon="arrow-left"
                    disabled={isLoading || !previousLink}
                  />
                  <ButtonLink
                    to={nextLink}
                    label=""
                    color="transparent"
                    iconRight="arrow-right"
                    disabled={isNextDisabled || isLoading || !nextLink}
                  />
                </NavButtons>
              )}

              <Month>{month}</Month>
              {filters && <Filters>{filters}</Filters>}
              {buttons && <Buttons>{buttons}</Buttons>}
            </Row>
          </Wrap>
        </Nav>
      );
    } else {
      return (
        <MobileNav>
          <Row className="top-section">
            <Left>
              <ButtonLink
                icon="arrow-left"
                label=""
                color="transparent"
                to={previousLink}
                disabled={isLoading || !previousLink}
              />
            </Left>
            <Right>
              <ButtonLink
                icon="arrow-right"
                label=""
                color="transparent"
                to={nextLink}
                disabled={isLoading || isNextDisabled || !nextLink}
              />
            </Right>
            <Month>{month}</Month>
          </Row>
          <Row
            className="markers"
            onTouchStart={touchStartEvent =>
              this.handleTouchStart(touchStartEvent)
            }
            onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
            onTouchEnd={() => this.handleTouchEnd()}
          >
            {weekDates.map((current_date, key) => (
              <Day
                key={key}
                className={cx(
                  { [getMobileDayClass(current_date)]: true },
                  { [Active]: current_date.isSame(date, "day") }
                )}
                to={root + "day/" + current_date.format("YYYY-MM-DD") + "/"}
              >
                <WeekDay>{current_date.format("dd").charAt(0)}</WeekDay>
                <Date className={cx({ [Loading]: isLoading })}>
                  {current_date.format("D")}
                </Date>
              </Day>
            ))}
          </Row>
        </MobileNav>
      );
    }
  }
}

// Styles

const Nav = styled("div")`
  border-bottom: 2px solid ${Colors.secondary.mushrooms.default}75;
  padding: ${Spacing.md} 0;
`;

const Wrap = styled("div")`
  padding: 0 ${Spacing.lg};
  box-sizing: border-box;
  position: relative;
`;

const Row = styled("div")`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`;

const BackToToday = styled("div")`
  a {
    margin-right: ${Spacing.md};
  }
`;

const NavButtons = styled("div")`
  display: inline-block;

  a,
  span {
    border-radius: 50%;
    padding: ${Spacing.sm} 11px;

    svg,
    svg.icon-right {
      margin: 0;
    }
  }

  span.disabled {
    background: transparent;
  }
`;

const Filters = styled("div")`
  margin-left: ${Spacing.md};
`;

const Buttons = styled("div")`
  margin-left: auto;
  a {
    margin-right: ${Spacing.md};
  }
  a:last-child {
    margin-right: 0;
  }
`;

const ButtonsLeft = styled("div")`
  a {
    margin-right: ${Spacing.md};
  }
`;

const Toggle = styled("div")`
  margin-right: ${Spacing.md};
  display: inline-block;
  position: relative;

  .dropdown-menu-wrap {
    position: absolute;
    left: -8px;
    top: 22px;
  }
`;

const Month = styled("div")`
  color: ${Colors.secondary.eggplant.default};
  line-height: 35px;
  margin-left: ${Spacing.md};
  display: inline-block;
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};
  text-transform: capitalize;
`;
const MobileNav = styled("div")`
  padding: 8px 16px;
  background: #fff;

  h4 {
    margin: 8px 0;
    text-transform: capitalize;
    color: #4f1d28;
  }

  .markers {
    margin: 0;
  }
  .top-section {
    margin: 0 8px;
  }
`;

const Left = styled("div")`
  flex: 1;
  text-align: left;
  max-width: 35px;
  .button-link {
    text-decoration: none;
    border: 0;
    background: transparent !important;
    padding: 8px;
    border-bottom: 0;
    margin: 0;
    svg {
      margin-left: 0;
      margin-right: 0;
    }
  }
  a:hover {
    border-bottom: 0;
  }
`;
const Right = styled("div")`
  flex: 1;
  text-align: right;
  max-width: 35px;
  .button-link {
    text-align: right;
    text-decoration: none;
    background: transparent !important;
    border: 0;
    padding: 8px;
    border-bottom: 0;
    margin: 0;
    svg {
      margin-left: 0;
      margin-right: 0;
    }
  }
  a:hover {
    border-bottom: 0;
  }
`;

const Day = styled(Link)`
  flex: 1;
  margin-top: 8px;
  position: relative;
  border-radius: 18px;
  height: 35px;
  display: flex;
  background: ${Colors.utility.white.default};
  font-family: ${Typography.body.fontFamily};
  flex-direction: row;
  padding: 0 0 0 ${Spacing.sm};
  box-sizing: border-box;
  text-decoration: none;
  color: ${Colors.utility.black.default};
  font-weight: bold;
`;

const Date = styled("div")`
  font-size: 12px;
  opacity: 0.5;
  text-align: left;
  margin-left: 0;
  line-height: 35px;
  width: 30px;
  position: relative;
  animation: ${appearDate} 0.3s ease normal forwards;
  top: 0;
`;

const WeekDay = styled("div")`
  font-size: 18px;
  width: 30px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  text-transform: uppercase;
`;

const appear = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const appearDate = keyframes`
  0% {opacity: 0; margin-left:5px;}
  100% {opacity: 0.5; margin-left:-5px;}
`;

const Loading = css`
  display: none;
`;

const LoadingWeekDate = css`
  color: #bfbcbc;
  opacity: 1;
  background: transparent;
`;

const Past = css`
  color: ${Colors.utility.black.default};
  opacity: 0.5;
`;

const Present = css`
  color: ${Colors.secondary.eggplant.default};
  opacity: 1;
`;
const Future = css`
  opacity: 1;
`;

const Active = css`
  background: #f5daad;
  color: #4f1d28;
`;

export default injectIntl(CalendarNav);
