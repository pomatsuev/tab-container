export declare interface ITabContainerProps {
  names?: string[];
  btnClassName?: string;
  bodyClassName?: string;
  onTabClick?: (tabIndex: number, evt: React.MouseEvent<HTMLDivElement>) => void;
  onTabChange?: (prevIndex: number, nextIndex: number) => void;
  style?: TabContainerStyleType;
}
export declare type TabContainerStyleType = {
  buttons?: React.CSSProperties;
  content?: React.CSSProperties;
  button?: React.CSSProperties;
  container?: React.CSSProperties;
};
export declare const TabContainer: React.FC<ITabContainerProps>;
