import styles from "./Menu.module.scss";
import cn from "classnames";
import { format } from "date-fns";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";

const firstLevelMenu = [
  { route: "courses", name: "Курсы", icon: <CoursesIcon />, id: "courses" },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: "services",
  },
  { route: "books", name: "Книги", icon: <BooksIcon />, id: "books" },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: "products",
  },
];

export const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key = {m.route}>
            <a href={`/${m.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: m.id === firstCategory
              })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    )
  }
  const buildSecondLevel = (menuItem) => {
    return (
      <div>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened
            })}>
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    )
  }
  const buildThirdLevel = (pages, route) => {
    return (
      pages.map(p => (
        <a key={Date.now()} href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: true
        })}>
          {p.category}
        </a>
      ))
    )
  }
  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};
