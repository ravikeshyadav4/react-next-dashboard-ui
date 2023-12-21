import { Icon } from "reshaped";
import MenuIcon from '../icons/MenuIcon';
import HeaderCompany from './HeaderCompany';
import Image from 'next/image';
import LogoIcon from "../icons/LogoIcon";


export default function Header() {
    return (
            <div className="flex justify-between p-2 border items-center">
                <div className="">
                    <Icon svg={MenuIcon} size={5} autoWidth />
                </div>
                <div className="">
                <Icon svg={LogoIcon} size={5} autoWidth />
                </div>
                <div className="">
                    <HeaderCompany />
                </div>
            </div>
    );
}