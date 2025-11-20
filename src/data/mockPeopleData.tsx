export interface PersonData {
    id: string;
    name: string;
    title: string;
    headline: string;
    linkedinUrl: string;
    company: string;
    companyUrl: string;
}

export const mockPeopleData: PersonData[] = [
    {
        id: "1",
        name: "Sarah Johnson",
        title: "Senior Software Engineer",
        headline: "Building scalable systems | React & Node.js enthusiast",
        linkedinUrl: "linkedin.com/in/sarahjohnson",
        company: "Google",
        companyUrl: "google.com"
    },
    {
        id: "2",
        name: "Michael Chen",
        title: "Product Manager",
        headline: "Leading product innovation in AI/ML space",
        linkedinUrl: "linkedin.com/in/michaelchen",
        company: "Microsoft",
        companyUrl: "microsoft.com"
    },
    {
        id: "3",
        name: "Emily Rodriguez",
        title: "VP of Engineering",
        headline: "Passionate about building great teams and products",
        linkedinUrl: "linkedin.com/in/emilyrodriguez",
        company: "Amazon",
        companyUrl: "amazon.com"
    },
    {
        id: "4",
        name: "David Kim",
        title: "Data Scientist",
        headline: "ML/AI | Python | TensorFlow | Making data tell stories",
        linkedinUrl: "linkedin.com/in/davidkim",
        company: "Meta",
        companyUrl: "meta.com"
    },
    {
        id: "5",
        name: "Jessica Williams",
        title: "Engineering Manager",
        headline: "Leading high-performing engineering teams",
        linkedinUrl: "linkedin.com/in/jessicawilliams",
        company: "Apple",
        companyUrl: "apple.com"
    },
    {
        id: "6",
        name: "Robert Taylor",
        title: "Chief Technology Officer",
        headline: "Tech leader | Cloud architecture | Digital transformation",
        linkedinUrl: "linkedin.com/in/roberttaylor",
        company: "Netflix",
        companyUrl: "netflix.com"
    },
    {
        id: "7",
        name: "Amanda Martinez",
        title: "Software Architect",
        headline: "Designing robust and scalable software solutions",
        linkedinUrl: "linkedin.com/in/amandamartinez",
        company: "Salesforce",
        companyUrl: "salesforce.com"
    },
    {
        id: "8",
        name: "James Anderson",
        title: "DevOps Engineer",
        headline: "CI/CD | Kubernetes | AWS | Infrastructure as Code",
        linkedinUrl: "linkedin.com/in/jamesanderson",
        company: "Uber",
        companyUrl: "uber.com"
    },
    {
        id: "9",
        name: "Lisa Thompson",
        title: "UX Design Lead",
        headline: "Creating delightful user experiences",
        linkedinUrl: "linkedin.com/in/lisathompson",
        company: "Adobe",
        companyUrl: "adobe.com"
    },
    {
        id: "10",
        name: "Christopher Lee",
        title: "Security Engineer",
        headline: "Cybersecurity | Ethical hacking | Protecting digital assets",
        linkedinUrl: "linkedin.com/in/christopherlee",
        company: "Cisco",
        companyUrl: "cisco.com"
    }
];
