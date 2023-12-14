import { Icon } from "reshaped";
import MenuIcon from '../icons/MenuIcon';
import HeaderCompany from './HeaderCompany';
import Image from 'next/image';
import LogoIcon from "../icons/LogoIcon";


export default function Header() {
    return (
            <div className="flex justify-between p-2 border">
                <div className="pt-2">
                    <Icon svg={MenuIcon} size={3} autoWidth />
                </div>
                <div className="pt-2">
                <Icon svg={LogoIcon} size={5} autoWidth />
                </div>
                <div className="">
                    <HeaderCompany />
                </div>
            </div>
    );
}