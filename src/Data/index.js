const aboutMe = {};

const skill = {};

const projects = [
    {
        title: "Ticketing system for query resolving",
        desc: "Zen Class Query Resolving Platform for mentor and student. A real time status update on query and real time chat feature",
        built: ["html", "css", "react", "nodejs", "express", "mongodb", "socket", "tailwindcss"],
        image: "ticketing_system",

        url: {
            live: "https://ticketing-system-frontend.netlify.app/",
            frontend: "https://github.com/Meyazhagan/ticketing-system-frontend",
            backend: "https://github.com/Meyazhagan/ticketing-system-backend",
        },
        demoCredential: [
            {
                email: "student1@gmail.com",
                password: "12345",
            },
            {
                email: "student2@gmail.com",
                password: "12345",
            },
            {
                email: "mentor1@gmail.com",
                password: "12345",
            },
            {
                email: "mentor2@gmail.com",
                password: "12345",
            },
        ],
    },
    {
        title: "E Commerce Website",
        desc: "To buy products in online and checkout the products. Sellers can post new Products. Integrated with Stripe For Payment",
        built: ["html", "css", "react", "nodejs", "express", "mongodb", "tailwindcss", "redux"],
        integerated: " stripe for payment",
        image: "ecommerce",
        url: {
            live: "https://ecommerce-website-meyazhagan.netlify.app/",
            frontend: "https://github.com/Meyazhagan/ecommerce-frontend",
            backend: "https://github.com/Meyazhagan/ecommerce-backend",
        },
        demoCredential: [
            {
                email: "seller@gmail.com",
                password: "12345",
            },
            {
                email: "buyer1@gmail.com",
                password: "12345",
            },
            {
                email: "buyer2@gmail.com",
                password: "12345",
            },
        ],
    },
    {
        title: "Google Drive Clone",
        desc: "Store, share, and collaborate on files and folders from any mobile device, tablet, or computer.",
        built: ["html", "css", "react", "nodejs", "express", "mongodb", "tailwindcss", "AWS_S3"],
        integerated: "AWS S3 for storing files",
        image: "google_drive",
        url: {
            live: "https://googledrive-frontend-meyazhagan.netlify.app/",
            frontend: "https://github.com/Meyazhagan/googledrive-frontend",
            backend: "https://github.com/Meyazhagan/googledrive-backend",
        },
        demoCredential: [
            {
                email: "demo@gmail.com",
                password: "12345",
            },
        ],
    },
    {
        title: "User and Profile CRUD",
        desc: "Create Read Update Delete operation for User and User-Profile. Using GraphQL and Redux.",
        image: "user_and_profile",
        built: [
            "html",
            "css",
            "react",
            "nodejs",
            "express",
            "mongodb",
            "tailwindcss",
            "redux",
            "gql",
        ],

        url: {
            live: "https://user-profile-crud-gql-redux.netlify.app/",
            frontend: "https://github.com/Meyazhagan/user-profile-crud-frontend",
            backend: "https://github.com/Meyazhagan/user-profile-crud-backend",
        },
        demoCredential: [
            {
                email: "demo@gmail.com",
                password: "12345",
            },
        ],
    },
];

const education = [
    {
        qualification: "B. Sc in Electronics",
        at: "PSG College of Arts and Science",
        location: "Coimbatore",
        start: "2016",
        end: "2019",
    },
    {
        qualification: "Higher Secondard",
        at: "SRV Boys Higher Secondary School",
        location: "Rasipuram",
        start: "2014",
        end: "2016",
    },
    {
        qualification: "",
        at: "KSR Matriculation School",
        location: "Thiruchengode",
        start: "2007",
        end: "2014",
    },
];

export { aboutMe, skill, projects, education };
export default { aboutMe, skill, projects, education };
