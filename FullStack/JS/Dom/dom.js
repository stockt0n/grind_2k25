/*
   dom is runtime data structure created by the browser.

   when a browser loads a webpage three things happen:
      - first browser reads the hmtl and parses it, means converting the text into structural objects, leading into the creation of dom tree.

      - second, the browser parses css and creates cssom, separate tree that represents style.

      -third the browser combines dom and cssom that creates the render tree which is rendered to the webpage.

      js primarly interacts with dom and not html.
      dom is an object graph living in the memory

      every node tree has exactly one parent, except the root.
      nodes can have multiple children.
      order matters

      each node has shared properties
         nodeType
         nodeName
         nodeValue
         parentName
         childNodes


      every dom tree has one root - `document`, it owns the entire tree, exposes entry points such as body, head, documentElement, and acts as a bridge between dom and js. nodeType = 9

      element nodes represents html tags, nodeType === 1, nodeName === tagName, it can have children and attributes.

      commentNode, type === 8, nodeName = #comment

*/

// document is a global object, created by the browser
console.log(document);

// print the state of the document, loading=dom is being built, interactive= dom is ready, resource may load, complete=everything loaded
console.log(document.readyState);

// defer: script downloaded in parallel, executes once the dom is parsed, order preserved
// async:  executes as soon as its ready, order not guaranteed


// before changing dom content we must obtain a refernce to a node
const p1 = document.getElementById('p1'); // we made a reference to the p1 id element..

// getElementById returns one element or null ids are unique by spec faster selector


// getElementsByClassName: returns a HTMLCollection, live: auto update the dom once modified

const items = document.getElementsByClassName('list');
for(let i = 0; i < items.length; i++) {
   items[i].style.color = '#3ece1aff';
}
// its an array. indexed using [], has length but no array methods

// getElementsByTagName: returns all elements by found tag, live, it can be called on any element
const tagelements = document.getElementsByTagName('li');
for(let i = 0; i < tagelements.length; i++) {
   tagelements[i].style.fontSize = '32px';
}

// HTMLCollection: returned by getElementsBy, live, element Nodes only
// NodeList: returned by some new apis can be static or live may include non elements
// the difference matters for performance

