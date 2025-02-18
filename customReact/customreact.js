// function customRendor(reactElement, container){
//     const domElement = document.createElement(reactElement.type)
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)
//     domElement.innerHTML = reactElement.children
//     container.appendChild(domElement)
// }

function customRendor(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props){
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Clicke me to visit google'
}

const mainContainer = document.getElementById('root')

customRendor(reactElement, mainContainer)