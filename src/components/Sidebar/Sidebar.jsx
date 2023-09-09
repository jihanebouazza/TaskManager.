import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import ActiveLink from "./ActiveLink";
import UserInfo from "./UserInfo";

// line chart no data
// sidebar user with image name and email
// sidebar position

function Sidebar({ CurActive }) {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <ActiveLink CurActive={CurActive} />
      <UserInfo />
    </div>
  );
}

export default Sidebar;
