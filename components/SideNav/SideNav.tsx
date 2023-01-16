import Link from "next/link";

const SideNav = () => {
  return (
    <nav>
      <Link href="/app">LOGO</Link>
      <ul>
        <li>
          <Link href="/app/project-expenses">Project Expenses</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
