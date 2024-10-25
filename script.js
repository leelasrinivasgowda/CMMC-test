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
                    name: "03.01.03 Information Flow Enforcement",
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
                    name: "03.01.06 Least Privilege – Privileged Accounts",
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
                    name: "03.01.07 Least Privilege – Privileged Functions",
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
                    name: "03.01.09 System Use Notification",
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
                    name: "03.01.10 Device Lock",
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
                    name: "03.01.11 Session Termination",
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
                    name: "03.01.12 Remote Access",
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
                    name: "03.01.16 Wireless Access",
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
                    name: "03.01.18 Access Control for Mobile Devices",
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
                    name: "03.01.20 Use of External Systems",
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
                    name: "03.01.22 Publicly Accessible Content",
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
                    name: "03.02.01 Literacy Training and Awareness",
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
                    name: "03.02.02 Role-Based Training",
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
            name: "3.4 Configuration Management",
            children: [
                {
                    name: "03.04.01 Baseline Configuration",
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
                    name: "03.04.02 Configuration Settings",
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
                    name: "03.04.03 Configuration Change Control",
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
                    name: "03.04.04 Impact Analyses",
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
                    name: "03.04.08 Authorized Software – Allow by Exception",
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
                    name: "03.04.10 System Component Inventory",
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
                    name: "03.04.11 Information Location",
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
                    name: "03.04.12 System and Component Configuration for High-Risk Areas",
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
                    name: "03.05.01 User Identification and Authentication",
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
                    name: "03.05.02 Device Identification and Authentication",
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
                }
            ]
        },
        {
            name: "3.6 Incidence Response",
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
            name: "3.7 Maintenance",
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
            name: "3.12 Security Assessment ans Monitoring",
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
        {
            name: "3.15 Planning",
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
            name: "3.16 System and Services Acquisition",
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
            name: "3.17 Supply Chain Management",
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
