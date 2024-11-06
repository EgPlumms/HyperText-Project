import Output from "./Output";

function Circus(){
    return(
        <div>
            <div className="background"></div>
            <div className="text">
                <div className="bold">
                    <Output text="You Arrive At The Circus Grounds, Where The Remains Of Carnival Attractions And Performers Lie In Eerie Silence. You Discover Two Notable Areas: A Twisted Funhouse Filled With Distorted Mirrors Or A Backstage Area Cluttered With Old Costumes And Props."/>
                </div>
                <div id="ital">
                    <Output text="What Path Shall You Pick?"/>
                </div>
                <Output text="1. Enter The Twisted Funhouse And See If You Can Escape The Distorted Mirrors"/>
                <a id="boot" href='./Funhouse'>Enter The Twisted Funhouse</a>
                <Output text='2. Explore The Backstage Area And Scavenge Through Old Costumes And Props'/>
                <a id="boot" href="./Backstage">Explore The Backstage Area</a>
            </div>
        </div>
    )
}

export default Circus;