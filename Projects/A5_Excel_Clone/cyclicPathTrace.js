// For delay and wait
function colorPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}

async function isGraphCyclicTracePath(graphComponentMatrix, cycleResponse) {
    let [srcr, srcc] = cycleResponse;
    // console.log(srcr + " " + srcc);
    let visited = []; // Node visit trace
    let dfsVisited = []; // Stack visit trace

    for (let i = 0; i < rows; i++) {
        let visitedRow = [];
        let dfsVisitedRow = [];
        for (let j = 0; j < cols; j++) {
            visitedRow.push(false);
            dfsVisitedRow.push(false);
        }
        visited.push(visitedRow);
        dfsVisited.push(dfsVisitedRow);
    }

    let response = await dfsCycleDetectionTracePath(graphComponentMatrix, srcr, srcc, visited, dfsVisited);
    if (response === true) return Promise.resolve(true);

    return Promise.resolve(false);
}

// Coloring cell for tracking
async function dfsCycleDetectionTracePath(graphComponentMatrix, srcr, srcc, visited, dfsVisited) {
    visited[srcr][srcc] = true;
    dfsVisited[srcr][srcc] = true;

    let cell = document.querySelector(`.cell[rid="${srcr}"][cid="${srcc}"]`); // get cell
    cell.style.backgroundColor = "lightgreen";
    // wait for 1sec
    await colorPromise(); // 1sec finished

    for (let children = 0; children < graphComponentMatrix[srcr][srcc].length; children++) {
        let [nbrr, nbrc] = graphComponentMatrix[srcr][srcc][children];
        if (visited[nbrr][nbrc] === false) {
            let response = await dfsCycleDetectionTracePath(graphComponentMatrix, nbrr, nbrc, visited, dfsVisited);
            if (response === true) {
                cell.style.backgroundColor = "transparent";
                // wait for 1sec
                await colorPromise(); 

                return Promise.resolve(true);
            }
        }
        else if (visited[nbrr][nbrc] === true && dfsVisited[nbrr][nbrc] === true) {
            let cyclicCell = document.querySelector(`.cell[rid="${nbrr}"][cid="${nbrc}"]`);

            cyclicCell.style.backgroundColor = "lightsalmon";
            // wait for 1sec
            await colorPromise();
            cyclicCell.style.backgroundColor = "transparent";

            cell.style.backgroundColor = "transparent";
            // wait for 1sec
            await colorPromise();

            return Promise.resolve(true);
        }
    }

    dfsVisited[srcr][srcc] = false;
    return Promise.resolve(false);
}