import Output from "./Output";

function Attic() {
    return(
        <div>
            <div className="background"></div>
            <div className="text">
                <div className="bold">
                    <Output text="Objective: Discover The Hidden Key That Unlocks The Puppeteer's Diary To Reveal Vital Information For Breaking The Curse."/>
                </div>
                <div id="ital">
                    <Output text="Step 1: Ascend To The Attic"/>
                </div>
                <Output text="You Decide To Follow The Whispers, Leading You To A Dusty Foyer With A Large Clock Stuck At A Peculiar Time"/>
                <Output text="Adjust The Clock Hands To The Time Of The Puppeteer's Greatest Failure—Midnight."/>
                <a id="boot" href="/UpAttic">Turn The Hour Hand To 12</a>
                <p></p>
                <a id="boot" href="/Attic">Turn The Minute Hand To 12</a>
                <p></p>
                <a id="boot" href="/Attic">Search The Clock For Hints</a>
            </div>
        </div>
    )
}

export default Attic;