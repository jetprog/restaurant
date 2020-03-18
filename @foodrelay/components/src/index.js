//require("./docs/index.js");

export { default as Colors } from "./rules/colors";
export { default as Shadows } from "./rules/shadows";
export { default as Animation } from "./rules/animation";
export { default as Spacing } from "./rules/spacing";
export { default as BorderRadius } from "./rules/borderRadius";
export { default as Typography } from "./rules/typography";

// Utils
export { composeOrderName } from "./utils/text";

//Higher Order Components
export { default as withDeadline } from "./hocs/withDeadline";

// Translations
export { default as en } from "./i18n/en";
export { default as fr } from "./i18n/fr";
export { getTranslation } from "./i18n/utils";

// Buttons
export { default as Button } from "./components/Button";
export { default as IconButton } from "./components/IconButton";
export { default as TextButton } from "./components/TextButton";
export { default as SubmitButton } from "./components/SubmitButton";
export { default as ButtonLink } from "./components/ButtonLink";

// Calendar
export { default as Calendar } from "./components/Calendar";
export { default as CalendarDay } from "./components/CalendarDay";
export { default as CalendarNav } from "./components/CalendarNav";
export { default as CalendarOrderCard } from "./components/CalendarOrderCard";
export {
  default as CalendarOrderDetail
} from "./components/CalendarOrderDetail";

// Tables
//export { default as Table } from "./components/Table"
//export { default as TableBody } from "./components/TableBody"
//export { default as TableCell } from "./components/TableCell"
//export { default as TableRow } from "./components/TableRow"
//export { default as TableHead } from "./components/TableHead"
//export { default as TableSortLabel } from "./components/TableSortLabel"

// Data
export { default as Numbers } from "./components/Numbers";

// Order
export { default as AdditionalItems } from "./components/AdditionalItems";
export { default as PaymentMethod } from "./components/PaymentMethod";
export { default as OrderSummary } from "./components/OrderSummary";

// Layout
export { default as Page } from "./components/Page";
export { default as PageContent } from "./components/PageContent";

// Forms
export { default as LinkField } from "./components/LinkField";

// Navigation and titles
export { default as Title } from "./components/Title";
export { default as PersonaBar } from "./components/PersonaBar";
export { default as TopBar } from "./components/TopBar";
export { default as DropDownMenu } from "./components/DropDownMenu";
export { default as ExtraMenu } from "./components/ExtraMenu";
export { default as Footer } from "./components/Footer";
export { default as SecondaryNav } from "./components/SecondaryNav";
//export { default as InfoBar } from "./components/InfoBar"
//export { default as PhotoHeader } from "./components/PhotoHeader"

// User
export { default as Photo } from "./components/Photo";
export { default as Roles } from "./components/Roles";
export { default as UserCard } from "./components/UserCard";
export { default as ProfilePopup } from "./components/ProfilePopup";

// Text elements
export { default as Dollars } from "./components/Dollars";
export { default as ShortText } from "./components/ShortText";
export { default as Tags } from "./components/Tags";
//export { default as Price } from "./components/Price"

// Cards
export { default as MenuCard } from "./components/MenuCard";
export { default as PlateCard } from "./components/PlateCard";
//export { default as FoodOptionCard } from "./components/FoodOptionCard"
//export { default as PurchaseCard } from "./components/PurchaseCard"
//export { default as UserCard } from "./components/UserCard";
//export { default as PlateCardDetail } from "./components/PlateCardDetail"

// Indicators and notification
export {
  default as OrderStateIndicator
} from "./components/OrderStateIndicator";
export { default as RebateIndicator } from "./components/RebateIndicator";
export { default as RoleIndicator } from "./components/RoleIndicator";
export { default as SpicyIndicator } from "./components/SpicyIndicator";
export { default as PlateTypeIndicator } from "./components/PlateTypeIndicator";
export { default as Hint } from "./components/Hint";
export { default as Tag } from "./components/Tag";
//export { default as NotificationBanner } from "./components/NotificationBanner"

// Loading
export { default as LoadingItem } from "./components/LoadingItem";
export { default as ErrorBoundary } from "./components/ErrorBoundary";

// Modals
//export { default as TopPanel } from "./components/TopPanel"
