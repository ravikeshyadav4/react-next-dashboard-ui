import Image from 'next/image';
import { Icon } from 'reshaped';
import DropDownArrow from '../icons/DropDownArrow';
import UserIcon from '../icons/UserIcon';
import ArrowDownIcon from '../icons/ArrowDownIcon';

export default function HeaderCompany() {
    return (
        <div className='flex'>
            <Icon svg={DropDownArrow} size={5} autoWidth className="mr-3 cursor-pointer" />
            <Icon svg={UserIcon} size={5} autoWidth className="mr-3 cursor-pointer" />
            <div>
                <h6 className='flex cursor-pointer'>Particle <Icon svg={ArrowDownIcon} size={3} autoWidth /></h6>
                <p className='text-sm cursor-pointer'>Main Company</p>
            </div>
        </div>
    );
}