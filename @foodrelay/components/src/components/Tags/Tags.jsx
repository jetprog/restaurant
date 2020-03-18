import React from "react";
import styled, { css, cx } from "react-emotion";
import { injectIntl, FormattedMessage } from "react-intl";

// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const Tags = ({
  restrictions,
  display = "all",
  size = "default",
  isPassed = false,
  intl
}) => {
  if (restrictions) {
    return (
      <TagContainer
        className={cx({ [Small]: size === "small" }, { [Past]: isPassed })}
      >
        {restrictions.is_vegan && (display == "all" || display == "diet") && (
          <RestrictionTag>
            <FormattedMessage id="dietTag.vegan" defaultMessage={`Vegan`} />
          </RestrictionTag>
        )}
        {restrictions.is_vegetarian && (display == "all" || display == "diet") && (
          <RestrictionTag>
            <FormattedMessage
              id="dietTag.vegetarian"
              defaultMessage={`Vegetarian`}
            />
          </RestrictionTag>
        )}
        {(restrictions.is_gluten_free || !restrictions.has_gluten) &&
          (display == "all" || display == "diet") && (
            <RestrictionTag>
              <FormattedMessage
                id="dietTag.gluten_free"
                defaultMessage={`Gluten Free`}
              />
            </RestrictionTag>
          )}
        {restrictions.has_milk && (display == "all" || display == "allergy") && (
          <AllergyTag>
            <FormattedMessage
              id="allergyTag.has_dairy"
              defaultMessage={`Contains dairy`}
            />
          </AllergyTag>
        )}
        {(restrictions.has_gluten || restrictions.is_gluten_free == false) &&
          (display == "all" || display == "allergy") && (
            <AllergyTag>
              <FormattedMessage
                id="allergyTag.has_gluten"
                defaultMessage={`Contains gluten`}
              />
            </AllergyTag>
          )}
        {restrictions.has_soy && (display == "all" || display == "allergy") && (
          <AllergyTag>
            <FormattedMessage
              id="allergyTag.has_soybeans"
              defaultMessage={`Contains Soybeans`}
            />
          </AllergyTag>
        )}
        {restrictions.has_shellfish &&
          (display == "all" || display == "allergy") && (
            <AllergyTag>
              <FormattedMessage
                id="allergyTag.has_shellfish"
                defaultMessage={`Contains Shellfish`}
              />
            </AllergyTag>
          )}
        {restrictions.has_corn && (display == "all" || display == "allergy") && (
          <AllergyTag>
            <FormattedMessage
              id="allergyTag.has_corn"
              defaultMessage={`Contains corn`}
            />
          </AllergyTag>
        )}
        {restrictions.has_nuts && (display == "all" || display == "allergy") && (
          <AllergyTag>
            <FormattedMessage
              id="allergyTag.has_nuts"
              defaultMessage={`Contains tree nuts`}
            />
          </AllergyTag>
        )}
        {restrictions.has_eggs && (display == "all" || display == "allergy") && (
          <AllergyTag>
            <FormattedMessage
              id="allergyTag.has_eggs"
              defaultMessage={`Contains eggs`}
            />
          </AllergyTag>
        )}
        {restrictions.has_peanuts &&
          (display == "all" || display == "allergy") && (
            <AllergyTag>
              <FormattedMessage
                id="allergyTag.has_peanuts"
                defaultMessage={`Contains peanuts`}
              />
            </AllergyTag>
          )}
        {restrictions.has_pork && (display == "all" || display == "allergy") && (
          <AllergyTag>
            <FormattedMessage
              id="allergyTag.has_pork"
              defaultMessage={`Contains pork`}
            />
          </AllergyTag>
        )}
        {restrictions.has_fish && (display == "all" || display == "allergy") && (
          <AllergyTag>
            <FormattedMessage
              id="allergyTag.has_fish"
              defaultMessage={`Contains fish`}
            />
          </AllergyTag>
        )}
        {restrictions.has_alcohol &&
          (display == "all" || display == "allergy") && (
            <AllergyTag>
              <FormattedMessage
                id="allergyTag.has_alcohol"
                defaultMessage={`Contains alcohol`}
              />
            </AllergyTag>
          )}
      </TagContainer>
    );
  } else {
    return <div />;
  }
};

const TagContainer = styled("div")`
  padding: ${Spacing.md} 0 ${Spacing.sm} 0;
`;

const RestrictionTag = styled("div")`
  padding: ${Spacing.xs} ${Spacing.sm};
  border-radius: ${BorderRadius.sm};
  background: ${Colors.secondary.mushrooms.default};
  color: ${Colors.secondary.eggplant.darker};
  margin: 0 ${Spacing.sm} ${Spacing.md} 0;
  font-family: ${Typography.small.fontFamily};
  font-size: ${Typography.small.fontSize};
  display: inline-block;
  font-size: 12px;
`;

const AllergyTag = styled("div")`
  padding: ${Spacing.xs} ${Spacing.sm};
  border-radius: ${BorderRadius.sm};
  background: ${Colors.primary.squash.lighter};
  color: ${Colors.utility.white.default};
  margin: 0 ${Spacing.sm} ${Spacing.md} 0;
  font-family: ${Typography.small.fontFamily};
  font-size: ${Typography.small.fontSize};
  display: inline-block;
  font-size: 12px;
`;

const Small = css`
  padding: 0;
  font-weight: bold;
  font-family: ${Typography.small.fontFamily};
  font-size: ${Typography.small.fontSize};

  div {
    padding: 2px ${Spacing.sm};
    border-radius: 12px;
    margin-bottom: 8px;
  }
`;
const Past = css`
  div {
    color: ${Colors.secondary.eggplant.lighter};
    background: ${Colors.secondary.mushrooms.default}90;
  }
`;

export default injectIntl(Tags);
