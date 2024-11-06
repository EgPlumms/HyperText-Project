import Output from "./Output";

function Path(){
    return(
       <div>
        <div className="background"></div>
        <div className="text">
            <div className="bold">
                <Output text="The Path Leads You To A Decrepit Mansion Deep Within The Forest. Inside, You Find A Mysterious Door With Intricate Carvings And A Puzzle Lock. Solving The Puzzle Might Open The Door Or Trigger A Trap."/>
            </div>
            <div id="ital">
                <Output text='Is A Puzzle Worth Risking The Sanity Of Wonderland And Its Inhabitants? Thats Your Choice To Make.'/>
            </div>
            <Output text='1. Solve The Puzzle And See What Secrets Lie Behind The Door'/>
            <a id="boot" href="./Puzzle">Solve The Puzzle</a>
            <Output text='2. Find Another Way And Risk WonderLands Sanity'/>
            <a id="boot" href="./AnotherWay">Search For Another Way</a>
        </div>
       </div> 
    )
}

export default Path;