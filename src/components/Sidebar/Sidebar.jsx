import Logo from "../ui/Logo";
import styles from "./Sidebar.module.css";
import ActiveLink from "./ActiveLink";
import UserInfo from "./UserInfo";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <ActiveLink />
      <UserInfo />
    </div>
  );
}

export default Sidebar;
