/*
Tracing the DOM Tree
Write a JavaScript function that takes an element's id and returns the DOM tree of the element in a two-dimensional array. The first subarray contains the element and its siblings, the second contains the parent of the element and its siblings, so on and so forth, all the way up to the "grandest" parent. Assume that the grandest parent is the element with an id of "1". Use the following HTML and test cases to test your code:

Problem: Write a Javascript function that takes an element's id and returns the DOM tree of the element in a 2D array

Rules: The first subarray contains the element and its siblings
The second contains the parent of the element and its siblings, so on and so forth, all the way up to the grandest parent

> domTreeTracer(1);
= [["ARTICLE"]]
Uses the ID and finds an element, finds that it has no parents
> domTreeTracer(2);
= [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
Uses the id 2 and finds its parent, then finds all its child nodes
> domTreeTracer(22);
= [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]

Data structure:
input: an id number
output: an array of subarrays containing strings

Algorithm:
Get current node with id
initialize answer array
get parent node

until you're at the final parent, for each generation, declare an array for `currentGen`.  
Get all the children of the parentNode
Place the siblings in an array
Get all the siblings' names and put in an array


*/

function domTreeTracer(id) {
  let node = document.getElementById(id);
  let parentNode = node.parentNode;
  let answer = [];
  while (parentNode.nodeName !== "HTML") {
    let siblings = parentNode.children;
    siblings = [...siblings]
    let siblingNames = siblings.map(sibling => sibling.nodeName)
    answer.push(siblingNames);
    parentNode = parentNode.parentNode;
  }
  answer[answer.length - 1] = [answer[answer.length - 1][0]];
  return answer;
}

/*
AM GETTING SCRIPT IN ANSWER DON'T KNOW HOW TO GET RID
*/