import { Icon } from "reshaped";
import ActiveTabIcon from "../icons/ActiveDot";
import InActiveDot from "../icons/InActiveDot";
import { MouseEventHandler } from "react";
import ArrowRight from "../icons/ArrowRight";

interface MenuItemProps {
  active: boolean;
  title: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  multiple: boolean;
}

const SideBarMenuItem : React.FC<MenuItemProps> = ({active, title, onClick, multiple}) => {
    const menuItemCss = `flex justify-between items-center self-stretch h-11 p-4 ${active ? 'bg-gray-100 rounded-md cursor-default' : ' cursor-pointer'}`;
    return (
      <div className={menuItemCss} onClick={onClick}>
        <div className="flex items-center">
          <Icon svg={active ? ActiveTabIcon : InActiveDot} autoWidth className="pr-2" />
          <p>{title}</p>
        </div>
          <span style={{float: "right"}}>{multiple && <Icon svg={ArrowRight} size={5} autoWidth className="pr-2" />}</span>
        </div>
    );
}

export default SideBarMenuItem;