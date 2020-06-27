export declare interface ITabContainerProps {
  names?: string[];
  btnClassName?: string;
  bodyClassName?: string;
  onTabClick?: (tabIndex: number, evt: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const TabContainer: React.FC<ITabContainerProps>;
