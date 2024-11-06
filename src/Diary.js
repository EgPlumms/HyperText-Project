import Output from "./Output";

function Diary() {
    return(
        <div>
            <div className="background"></div>
            <div className="text">
                <div className="bold">
                    <Output text="Objective: Discover The Hidden Key That Unlocks The Puppeteer's Diary To Reveal Vital Information For Breaking The Curse."/>
                </div>
                <Output text="The Dolls Guide You To A Hidden Compartment In The Wall"/>
                <div id="ital">
                    <Output text="Step 4: Unlock The Diary"/>
                </div>
                <Output text="Use They Key To Unlock The Panel To Reaveal The Puppeteer's Diary."/>
                <a id="boot" href="/DiaryReveal">Unlock The Compartment</a>
                <p></p>
                <a id="boot" href="/DollHouse">Decide Not To Unlock It Yet</a>
            </div>
        </div>
    )
}

export default Diary;