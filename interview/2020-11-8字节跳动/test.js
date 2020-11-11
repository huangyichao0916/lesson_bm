function serialize(tree) {
    let arr = [];
    arr.push(tree.name);
    if (tree.children == null) return arr;
    for (let item of tree.children) {
        arr = arr.concat(serialize(item));
    }
    return arr;
}