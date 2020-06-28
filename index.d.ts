export declare interface ITabContainerProps {
  names?: string[];
  btnClassName?: string;
  bodyClassName?: string;
  onTabClick?: (tabIndex: number, evt: React.MouseEvent<HTMLDivElement>) => void;
  onTabChange?: (prevIndex: number, nextIndex: number) => void;
}
export declare const TabContainer: React.FC<ITabContainerProps>;
