import Output from "./Output";

function DollRoom() {
    return(
        <div>
            <div className="background"></div>
            <div className="text">
                <div className="bold">
                    <Output text="Objective: Discover The Hidden Key That Unlocks The Puppeteer's Diary To Reveal Vital Information For Breaking The Curse."/>
                </div>
                <Output text="The Chest Unlocks, Revealing A Locket Containing A Faded Portrait Of The Puppeteer And Lila. Inside is A Shimmerking Key - The Key To The Diary."/>
                <div id="ital">
                    <Output text="Step 3: Return To The Doll Room"/>
                </div>
                <Output text="With The Key In Hand, You Make Your Way Back To The Room Of Dolls, Who Gather Around You With Eager Expressions."/>
                <a id="boot" href="/Diary">Show The Dolls The Key</a>
                <p></p>
                <a id="boot" href="/Dollhouse">Keep The Key Hidden And Explore Further</a>
            </div>
        </div>
    )
}

export default DollRoom;