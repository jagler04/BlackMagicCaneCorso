export interface NavItem {
    displayName: string;
    disabled?: boolean;
    iconName?: string;
    imgSource?: string;
    route?: string;
    children?: NavItem[];
  }