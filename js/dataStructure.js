// 数据结构：深度优先遍历（DFS：Depth-First Search），广度优先遍历（BFS）


// 1、深度优先：该方法是以纵向的维度对dom树进行遍历，从一个dom节点开始，一直遍历其子节点，直到它的所有子节点都被遍历完毕之后在遍历它的兄弟节点。
// 通俗的说就是“顺着起点往下走，直到无路可走就退回去找下一条路径，直到走完所有的结点”。往下走主要是优先遍历结点的子结点。
/**
 * js实现该算法代码(递归版本)
 * @param {*} node 需要遍历的节点
 * @param {*} nodeList 节点所存储的数组
 */
function deepFirstSearch(node, nodeList){
  if(node){
    nodeList.push(node)
    let children = node.children;
    for(let i = 0; i<children.length;i++){
      //每次递归的时候将 需要遍历的节点 和 节点所存储的数组传下去
      deepFirstSearch(children[i],nodeList)
    }
  }
  return nodeList
}
{/* <div id="root">
    <ul>
        <li>
            <a href="">
                <img src="" alt="">
            </a>
        </li>
        <li>
            <span></span>
        </li>
        <li>
        </li>
    </ul>
    <p></p>
    <button></button>
</div> */}
let root = document.getElementById('root')
deepFirstSearch(root,nodeList=[])
// 0: div#root
// 1: ul
// 2: li
// 3: a
// 4: img
// 5: li
// 6: span
// 7: li
// 8: p
// 9: button



// 2、广度优先：以横向的维度对dom树进行遍历，从该节点的第一个子节点开始，遍历其所有的兄弟节点，再遍历第一个节点的子节点，完成该遍历之后，暂时不深入，开始遍历其兄弟节点的子节点
// 递归版本的BFS由于层级太深，会导致堆栈溢出：Maximum call stack size exceeded，但遍历的顺序依旧没有问题，可以在遍历过程中进行操作，不返回遍历数组即可
/**
 * 递归版本
 * @param {*} node 需要遍历的节点
 */
function breadFirstSearch(node){
  let nodes = [];
  let i = 0;
  if(!(node == null)){
    nodes.push(node)
    breadFirstSearch(node.nextElementSibling);
    node = nodes[i++]
    breadFirstSearch(node.firstElementChild)
  }
  return nodes
}
/**
 * 非递归版本
 * @param {*} node 需要遍历的节点
 */
function breadFirstSearch1(node){
  let nodes = [];
  if(node != null){
    let queue = [];
    queue.unshift(node);
    while(queue.length != 0){
      let item = queue.shift();
      nodes.push(item)
      let children = item.children;
      for(let i = 0; i<children.length;i++) queue.push(children[i])
    }
  }
  return nodes
}
let root = document.getElementById('root')
breadFirstSearch(root,nodeList=[])
// 0: div#root
// 1: ul
// 2: p
// 3: button
// 4: li
// 5: li
// 6: li
// 7: a
// 8: span
// 9: img