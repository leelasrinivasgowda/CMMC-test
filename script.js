var margin = { top: 20, right: 250, bottom: 20, left: 150 },
    width = 2000 - margin.right - margin.left, // Large enough to allow horizontal scroll
    height = 1000 - margin.top - margin.bottom; // Large enough to allow vertical scroll

var i = 0, duration = 750, root;

var tree = d3.layout.tree().size([height, width]);

var diagonal = d3.svg.diagonal()
    .projection(function (d) { return [d.y, d.x]; });

var svg = d3.select("#tree-container").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var treeData = {
    name: "CMMC Framework",
    children: [
        {
            name: "3.1 Access Control",
            children: [
                {
                    name: "03.01.01 Account Management",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "Mail Server" },
                                { name: "Domain controllers" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Desktop computers" },
                                { name: "Laptops" },
                                { name: "Virtual desktops" }
                            ]
                        },
                        { name: "Cloud Infrastructure",
                          children: [
                              { name: "Cloud-hosted servers" },
                              { name: "SaaS applications"}
                          ]
                        },
                        { name: "Security Systems",
                          children: [
                              { name: "IAM systems"}
                          ]
                        },
                        { name: "End-user devices",
                          children: [
                              { name: "BYOD assets"},
                          ]
                        },
                        { name: "Human Assets",
                          children: [
                              { name: "System administrators"},
                              { name: "IT support staff" },
                              { name: "Security personnel"} 
                          ]
                        },
                        { name: "Software Assets",
                          children: [
                              { name: "Operating systems"},
                              { name: "Security software"}
                          ]
                        }
                    ]
                },
                {
                    name: "03.01.02 Access Enforcement",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.01.03: Controlled Data Flow",
                    children: [
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        },
                 {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "03.01.04 Separation of Duties",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "03.01.05 Least Privilege",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.06: Non-Privileged Access",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.07: Privileged Function Control & Logging",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "03.01.08 Unsuccessful Logon Attempts",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.09: Privacy & Security Notices",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.10: Session Lock",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.11: Auto Session Termination",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.12: Remote Access Monitoring",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.13: Cryptographic Protection for Remote Access",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.14: Managed Remote Access Routing",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.15: Privileged Remote Access Authorization",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.16: Wireless Access Authorization",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.17: Wireless Protection",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.18: Mobile Device Connection Control",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.19: Mobile Device Encryption",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.20: External System Control",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.21: Portable Storage Limitation",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
                {
                    name: "3.01.22: Public System Content Control",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" },
                                { name: "Application Server" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" },
                                { name: "Load Balancer" }
                            ]
                        },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                        { name: "OT Devices" },
                        { name: "Human Assets"}
                    ]
                },
            ]
        },
        {
            name: "3.2 Awareness and Training",
            children: [
                {
                    name: "3.02.01: Security Risk Awareness",
                    children: [
                        {
                            name: "Human Assets",
                            children: [
                                { name: "Security Staff" },
                                { name: "IT Staff" },
                                { name: "General Users" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.02.02: Security Training for Duties",
                    children: [
                        {
                            name: "Human Assets",
                            children: [
                                { name: "Security Staff" },
                                { name: "IT Staff" },
                                { name: "General Users" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.02.03: Insider Threat Awareness",
                    children: [
                        {
                            name: "Human Assets",
                            children: [
                                { name: "Security Staff" },
                                { name: "IT Staff" },
                                { name: "General Users" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "3.3 Audit and Accountability",
            children: [
                {
                    name: "3.03.01: Audit Log Retention",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.03.02: User Accountability",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.03.03: Event Log Review",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.03.04: Audit Failure Alerts",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.03.05: Audit Analysis & Correlation",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.03.06: Report Generation for Audit",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.03.07: Time Synchronization for Audit Logs",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.03.08: Audit Data Protection",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.03.09: Privileged Audit Management",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "3.4 Configuration Management",
            children: [
                {
                    name: "3.04.01: Baseline Configurations & Inventory",
                    children: [
                        {
                            name: "Human Assets",
                            children: [
                                { name: "Security Staff" },
                                { name: "IT Staff" },
                                { name: "General Users" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.04.02: Security Configuration Settings",
                    children: [
                        {
                            name: "Human Assets",
                            children: [
                                { name: "Security Staff" },
                                { name: "IT Staff" },
                                { name: "General Users" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.04.03: Change Management Tracking",
                    children: [
                        {
                            name: "Human Assets",
                            children: [
                                { name: "Security Staff" },
                                { name: "IT Staff" },
                                { name: "General Users" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.04.04: Security Impact Analysis",
                    children: [
                        {
                            name: "Human Assets",
                            children: [
                                { name: "Security Staff" },
                                { name: "IT Staff" },
                                { name: "General Users" }
                            ]
                        }
                    ]
                },
                {
                    name: "03.04.05 Access Restrictions for Change",
                    children: [
                        {
                            name: "Human Assets",
                            children: [
                                { name: "Security Staff" },
                                { name: "IT Staff" },
                                { name: "General Users" }
                            ]
                        }
                    ]
                },
                {
                    name: "03.04.06 Least Functionality",
                    children: [
                        {
                            name: "Human Assets",
                            children: [
                                { name: "Security Staff" },
                                { name: "IT Staff" },
                                { name: "General Users" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.04.07: Nonessential Services Restriction",
                    children: [
                        {
                            name: "Human Assets",
                            children: [
                                { name: "Security Staff" },
                                { name: "IT Staff" },
                                { name: "General Users" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.04.08: Software Authorization (White/Blacklisting)",
                    children: [
                        {
                            name: "Human Assets",
                            children: [
                                { name: "Security Staff" },
                                { name: "IT Staff" },
                                { name: "General Users" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.04.09: User-Installed Software Control",
                    children: [
                        {
                            name: "Human Assets",
                            children: [
                                { name: "Security Staff" },
                                { name: "IT Staff" },
                                { name: "General Users" }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            name: "3.5 Identification and Authentication",
            children: [
                {
                    name: "3.05.01: User & Device Identification",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web servers" },
                                { name: "Domain Controllers" },
                                { name: "Application servers" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Desktops" },
                                { name: "Laptops" },
                                { name: "Mobile devices" }
                            ]
                        },
                        {
                            name: "Cloud Infrastructure",
                            children: [
                                { name: "Cloud-hosted servers" },
                                { name: "SaaS applications" }
                            ]
                        },
                        {
                            name: "Security Systems",
                            children: [
                                { name: "Identity and Access Management(IAM) systems" },
                                { name: "SIEM tools" }
                            ]
                        },
                        {
                            name: "Human Assets",
                            children: [
                                { name: "System administrators" },
                                { name: "Security personnel" },
                                { name: "End-users" }
                            ]
                        },
                        
                    ]
                },
                {
                    name: "3.05.02: Identity Authentication",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web servers" },
                                { name: "Database servers" },
                                { name: "Domain controllers" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Desktops" },
                                { name: "Laptops" },
                                { name: "Mobile devices" },
                                { name: "Thin clients" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Routers" },
                                { name: "Firewalls" },
                                { name: "VPN Gateways" }
                            ]
                        },
                        {
                            name: "IoT Devices",
                            children: [
                                { name: "Industrail Control Systems" },
                                { name: "SCADA" },
                                { name: "Embedded systems" }
                            ]
                        },
                        {
                            name: "Cloud Infrastructure",
                            children: [
                                { name: "Cloud-hosted servers" },
                                { name: "Virtual machines" }
                            ]
                        },
                        {
                            name: "Security Systems",
                            children: [
                                { name: "IAM" },
                                { name: "MFA devices" }
                            ]
                        },
                        {
                            name: "Human Assets",
                            children: [
                                { name: "System administrator" },
                                { name: "IT support staff" }
                            ]
                        },
                    ]
                },
                {
                    name: "3.05.03: Multifactor Authentication (MFA)",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web servers" },
                                { name: "Domain Controllers" },
                                { name: "Application servers" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Desktops" },
                                { name: "Laptops" },
                                { name: "Mobile devices" }
                            ]
                        },
                        {
                            name: "Cloud Infrastructure",
                            children: [
                                { name: "Cloud-hosted servers" },
                                { name: "SaaS applications" }
                            ]
                        },
                        {
                            name: "Security Systems",
                            children: [
                                { name: "Identity and Access Management(IAM) systems" },
                                { name: "SIEM tools" }
                            ]
                        },
                        {
                            name: "Human Assets",
                            children: [
                                { name: "System administrators" },
                                { name: "Security personnel" },
                                { name: "End-users" }
                            ]
                        },
                        
                    ]
                },
                {
                    name: "3.05.04: Replay-Resistant Authentication",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web servers" },
                                { name: "Domain Controllers" },
                                { name: "Application servers" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Desktops" },
                                { name: "Laptops" },
                                { name: "Mobile devices" }
                            ]
                        },
                        {
                            name: "Cloud Infrastructure",
                            children: [
                                { name: "Cloud-hosted servers" },
                                { name: "SaaS applications" }
                            ]
                        },
                        {
                            name: "Security Systems",
                            children: [
                                { name: "Identity and Access Management(IAM) systems" },
                                { name: "SIEM tools" }
                            ]
                        },
                        {
                            name: "Human Assets",
                            children: [
                                { name: "System administrators" },
                                { name: "Security personnel" },
                                { name: "End-users" }
                            ]
                        },
                        
                    ]
                },
                {
                    name: "3.05.05: Identifier Reuse Prevention",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web servers" },
                                { name: "Domain Controllers" },
                                { name: "Application servers" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Desktops" },
                                { name: "Laptops" },
                                { name: "Mobile devices" }
                            ]
                        },
                        {
                            name: "Cloud Infrastructure",
                            children: [
                                { name: "Cloud-hosted servers" },
                                { name: "SaaS applications" }
                            ]
                        },
                        {
                            name: "Security Systems",
                            children: [
                                { name: "Identity and Access Management(IAM) systems" },
                                { name: "SIEM tools" }
                            ]
                        },
                        {
                            name: "Human Assets",
                            children: [
                                { name: "System administrators" },
                                { name: "Security personnel" },
                                { name: "End-users" }
                            ]
                        },
                        
                    ]
                },
                {
                    name: "3.05.06: Inactive ID Disabling",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web servers" },
                                { name: "Domain Controllers" },
                                { name: "Application servers" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Desktops" },
                                { name: "Laptops" },
                                { name: "Mobile devices" }
                            ]
                        },
                        {
                            name: "Cloud Infrastructure",
                            children: [
                                { name: "Cloud-hosted servers" },
                                { name: "SaaS applications" }
                            ]
                        },
                        {
                            name: "Security Systems",
                            children: [
                                { name: "Identity and Access Management(IAM) systems" },
                                { name: "SIEM tools" }
                            ]
                        },
                        {
                            name: "Human Assets",
                            children: [
                                { name: "System administrators" },
                                { name: "Security personnel" },
                                { name: "End-users" }
                            ]
                        },
                        
                    ]
                },
                {
                    name: "3.05.07: Password Complexity Enforcement",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web servers" },
                                { name: "Domain Controllers" },
                                { name: "Application servers" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Desktops" },
                                { name: "Laptops" },
                                { name: "Mobile devices" }
                            ]
                        },
                        {
                            name: "Cloud Infrastructure",
                            children: [
                                { name: "Cloud-hosted servers" },
                                { name: "SaaS applications" }
                            ]
                        },
                        {
                            name: "Security Systems",
                            children: [
                                { name: "Identity and Access Management(IAM) systems" },
                                { name: "SIEM tools" }
                            ]
                        },
                        {
                            name: "Human Assets",
                            children: [
                                { name: "System administrators" },
                                { name: "Security personnel" },
                                { name: "End-users" }
                            ]
                        },
                        
                    ]
                },
                {
                    name: "3.05.08: Password Reuse Restriction",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web servers" },
                                { name: "Domain Controllers" },
                                { name: "Application servers" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Desktops" },
                                { name: "Laptops" },
                                { name: "Mobile devices" }
                            ]
                        },
                        {
                            name: "Cloud Infrastructure",
                            children: [
                                { name: "Cloud-hosted servers" },
                                { name: "SaaS applications" }
                            ]
                        },
                        {
                            name: "Security Systems",
                            children: [
                                { name: "Identity and Access Management(IAM) systems" },
                                { name: "SIEM tools" }
                            ]
                        },
                        {
                            name: "Human Assets",
                            children: [
                                { name: "System administrators" },
                                { name: "Security personnel" },
                                { name: "End-users" }
                            ]
                        },
                        
                    ]
                },
                {
                    name: "3.05.09: Temporary Password Requirement",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web servers" },
                                { name: "Domain Controllers" },
                                { name: "Application servers" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Desktops" },
                                { name: "Laptops" },
                                { name: "Mobile devices" }
                            ]
                        },
                        {
                            name: "Cloud Infrastructure",
                            children: [
                                { name: "Cloud-hosted servers" },
                                { name: "SaaS applications" }
                            ]
                        },
                        {
                            name: "Security Systems",
                            children: [
                                { name: "Identity and Access Management(IAM) systems" },
                                { name: "SIEM tools" }
                            ]
                        },
                        {
                            name: "Human Assets",
                            children: [
                                { name: "System administrators" },
                                { name: "Security personnel" },
                                { name: "End-users" }
                            ]
                        },
                        
                    ]
                },
                {
                    name: "3.05.10: Cryptographic Password Protection",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web servers" },
                                { name: "Domain Controllers" },
                                { name: "Application servers" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Desktops" },
                                { name: "Laptops" },
                                { name: "Mobile devices" }
                            ]
                        },
                        {
                            name: "Cloud Infrastructure",
                            children: [
                                { name: "Cloud-hosted servers" },
                                { name: "SaaS applications" }
                            ]
                        },
                        {
                            name: "Security Systems",
                            children: [
                                { name: "Identity and Access Management(IAM) systems" },
                                { name: "SIEM tools" }
                            ]
                        },
                        {
                            name: "Human Assets",
                            children: [
                                { name: "System administrators" },
                                { name: "Security personnel" },
                                { name: "End-users" }
                            ]
                        },
                        
                    ]
                },
                {
                    name: "3.05.11: Authentication Feedback Obfuscation",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web servers" },
                                { name: "Domain Controllers" },
                                { name: "Application servers" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Desktops" },
                                { name: "Laptops" },
                                { name: "Mobile devices" }
                            ]
                        },
                        {
                            name: "Cloud Infrastructure",
                            children: [
                                { name: "Cloud-hosted servers" },
                                { name: "SaaS applications" }
                            ]
                        },
                        {
                            name: "Security Systems",
                            children: [
                                { name: "Identity and Access Management(IAM) systems" },
                                { name: "SIEM tools" }
                            ]
                        },
                        {
                            name: "Human Assets",
                            children: [
                                { name: "System administrators" },
                                { name: "Security personnel" },
                                { name: "End-users" }
                            ]
                        },
                        
                    ]
                }
            ]
        },
        {
            name: "3.6 Incidence Response",
            children: [
                {
                    name: "3.06.01: Incident Handling Capability",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.06.02: Incident Tracking & Reporting",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.06.03: Incident Response Testing",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "3.7 Maintenance",
            children: [
                {
                    name: "3.07.01: System Maintenance",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.07.02: Maintenance Tool & Personnel Control",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.07.03: Off-Site Equipment Sanitization",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.07.04: Diagnostic Media Check",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.07.05: MFA for Remote Maintenance",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "3.07.06: Maintenance Supervision",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            name: "3.8 Media Protection",
            children: [
                {
                    name: "03.03.01 Audit Logging",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "03.03.02 Audit Review and Reporting",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "3.9 Personnel Security",
            children: [
                {
                    name: "03.03.01 Audit Logging",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "03.03.02 Audit Review and Reporting",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "3.10 Physical protection",
            children: [
                {
                    name: "03.03.01 Audit Logging",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "03.03.02 Audit Review and Reporting",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "3.11 Risk Assessment",
            children: [
                {
                    name: "03.03.01 Audit Logging",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "03.03.02 Audit Review and Reporting",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "3.12 Security Assessment",
            children: [
                {
                    name: "03.03.01 Audit Logging",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "03.03.02 Audit Review and Reporting",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "3.13 System and Communications Protection",
            children: [
                {
                    name: "03.03.01 Audit Logging",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "03.03.02 Audit Review and Reporting",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "3.14 System and Information Integrity",
            children: [
                {
                    name: "03.03.01 Audit Logging",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                },
                {
                    name: "03.03.02 Audit Review and Reporting",
                    children: [
                        {
                            name: "Servers",
                            children: [
                                { name: "Web Server" },
                                { name: "File Server" },
                                { name: "Database Server" }
                            ]
                        },
                        {
                            name: "Workstations",
                            children: [
                                { name: "Windows Workstation" },
                                { name: "Mac Workstation" },
                                { name: "Linux Workstation" }
                            ]
                        },
                        {
                            name: "Network Devices",
                            children: [
                                { name: "Router" },
                                { name: "Switch" },
                                { name: "Firewall" }
                            ]
                        }
                    ]
                }
            ]
        },
    ]
};

root = treeData;
root.x0 = height / 2;
root.y0 = 0;

function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

root.children.forEach(collapse);
update(root);

function update(source) {
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

    nodes.forEach(function (d) { d.y = d.depth * 300; });

    var node = svg.selectAll("g.node")
        .data(nodes, function (d) { return d.id || (d.id = ++i); });

    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
        .on("click", click);

    nodeEnter.append("circle")
        .attr("r", 6)
        .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

    nodeEnter.append("text")
        .attr("x", function (d) { return d.children || d._children ? -13 : 13; })
        .attr("dy", ".35em")
        .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
        .text(function (d) { return d.name; })
        .style("fill-opacity", 1e-6);

    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

    nodeUpdate.select("circle")
        .attr("r", 6)
        .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
        .remove();

    nodeExit.select("circle")
        .attr("r", 1e-6);

    nodeExit.select("text")
        .style("fill-opacity", 1e-6);

    var link = svg.selectAll("path.link")
        .data(links, function (d) { return d.target.id; });

    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
            var o = { x: source.x0, y: source.y0 };
            return diagonal({ source: o, target: o });
        });

    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
            var o = { x: source.x, y: source.y };
            return diagonal({ source: o, target: o });
        })
        .remove();

    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}

function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update(d);
}
