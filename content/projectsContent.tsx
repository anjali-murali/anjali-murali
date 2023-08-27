// content/projectsContent.tsx
import { PORTFOLIO_OWNER_NAME } from "./siteConfig";

// Projects page header
export const projectsPageHeader = `${PORTFOLIO_OWNER_NAME} | Projects`;

// Sample project data
export const projectCardContent = [
    {
        id: 1,
        title: 'Connected Lighting Control System',
        type: 'Work project associated with WiSilica',
        githubLink: '',
        imageSrc: '/project_images/project-lumoscontrols.jpg',
        details: ['Worked on a proprietary BLE wireless network for control of RGB, CCT based smart lighting devices.',
            'Enhanced existing features and developed new firmware solutions that enabled the launch of new connected lighting products, functionality and services.',
            'Ported proprietary BLE mesh to nRF5 SDK FreeRTOS based solution.',
            'Evaluated and integrated new technologies to WiSilica lighting control system.',
            'Reduced time taken for device OTA updates by 90% through scheme modifications that improved throughput.'
        ],
    },
    {
        id: 2,
        title: 'Real time location system for indoor tracking',
        type: 'Work project associated with WiSilica',
        githubLink: '',
        imageSrc: '/project_images/project-track.jpg',
        details: ['Worked on a BLE RSSI based indoor tracking and alerting system for efficient asset utilization and enhanced safety',
            'Performed device bring up and power optimization for tag, listener.',
            'Developed tag to listener to gateway BLE messaging protocol',
            'Created a linux based tag simulator application for performance evaluations which resulted in easier development and test setups.'
        ],
    },
    {
        id: 3,
        title: 'Non-invasive Knee Osteoarthritis Diagnosis',
        type: 'Undergraduate capstone project associated with Govt. Model Engineering College',
        githubLink: '',
        imageSrc: '/project_images/project-undergrad.jpg',
        details: ['Developed a prototype for diagnosis of arthritis by acquisition, processing and classification of Vibroarthrographic signals from knee joints of patients.',
            'Followed all stages of the ML modeling cycle like data preparation, normalization, training, evaluation.',
            'Utilized scikit-learn SVM classifier for classification of Vibroarthrographic signals.',
        ],
    },
];