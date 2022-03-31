/*

Cycle Detection in Directed Graph :
    
1) Graph relation ? Kaise ani graph ki relation ?
Agar B1 dependent hai A2 pe to formula hoga F: A2 + 10 to es jagah pe hai A2 dependency for B1, to A2 will be parent of B1
A2 ke childrens me B1 aayega as a child
   A2 :
      childrens: [ 'B1' ]

2) How this graph is Directed ?      
Agar aisehi dekha jaye to aise bahot se parent-child relation ban skte hai, one sided p-c relation dikhne lagenge jisme dependency bhi hogi
To es dependency aur relation ke wajah se esko graph ye term relate krti hai.
but, hum ese Graph hi Q kaha rahe hai tree Q nhi kr rhe becoz tree me to parent-child relation hota hai aur graph me source-neighbour hote hai ?
-> Tree bhi ek tarah ka graph hi hota hai, wo bhi graph ke under hi aata hai
-> Agar hum tree ko ek generic tree manenge
-> Trees me parent node apne child ki reference store krta hai, but eska inverse nhi ho skta trees me, i.e ki ye one-sided relation hai,
-> parent se child tak pahucha ja skta hai but child se parent tak pahucha nhi ja skta
-> To tree ye bhi ek directed graph hi hai.
-> # Tree is a special type of directed graph
    Nodes -> cells 
                  -> A1 , 
                  -> B2 , 
                  -> C4 

3) How do we detect cycle ?
    B1: A1 + 10
    C1: B1 + 10
    A1: C1 + 10
Cycle Formed :
    A1 ---------> B1
    ^  \        |
    |   \       |
    |    \      | 
          \     | 
           \    |
            \   |  
             \  |
              \ |down-arrow
               C1

    Recursively 
            -> Children > 0
                    -> Evaluation Formula
            -> Repeate
    -> Stack Overflow aa jayega agar code ruka nahi to aur code fat jayega
    -> isliye hume valid condition lagani padegi        
    -> isliye hume cycle detection ki algo lagayenge

# Cycle Detection Algo in Directed Graph ? 
         Hume dependency kaise pata lagegi?
         Hum ek arr lenge jisame dependencies ko store krenge
                                                Graph1 |  Graph2 
         1 ----* 2 ----* 3 ----* 4                1         7
                 *       |       |                |         |
                 |       |       |                2         8    
                 |       *       *                |         |
                 7       6 ----* 5                3         9
                 | *                             / \         \
                 |  \                           6   4         7  <- cycle found 
                 *   \                         / 
                 8 --* 9                      5 
    Arrays:    
    src           | 1 | 2 | 3    | 4 | 5 | 6 | 7    | 8 | 9 |    --> int type arr    
    dependency    | 2 | 3 | 4, 6 | 5 |   | 5 | 2, 8 | 9 | 7 |    --> int type arr 
    visited       | T | T | T    | T | T | T | T    | T | T |   --> boolean type arr, True: visited, False: unvisited
    dfsVisited    | T | T | T    | T | T | T | T    | T | T |
    (stackTrace)
    
    1 -> dependend on 2
    2 -> dependend on 3
    3 -> dependend on 4, 6
    4 -> dependend on 5
    5 -> 
    6 -> dependend on 5
    7 -> dependend on 2, 8
    8 -> dependend on 9
    9 -> dependend on 7

*Algo:   
    -> IF any one node, cyclic, then entire graph will be cyclic.
    -> start  : On node visit, mark node as visited visited[node] = True, and dfsVisited[node] = True
    -> end    : dfsVisited[node] = False 
                 -> jb hum wapas jayenge tab us node ko dfsVisited se unmark krte jayenge becoz ye recursive code hai
    -> On already visited node, backtrack.  
    -> visited[node] == True && dfsVisited[node] == True -> Cycle Detected.

Implementation: Grid -> cells => 2D Matrix
  -> Storage -> 2D Matrix
  -> Relation -> P-C relation
  -> Implement

*Storage ->   1, 2, 3....... 26
          1 [[[],[],[],[]..... ], 
          2   [ ], 
          3   [ ],
          ........
         100  [ ] ] 
*Relation ->
   -> Humane grid ke rows ke cells me obj{} rkhe the but ab arrays rkh rhe hai. why?
      Que. Why Array?
      -> Becoz one node can have more than one dependency(children)
         Let, suppose humane pas ye formula hai
         F:: B1: A1 + 10, F:: C1: A1 + 20
    node:       A1           B1
    children: [ B1, C1 ]   [    ]
   -> ais array me relation kaise banayenge ? p-c
       for relationship -> B1 represented as -> [0, 1]
                           C1 represented as -> [0, 2] 
       node:       A1
       children: [[0, 1], [0, 2]] hum ais array me directly decoded values hi dal rhe hai
                    |       |
                    B1     C1
*How relation ? -> [0, 1] decoded child array pahle the address ab decoded form me dal rhe [0,1] -> [rid, cid] 
              A-1,                                      B-2,   C-3,   D-4 ...... Z-26
          1 [row: [ cell: [ childrens:[0,1], [0,2] ],    [],    [],    []........     ], 
          2 [[ [0,1]], [[],[]], ], 
          3   [ ],
          ........
         100  [ ] ] 

*/

// *Storage -> @D matrix (Basic needed)
let graphComponentsMatrix = [];

for (let i = 0;i < rows;i++) {
    let row = [];
    for (let j = 0;j < cols;j++) {
        // row me object ki jagah arrays ko push krenge
        //why array -> becoz more than 1 child relation(dependency) banenge to hum yaha pe kafi sare childrens ko dal payenge
        row.push([]);
    }
    // humari 100 rows component matrix me dal jayegi
    graphComponentsMatrix.push(row);
}

// *Algorithm
// True -> cyclic, false -> non-cyclic
function isGraphCyclic(graphComponentsMatrix) {  // Cycle detection in Directed graph algorithm
    // Dependency -> visited, dfsVisited ( 2D array )
    let graphVisited = [];  // Keep track of visited vertex( node )
    let dfsVisited = [];  // Keep track of visited vertex( node ) in dfs call -> stackTrace

    // 100 rows 
    for (let i = 0; i < rows; i++) {
        let graphRow = []; // visited ( 1D Array )
        let dfsRow = []; // dfs ( 1D Array )

        // 26 columns
        // dependencies me default value false dal denge
        for (let j = 0; j < cols; j++) {
            graphRow.push(false); // initially visited array me false dal denge
            dfsRow.push(false); // aur dfs array me bhi false denge
        }
        // default wali 2D array jisame bydefault false
        graphVisited.push(graphRow);
        dfsVisited.push(dfsRow);
    }

    for (let i = 0;i < rows;i++) {
        for (let j = 0;j < cols;j++) {
            // agar ye node already visited nhi hai to proceed kro, else return kr jao
            if (graphVisited[i][j] == false) {
                // agar cyclic hai to us cell ki rid aur cid return krdo jaha pe ye cycle form ho rhi hai
                if (cyclicDFS(graphComponentsMatrix, i, j, graphVisited, dfsVisited) == true) {
                    return [i, j];
                    // {
                    //     srcr: i,
                    //     srcc: j
                    // }  // Returns cycle path src point for color tracking
                }
            }
        }
    }

    return null;
}

// 
function cyclicDFS(graphComponentsMatrix, srcr, srcc, graphVisited, dfsVisited) {
    graphVisited[srcr][srcc] = true; // mark visited 
    dfsVisited[srcr][srcc] = true; // mark visited

    for (let i = 0; i < graphComponentsMatrix[srcr][srcc].length; i++) {
        let neighbour = graphComponentsMatrix[srcr][srcc][i]; // get neighbour node
        let nbrr = neighbour[0]; // get nr ki rid
        let nbrc = neighbour[1]; // get nbr ki cid

        // agar nbr unvisited hai tabhi aage badhna 
        if (graphVisited[nbrr][nbrc] == false) {
            // then nbr pe call krna
            if (cyclicDFS(graphComponentsMatrix, nbrr, nbrc, graphVisited, dfsVisited) == true) {
                return true;
            }
        }  
        else if (dfsVisited[nbrr][nbrc] == true) {  // If visited in both dfs call path and in graph vertex visited, then cycle exists
            return true;
        }
    }
    // wapas aate time stack me se us node ko uda dena aur us node ko unvisited mark kr dena 
    dfsVisited[srcr][srcc] = false;  // Backtrack by unvisiting dfs path
    return false;
}