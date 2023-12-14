import { MouseEventHandler } from "react";

interface ButtonProps {
    active?: boolean;
    title?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}


const PrimaryButton : React.FC<ButtonProps> = ({title, onClick, active}) => (
    <button type="button" className={`py-2 px-3 mr-2 font-medium rounded-md ${active ? "bg-blue-50 text-blue-700" : 'border'}`} onClick={onClick}>{title}</button>
);

export default PrimaryButton;