<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D3 Collapsible Tree</title>
    <script src="https://d3js.org/d3.v3.min.js"></script>
</head>
<body>
    <div id="tree-container"></div>
    <script>
        // Define the tree's dimensions and margins
        var margin = { top: 20, right: 200, bottom: 20, left: 120 },
            width = 1000 - margin.right - margin.left,
            height = 800 - margin.top - margin.bottom;

        var i = 0, duration = 750, root;

        // Set up the tree layout
        var tree = d3.layout.tree().size([height, width]);

        // Define the diagonal path for the links
        var diagonal = d3.svg.diagonal()
            .projection(function (d) { return [d.y, d.x]; });

        // Set up the SVG container for the tree
        var svg = d3.select("#tree-container").append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Define the tree data structure (including all nested levels)
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
                                { name: "Workstations" },
                                { name: "Network Devices" },
                                { name: "Cloud Infrastructure" },
                                { name: "OT Devices" }
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
                                { name: "Workstations" },
                                { name: "Network Devices" }
                            ]
                        },
                        // More sub-controls...
                    ]
                },
                {
                    name: "3.2 Awareness and Training",
                    children: [
                        {
                            name: "03.02.01 Literacy Training and Awareness",
                            children: [
                                { name: "Human Assets" }
                            ]
                        },
                        {
                            name: "03.02.02 Role-Based Training",
                            children: [
                                { name: "Human Assets" }
                            ]
                        }
                        // More sub-controls...
                    ]
                },
                // Additional control families...
            ]
        };

        // Assign the root node
        root = treeData;
        root.x0 = height / 2;
        root.y0 = 0;

        // Collapse the children of a node
        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);  // Recursively collapse all children
                d.children = null;
            }
        }

        // Initialize the tree with all nodes collapsed
        root.children.forEach(collapse);
        update(root);

        // Function to update the tree
        function update(source) {
            var nodes = tree.nodes(root).reverse(),
                links = tree.links(nodes);

            // Normalize for fixed-depth
            nodes.forEach(function (d) { d.y = d.depth * 180; });

            // Update the nodes
            var node = svg.selectAll("g.node")
                .data(nodes, function (d) { return d.id || (d.id = ++i); });

            // Enter new nodes at the source's previous position
            var nodeEnter = node.enter().append("g")
                .attr("class", "node")
                .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
                .on("click", click);

            nodeEnter.append("circle")
                .attr("r", 1e-6)
                .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

            nodeEnter.append("text")
                .attr("x", function (d) { return d.children || d._children ? -10 : 10; })
                .attr("dy", ".35em")
                .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
                .text(function (d) { return d.name; })
                .style("fill-opacity", 1e-6);

            // Transition nodes to their new position
            var nodeUpdate = node.transition()
                .duration(duration)
                .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

            nodeUpdate.select("circle")
                .attr("r", 4.5)
                .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

            nodeUpdate.select("text")
                .style("fill-opacity", 1);

            // Transition exiting nodes to the source's position
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
                .remove();

            nodeExit.select("circle")
                .attr("r", 1e-6);

            nodeExit.select("text")
                .style("fill-opacity", 1e-6);

            // Update the links
            var link = svg.selectAll("path.link")
                .data(links, function (d) { return d.target.id; });

            // Enter new links at the source's previous position
            link.enter().insert("path", "g")
                .attr("class", "link")
                .attr("d", function (d) {
                    var o = { x: source.x0, y: source.y0 };
                    return diagonal({ source: o, target: o });
                });

            // Transition links to their new position
            link.transition()
                .duration(duration)
                .attr("d", diagonal);

            // Transition exiting links to the source's position
            link.exit().transition()
                .duration(duration)
                .attr("d", function (d) {
                    var o = { x: source.x, y: source.y };
                    return diagonal({ source: o, target: o });
                })
                .remove();

            // Stash the old positions for transition
            nodes.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
        }

        // Toggle children on click
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
    </script>
</body>
</html>
