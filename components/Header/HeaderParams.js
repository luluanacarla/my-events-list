import LeftButtons from "./LeftButtons";

const HeaderParams = styles => ({
  headerLeft: LeftButtons(styles.tint.color),
  headerTitleStyle: styles.title,
  headerTintColor: styles.tint.color,
  headerStyle: styles.header,
  headerLeftContainerStyle: styles.headerLeft,
  headerRightContainerStyle: styles.headerRight
});

export default HeaderParams;
