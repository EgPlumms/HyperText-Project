import Output from "./Output";

function Cursed(){
    return (
    <div>
        <div className="background"></div>
        <div className="text">
            <div className="bold">
                <Output text='You Step Into The Forest, Where The Trees Seem To Move And The Air Is Thick With An Unsettling Fog. You Come Across Two Significant Options: A Hidden Grove With An Ancient Stone Altar Or A Narrow Path Leading Deeper Into The Forest, Where Distant, Haunting Laughter Can Be Heard.'/>
            </div>
            <div id="ital">
                <Output text='What Path Shall You Pick?'/>
            </div>
            <Output text='1. Explore The Hidden Grove And Dig Deeper Into The Secrets Of The Ancient Stone Altar'/>
            <a id="boot" href='./Grove'>Explore The Hidden Grove</a>
            <Output text='2. Follow The Narrow Path And Investigate The Haunting Laughter In The Distance'/>
            <a id="boot" href="./Path">Follow The Narrow path</a>
        </div>
    </div>
    )
}

export default Cursed;