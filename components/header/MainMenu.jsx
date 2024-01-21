import Link from "next/link";

import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();
  const user = useSelector((state) => state.User.user);

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        {/* <li
          className={`${
            isActiveParentChaild(homeItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Home</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {homeItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        {/* End home page menu */}

        {/* <li className="menu-item-has-children -has-mega-menu">
          <a href="#">
            <span className="mr-10">Categories</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega">
            <CategoriesMegaMenu />
          </div>
        </li> */}
        {/* End categories menu items */}

        {/* <li className={router.pathname === "/destinations" ? "current" : ""}>
          <Link href="/destinations">Destinations</Link>
        </li> */}
        {/* End Destinatinos single menu */}

        {/* <li
          className={`${
            isActiveParentChaild(blogItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Blog</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {blogItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        {/* End blogIems */}

        {/* <li
          className={`${
            isActiveParentChaild(pageItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Pages</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {pageItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        {/* End pages items */}

        {/* <li
          className={`${
            isActiveParentChaild(dashboardItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Dashboard</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav ">
            {dashboardItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        <li className={router.pathname === "/" ? "current" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li
          className={
            router.pathname === "/hotel/hotel-list-v1" ? "current" : ""
          }
        >
          <Link href="/hotel/hotel-list-v1">Businesses</Link>
        </li>
        {/* <li
          className={router.pathname === "/blog/blog-list-v2" ? "current" : ""}
        >
          <Link href="/blog/blog-list-v2">Reviews</Link>
        </li> */}
        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={router.pathname === "/faq" ? "current" : ""}>
          <Link href="/faq">FAQ</Link>
        </li>
        {user.role === "admin" && (
          <li
            className={
              router.pathname.slice(0, 5) === "/admin" ? "current" : ""
            }
          >
            <Link href="/admin/dashboard">Administrator</Link>
          </li>
        )}
        {user.role === "business owner" && (
          <li
            className={
              router.pathname === "/businessowner" ? "current" : ""
            }
          >
            <Link href="/businessowner/dashboard">Business Owner</Link>
          </li>
        )}
        {user.role === "user" && (
          <li className={router.pathname === "/claimcity" ? "current" : ""}>
            <Link href="/user/claimcity">ClaimCity</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MainMenu;
