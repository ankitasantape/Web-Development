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



*/


let graphComponentsMatrix = [];

for (let i = 0;i < rows;i++) {
    let row = [];
    for (let j = 0;j < cols;j++) {
        row.push([]);
    }
    graphComponentsMatrix.push(row);
}

function isGraphCyclic(graphComponentsMatrix) {  // Cycle detection in Directed graph algorithm
    let graphVisited = [];  // Keep track of visited vertex( node )
    let dfsVisited = [];  // Keep track of visited vertex( node ) in dfs call

    for (let i = 0;i < rows;i++) {
        let graphRow = [];
        let dfsRow = [];
        for (let j = 0;j < cols;j++) {
            graphRow.push(false);
            dfsRow.push(false);
        }
        graphVisited.push(graphRow);
        dfsVisited.push(dfsRow);
    }

    for (let i = 0;i < rows;i++) {
        for (let j = 0;j < cols;j++) {
            if (graphVisited[i][j] == false) {

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

function cyclicDFS(graphComponentsMatrix, srcr, srcc, graphVisited, dfsVisited) {
    graphVisited[srcr][srcc] = true;
    dfsVisited[srcr][srcc] = true;

    for (let i = 0;i < graphComponentsMatrix[srcr][srcc].length;i++) {
        let neighbour = graphComponentsMatrix[srcr][srcc][i];
        let nbrr = neighbour[0];
        let nbrc = neighbour[1];

        if (graphVisited[nbrr][nbrc] == false) {
            if (cyclicDFS(graphComponentsMatrix, nbrr, nbrc, graphVisited, dfsVisited) == true) {
                return true;
            }
        }
        else if (dfsVisited[nbrr][nbrc] == true) {  // If visited in both dfs call path and in graph vertex visited, then cycle exists
            return true;
        }
    }

    dfsVisited[srcr][srcc] = false;  // Backtrack by unvisiting dfs path
    return false;
}