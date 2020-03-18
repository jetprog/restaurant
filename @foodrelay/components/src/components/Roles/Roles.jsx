import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextButton from "../TextButton";
import Button from "../Button";
import styled, { css, cx } from "react-emotion";
import { injectIntl, formatMessage } from "react-intl";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";
// Atoms
import RoleIndicator from "../RoleIndicator";

class Roles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { roles, edit, create, business_admin, persona, intl } = this.props;
    let business_label = intl.formatMessage({
      id: "roles.business"
    });
    let edit_role_label = intl.formatMessage({
      id: "roles.edit_role"
    });
    let create_role_label = intl.formatMessage({
      id: "roles.create_role"
    });
    console.log(roles);
    if (roles) {
      return (
        <RolesList>
          <Header>
            <Row>
              <HeaderItem flex="2">{business_label}</HeaderItem>
              <HeaderItem flex="2">Role</HeaderItem>
              <HeaderItem flex="1" />
            </Row>
          </Header>
          {roles.map(
            (role, k) =>
              ((role !== undefined &&
                role.role &&
                role.role.value !== "Archived") ||
                persona === "manager") && (
                <BusinessRole key={k}>
                  <Row>
                    <RoleRowItem flex="2">
                      {role && role.business && role.business.name}
                    </RoleRowItem>
                    <RoleRowItem flex="2">
                      <RoleIndicator role={role} />
                    </RoleRowItem>
                    {edit &&
                      (persona === "manager" ||
                        (persona === "admin" &&
                          role &&
                          role.business &&
                          business_admin === role.business.id)) && (
                        <RoleRowItem flex="1">
                          <TextButton
                            label={edit_role_label}
                            onClick={() => edit(role)}
                          />
                        </RoleRowItem>
                      )}
                  </Row>
                </BusinessRole>
              )
          )}
          {create && <Button label={create_role_label} onClick={create} />}
        </RolesList>
      );
    } else {
      return (
        <RolesList>
          <Header>
            <Row>
              <HeaderItem>{business_label}</HeaderItem>
              <HeaderItem>Role</HeaderItem>
            </Row>
          </Header>
          <EmptyState>No businesses</EmptyState>
          {create && <Button label="Create new role" onClick={create} />}
        </RolesList>
      );
    }
  }
}

// Styles
const RolesList = styled("div")`
  max-width: 400px;
`;
const Header = styled("div")`
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.small.fontSize};
  color: ${Colors.secondary.eggplant.default};
  opacity: 0.5;
  padding-bottom: ${Spacing.sm};
`;
const Row = styled("div")`
  display: flex;
  flex-directiion: row;
`;
const HeaderItem = styled("div")`
  flex: ${props => props.flex};
`;
const RoleRowItem = styled("div")`
  flex: ${props => props.flex};
  color: ${Colors.secondary.eggplant.default};

  a {
    padding: 0;
    line-height: 20px;
  }
`;
const BusinessRole = styled("div")`
  font-family: ${Typography.body.fontFamily};
  background: ${Colors.secondary.eggshell.default};
  padding: ${Spacing.sm} ${Spacing.md};
  border-radius: ${BorderRadius.sm};
  margin-bottom: ${Spacing.sm};
  line-height: 25px;
`;
const EmptyState = styled("div")`
  font-family: ${Typography.body.fontFamily};
  color: ${Colors.secondary.eggplant.default};
  background: ${Colors.secondary.eggshell.default};
  padding: ${Spacing.sm} ${Spacing.md};
  border-radius: ${BorderRadius.sm};
`;

export default injectIntl(Roles);
