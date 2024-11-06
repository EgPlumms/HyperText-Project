import Output from "./Output";

function Backstage(){
    return(
        <div>
            <div className="background"></div>
            <div className="text">
                <div className="bold">
                    <Output text="Among The Cluttered Costumes And Props, You Find A Hidden Room Containing Old Circus Posters And Notes About The Circus's Fall Into Madness. The Notes Provide Clues About The Source Of The Corruption And How To Combat It."/>
                </div>
                <div id="ital">
                    <Output text="Will These Notes Give You The Final Clues You Need To Defeat The Madness?"/>
                </div>
                <Output text='1. Investigate The Notes And Continue Looking Around.'/>
                <a id="boot" href="./Notes">Investigate The Notes</a>
                <Output text='2. Take The Notes And Leave Risking Not Finding Everything In The Backstage Area.'/>
                <a id="boot" href="./Leave">Take The Notes And Leave</a>
            </div>
        </div>
    )
}

export default Backstage;