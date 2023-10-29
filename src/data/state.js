// Basically this will be our database think of it of a NoSQL document based type of DB
import { v4 as uuidv4 } from "uuid";

var dbData = {
    validUsers: [
        {
            username: "ProductionManager",
            password: "12345678",
        },
        {
            username: "Employee",
            password: "12345678",
        },
        {
            username: "AdministrationDepartmentManager",
            password: "12345678",
        },
        {
            username: "CustomerServiceManager",
            password: "12345678",
        },
        {
            username: "CustomerService",
            password: "12345678",
        },
        {
            username: "FinancialManager",
            password: "12345678",
        },
        {
            username: "ServiceManager",
            password: "12345678",
        },
        {
            username: "HumanResources",
            password: "12345678",
        },
        {
            username: "Admin",
            password: "12345678"
        }
    ],
    // Here we set the roles for each user so that different pages are accessible for them
    role: { 
        ProductionManager: [
            'inbox',
            'eventApplications',
            'activityPlans',
            'budgetRequests',
            'hiringRequests'
        ],
        Employee: [
            'todos',
            'budgetRequests'
        ],
        AdministrationDepartmentManager: ['inbox'],
        CustomerServiceManager: [
            'eventPlans',
            'inbox'
        ],
        CustomerService: [
            'eventPlans'
        ],
        FinancialManager: ['inbox'],
        ServiceManager: [
            'inbox',
            'eventApplications',
            'activityPlans',
            'budgetRequests',
            'hiringRequests'
        ],
        HumanResources: [
            'inbox',
            'jobPostings'
        ],
        Admin: [
            'inbox',
            'eventPlans',
            'eventApplications',
            'activityPlans',
            'todos',
            'budgetRequests',
            'hiringRequests',
            'jobPostings'
        ]
    },

    // Here is our table for event plans with some mockup data
    eventPlans: [
        {
            id: uuidv4(),
            name: "Pancho's Birthday Party",
            client: "Pancho the dog",
            date: "3.3.2024",
            budget: "300000 SEK",
            preferences: "Flowers, food, drinks, lights, speakers, dj",
            approved: true
        },
        {
            id: uuidv4(),
            name: "Alfred Dumbuldore's Funeral",
            client: "Mr. Potter",
            date: "27.9.2023",
            budget: "20000 SEK",
            preferences: "Food, flowers",
            approved: true
        },
        {
            id: uuidv4(),
            name: "Maria's Birthday",
            client: "Mr. Olmedo",
            date: "16.12.2023",
            budget: "1000 SEK",
            preferences: "Food, drinks, lights, alcohol, drinks",
            approved: false
        },
        {
            id: uuidv4(),
            name: "Pancho and Pancha's Anniversary",
            client: "Pancho the dog",
            date: "21.11.2024",
            budget: "3000 SEK",
            preferences: "Food, flowers",
            approved: false
        }
    ],
    // Event application by the key managers
    eventApplications: [
        {
            event: "Pancho's Birthday Party",
            name: "Pancho's Birthday Party: Production",
            status: "Open"
        },
        {
            event: "Pancho's Birthday Party",
            name: "Pancho's Birthday Party: Service",
            status: "Open"
        }
    ],
    // Task list of each department
    activityPlans: [
        {
            eventApplication: "Pancho's Birthday Party: Production",
            name: "Pancho's Birthday Party: Production (Decoration)",
            fromDepartment: "Decoration"
        }
    ],
    todos: [
        {
            id: uuidv4(),
            activityPlan: "Pancho's Birthday Party: Production (Decoration)",
            title: "Create tasks for this event",
            description: "",
            completed: true
        },
        {
            id: uuidv4(),
            activityPlan: "Pancho's Birthday Party: Production (Decoration)",
            title: "Hire a dj",
            description: "",
            completed: false
        },
        {
            id: uuidv4(),
            activityPlan: "Pancho's Birthday Party: Production (Decoration)",
            title: "Create a hiring request for the dj",
            description: "",
            completed: true
        },
        {
            id: uuidv4(),
            activityPlan: "Pancho's Birthday Party: Production (Decoration)",
            title: "Hire a sound technician",
            description: "",
            completed: false
        },
        {
            id: uuidv4(),
            activityPlan: "Pancho's Birthday Party: Production (Decoration)",
            title: "Create a hiring request for the sound technician",
            description: "Job posting is online",
            completed: true
        }
    ],
    budgetRequests: [
        {
            id: uuidv4(),
            event: "Pancho's Birthday Party",
            item: "DJ",
            fromDepartment: "Audio",
            price: "275.000",
            comment: "Dj's here at Stockholm are crazy expensive, Avicci and SHM realy boosted prices ar."
        },
        {
            id: uuidv4(),
            event: "Pancho's Birthday Party",
            item: "Lights",
            fromDepartment: "Decoration",
            price: "1.000",
            comment: "The client wants a lot of flashy lights to look like a club ar."
        }
    ],
    hiringRequests: [
        {
            id: uuidv4(),
            event: "Pancho's Birthday Party",
            role: "Light technician",
            type: "Freelancer",
            fromDepartment: "Decoration",
            comment: "We need someone that rents us and sets the lights ar."
        }
    ],
    jobPostings: [
        {
            id: uuidv4(),
            event: "Pancho's Birthday Party",
            role: "DJ",
            type: "Freelancer",
            fromDepartment: "Audio",
            comment: "We need a pretty good dj shambalai.",
            status: "Open"
        }
    ]
};

export {dbData};