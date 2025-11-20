import type { NavigationData } from "./types";

export const navigationData: NavigationData = [
    {
        section: "Home",
        items: [
            {
                id: "dashboard",
                label: "My Dashboard",
                icon: "dashboard",
                href: "/dashboard",
                active: true
            },
            {
                id: "playbooks",
                label: "Playbooks",
                icon: "book_2",
                href: "/playbooks",
                disabled: true,
                badge: {
                    label: "",
                    icon: "rocket_launch",
                    variant: "soft"
                }
            },
            {
                id: "integrations",
                label: "Integrations",
                icon: "join",
                href: "/integrations"
            }
        ]
    },
    {
        section: "Other",
        items: [
            {
                id: "docs",
                label: "Documentation",
                icon: "import_contacts",
                href: "/docs"
            },
            {
                id: "settings",
                label: "Settings",
                icon: "settings",
                href: "/settings"
            }
        ]
    }
];
