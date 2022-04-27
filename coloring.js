/*
Coloring
Write a function that colors a specific generation of the DOM tree. A generation is a set of elements that are on the same level of indentation. We'll be using a "styled" HTML for this exercise to better visualize the generations. You may use the .generation-color class to color the specific generation. You can assume that only non-negative integers will be provided as arguments. Following are some sample output to help you test your code:

Problem: Write a function that colors a specific generation of the DOM tree.

Rules:
A generation is a set of elements that are on the same level of indentation

Use the .generation-color class to color the specific generation.

only non-negative integers will be provided as arguments

Example 1: Only article was colored in
Example 4: everything that was on the same indentation as 4 was colored in

How to check if two nodes are in the same indentation level?

*/

function getChildren(node) {
  let children = node.children;
  let arrayOfChildren = [...children];
  return arrayOfChildren;
};

function colorGeneration(num) {
  let generation = 1;
  let node = document.getElementById(num);
  let children = node.children;
  children = [...children];
  let answer = [children];

  while (generation !== num) {
    let children2;
    children.map(child => {
      children2 = getChildren(child);
      children2 = [...children2];
    })
    generation += 1;
    answer.push(children2);
    children = children2;
  }
  return answer;
};

