window.dom = {
  create(str) {
    const container = document.createElement("template");
    container.innerHTML = str.trim();
    return container.content.firstChild;
  },
  createAfter(node, toInsert) {
    node.parentNode.insertBefore(toInsert, node.nextSibling);
  },
  createBefore(node, toInsert) {
    node.parentNode.insertBefore(toInsert, node);
  },
  appendToParent(parent, child) {
    parent.appendChild(child);
  },
  wrapWith(toBeWrapped, wrapper) {
    this.createBefore(toBeWrapped, wrapper);
    this.appendToParent(wrapper, toBeWrapped);
  },
  removeNode(node) {
    node.parentNode.removeChild(node);
    return node;
  },
  emptyNode(node) {
    const returnNodes = [];
    const { childNodes } = node;
    console.log(childNodes);
    while (childNodes.length !== 0) {
      this.removeNode(childNodes[0]);
      returnNodes.push(childNodes[0]);
    }
    return returnNodes;
  },
  addAttribute(element, name, value) {
    element.setAttribute(name, value);
    return element;
  },
  getAttribute(element, name) {
    return element.getAttribute(name);
  },
  setText(element, text) {
    if ("innerText" in element) {
      element.innerText = text;
    } else {
      element.textContent = text;
    }
    return element;
  },
  getText(element) {
    return "innerText" in element ? element.innerText : element.textContent;
  },
  setHtml(element, html) {
    element.innerHtml = html;
    return element;
  },
  getHtml(element) {
    return element.innerHtml;
  },
  addStyle(element, style) {
    for (const key in style) {
      element.style[key] = style[key];
    }
    return element;
  },
  getStyle(element, attr) {
    return element.style[attr];
  },
  class: {
    add(element, className) {
      element.classList.add(className);
      return element;
    },
    remove(element, className) {
      element.classList.remove(className);
      return element;
    },
    contains(element, className) {
      return element.classList.contains(className);
    },
  },
  on(element, eventName, fn) {
    element.addEventListener(eventName, fn);
  },
  off(element, eventName, fn) {
    element.removeEventListener(eventName, fn);
  },
  find(selector) {
    return document.querySelectorAll(selector);
  },
  findInElement(selector, element) {
    return element.querySelectorAll(selector);
  },
  parent(element) {
    return element.parentNode;
  },
  children(element) {
    return element.children;
  },
  siblings(element) {
    return Array.from(element.parentNode.children).filter(
      (item) => item !== element
    );
  },
  next(element) {
    return element.nextSibling.nodeType === 3
      ? element.nextSibling.nextSibling
      : element.nextSibling;
  },
  previous(element) {
    return element.previousSibling.nodeType === 3
      ? element.previousSibling.previousSibling
      : element.previousSibling;
  },
  traverse(elements, fn) {
    elements.childNodes.forEach((element) => {
      if (element.nodeType !== 3) {
        fn.call(null, element);
      }
    });
  },
  index(element) {
    let index;
    const all = this.children(element.parentNode);
    for (let i = 0; i < all.length; i++) {
      if (all[i] === element) {
        index = i + 1;
        break;
      }
    }
    return index;
  },
};
