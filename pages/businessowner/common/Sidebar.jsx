import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { isActiveLink } from "../../../utils/linkActiveChecker";

const Sidebar = () => {
  const router = useRouter();

  const sidebarContent = [
    {
      id: 1,
      icon: "/img/dashboard/sidebar/compass.svg",
      name: "Dashboard",
      routePath: "/businessowner/dashboard",
    },
    {
      id: 2,
      icon: "/img/dashboard/sidebar/hotel.svg",
      name: "Business",
      routePath: "/businessowner/business",
    },
    {
      id: 3,
      icon: "/img/dashboard/icons/4.svg",
      name: "Review",
      routePath: "/businessowner/review",
    },
    {
      id: 4,
      icon: "/img/featureIcons/1/2.svg",
      name: "FAQ",
      routePath: "/businessowner/faq",
    }
  ];
  return (
    <div className="sidebar -dashboard">
      {sidebarContent.map((item) => (
        <div className="sidebar__item" key={item.id}>
          <div
            className={`${
              isActiveLink(item.routePath, router.asPath) ? "-is-active" : ""
            } sidebar__button `}
          >
            <Link
              href={item.routePath}
              className="d-flex items-center text-15 lh-1 fw-500"
            >
              <Image
                width={20}
                height={20}
                src={item.icon}
                alt="image"
                className="mr-15"
              />
              {item.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
