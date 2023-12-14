import { Icon } from "reshaped";
import ActiveTabIcon from "../icons/ActiveDot";
import InActiveDot from "../icons/InActiveDot";
import { MouseEventHandler } from "react";

interface DashboardItemProps {
  active: boolean;
  title: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const DashboardItemProps : React.FC<DashboardItemProps> = ({active, title, onClick}) => {
    // const menuItemCss = `flex items-center self-stretch h-11 p-4 ${active ? 'bg-gray-100 rounded-md cursor-default' : ' cursor-pointer'}`;
    return (
        <div className="ml-3 mr-3 pb-2 pt-3 cursor-pointer" onClick={onClick} style={{borderBottom: `${active ? '1px solid blue' : ''}`}}>
          <p className="text-sm">{title}</p>
        </div>
    );
}

export default DashboardItemProps;