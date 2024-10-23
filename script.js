var margin = { top: 20, right: 200, bottom: 20, left: 120 },
    width = 1800 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom;

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
                    name: "03.01.03 Access Termination",
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

    nodes.forEach(function (d) { d.y = d.depth * 250; });

    var node = svg.selectAll("g.node")
        .data(nodes, function (d) { return d.id || (d.id = ++i); });

    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
        .on("click", click);

    nodeEnter.append("circle")
        .attr("r", 1e-6)
        .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

    nodeEnter.append("text")
        .attr("x", function (d) { return d.children || d._children ? -10 : 15; })
        .attr("dy", ".35em")
        .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
        .text(function (d) { return d.name; })
        .style("fill-opacity", 1e-6);

    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

    nodeUpdate.select("circle")
        .attr("r", 4.5)
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
