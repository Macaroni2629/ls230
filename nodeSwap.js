/*
Node Swap
Write a function that takes two element ids as arguments and swaps the positions of the elements represented by the ids. The function returns true for valid swaps and undefined for invalid. To put the focus on the node swapping functionality, you can assume that nodes will have a value for the id attribute and two arguments will always be provided. Use the following HTML and sample codes to test your output:

Problem: Write a function that takes two element ids as arguments and swaps the positions of the elements represented by the ids.

The function returns true for valid swaps
The function returns undefined for invalid.

Nodes will always have a value for the `id` attribute and two arguments will always be provided.

// at least one of the id attributes doesn't exist
> nodeSwap(1, 20);
= undefined

// at least one of the nodes is a "child" of the other
> nodeSwap(1, 4);
= undefined
> nodeSwap(9, 3);
= undefined

*/

function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);

  let parent1 = node1.parentNode;
  let parent2 = node2.parentNode

  parent1.replaceChild(node2, node1);
  parent2.replaceChild(node1, node2);
}