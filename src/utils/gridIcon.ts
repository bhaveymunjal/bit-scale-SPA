interface IconConfig {
    iconName: string;
    className: string;
}

export const getGridIconConfig = (type: string): IconConfig => {
    switch (type) {
        case "folder_group":
            return { iconName: "folder_shared", className: "text-purple-500" };
        case "linkedin":
            return { iconName: "post", className: "text-blue-700" };
        case "sales_nav":
            return { iconName: "explore", className: "text-cyan-600" };
        case "company":
            return { iconName: "domain", className: "text-green-600" };
        case "csv":
            return { iconName: "description", className: "text-orange-600" };
        case "people":
            return { iconName: "group", className: "text-purple-600" };
        case "maps":
            return { iconName: "location_on", className: "text-green-600" };
        case "search":
            return { iconName: "search", className: "text-blue-500" };
        case "factors":
            return { iconName: "bolt", className: "text-pink-500" };
        case "hubspot":
            return { iconName: "hub", className: "text-orange-500" };
        default:
            return { iconName: "description", className: "text-gray-400" };
    }
};
