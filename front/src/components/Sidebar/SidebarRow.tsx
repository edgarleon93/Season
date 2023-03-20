import react, { SVGProps, useState } from 'react';

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  // title: string;
  onClick?: () => void;
}
const SidebarRow: React.FC<Props> = ({ Icon, onClick }) => {
  const [isIconRed, setIsIconRed] = useState(false);

  const HandleIconClick = () => {
    setIsIconRed(!isIconRed);
    if (onClick) {
      onClick();
    }
  };
  const buttonStyle = 'text-white h-6 w-6';

  return (
    <button className={buttonStyle} onClick={HandleIconClick}>
      <Icon color={isIconRed ? 'red' : 'white'} />
    </button>
  );
};

export default SidebarRow;
