export function h({tag = 'div', attributes, children}) {
    const el = document.createElement(tag);
    if (attributes) {
        for (let attr in attributes) {
            if (attributes.hasOwnProperty(attr)) {
                el.setAttribute(attr, attributes[attr]);
            }
        }
    }
    if (children) {
        children.forEach(child => el.appendChild(h(child)));
    }
    return el;
}

