import type { TableColumn } from "../components/ui/Table";
import type { PersonData } from "./mockPeopleData";

export const peopleTableColumns: TableColumn<PersonData>[] = [
    {
        key: "name",
        header: "Name",
        render: (row) => (
            <span className="font-medium text-gray-900">{row.name}</span>
        ),
    },
    {
        key: "title",
        header: "Title",
    },
    {
        key: "headline",
        header: "Headline",
        className: "text-gray-600",
    },
    {
        key: "linkedinUrl",
        header: "LinkedIn URL",
        render: (row) => (
            <a
                href={`https://${row.linkedinUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline truncate"
            >
                {row.linkedinUrl}
            </a>
        ),
    },
    {
        key: "company",
        header: "Company",
        render: (row) => (
            <span className="font-medium">{row.company}</span>
        ),
    },
    {
        key: "companyUrl",
        header: "Company URL",
        render: (row) => (
            <a
                href={`https://${row.companyUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline truncate"
            >
                {row.companyUrl}
            </a>
        ),
    },
];
