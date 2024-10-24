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
                                { name: "Deaktop computers" },
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
        }
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
