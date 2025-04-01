"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("showNodes");
    button.addEventListener("click", function () {
        const output = document.getElementById("nodeDetails");
        output.textContent = ""; //clear previous output
        displayNodeDetails(document, 0, output);
    });
});

const NODE_TYPE_MAP = {
    1: "Element",
    2: "Attribute",
    3: "Text",
    4: "CDATA Section",
    5: "Entity Reference",
    6: "Entity",
    7: "Processing Instruction",
    8: "Comment",
    9: "Document",
    10: "Document Type",
    11: "Document Fragment",
    12: "Notation"
};

function displayNodeDetails(node, level, outputElement) {
    const indentation = " ".repeat(level * 4);
    const nodeType = NODE_TYPE_MAP[node.nodeType] || "Unknown";

    outputElement.textContent += `${indentation}${node.nodeName} (${nodeType})\n`;

    for (let child of node.childNodes) {
        displayNodeDetails(child, level + 1, outputElement);
    }
}
