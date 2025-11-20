export interface NavigationBadge {
    label: string;
    icon: string;
    variant: "soft";
}

export interface NavigationItemType {
    id: string;
    label: string;
    icon: string;
    href: string;
    active?: boolean;
    disabled?: boolean;
    badge?: NavigationBadge;
}

export interface NavigationSection {
    section: string;
    items: NavigationItemType[];
}

export type NavigationData = NavigationSection[];
