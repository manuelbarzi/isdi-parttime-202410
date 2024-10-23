console.log('Hello, DOM!')

function printDOMTree(node, level) {
    if (node === undefined) node = document
    if (level === undefined) level = 0

    for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i]

        if (child instanceof DocumentType || child instanceof Text) continue

        var indent = ''

        for (var j = 0; j < level; j++)
            indent = indent + ' '

        console.log(level, indent + child.nodeName)

        printDOMTree(child, level + 1)
    }
}

printDOMTree()

/*
html
    head
        meta
        meta
        title
    body
        h1
        p
        h2
        ul
            li
            li
            li
        h2
        table
            tbody
                tr
                    th
                    th
                    th
                tr
                    td
                    td
                    td
                tr
                    td
                    td
                    td
                tr
                    td
                    td
                    td
        script
*/