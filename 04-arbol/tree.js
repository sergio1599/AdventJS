const tree = 3;

function createXmasTree(height) {
  let tree = "";
  const spaceTrunk = "_".repeat(height - 1);

  if ((height) => 1 && height < 100) {
    for (let index = 1; index <= height; index++) {
      const space = "_".repeat(height - index);
      const star = "*".repeat(index * 2 - 1);
      tree += space + star + space + "\n";
      if (index === height) {
        tree += `${spaceTrunk + "#" + spaceTrunk}\n`.repeat(2);
      }
    }
  }

  return tree.trim();
}

const createTree = createXmasTree(tree);

console.log(createTree);
