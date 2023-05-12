import React, { SVGProps, useState, createContext, useContext } from 'react';

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  id: string;
  onClick?: () => void;
}

interface ActiveIconContextType {
  activeIconId: string;
  setActiveIconId: (id: string) => void;
  clearActiveIcon: () => void;
}

export const ActiveIconContext = createContext<ActiveIconContextType>({
  activeIconId: '',
  setActiveIconId: (id: string) => {},
  clearActiveIcon: () => {},
});

const SidebarRow: React.FC<Props> = ({ Icon, id, onClick }) => {
  const { activeIconId, setActiveIconId } = useContext(ActiveIconContext);
  const isIconRed = activeIconId === id;

  const HandleIconClick = () => {
    setActiveIconId(id);
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

interface SidebarContextProps {
  children: React.ReactNode;
}

const SidebarContext: React.FC<SidebarContextProps> = ({ children }) => {
  const [activeIconId, setActiveIconId] = useState('');
  const clearActiveIcon = () => setActiveIconId('');

  return (
    <ActiveIconContext.Provider
      value={{ activeIconId, setActiveIconId, clearActiveIcon }}
    >
      {children}
    </ActiveIconContext.Provider>
  );
};

export { SidebarContext, SidebarRow };
