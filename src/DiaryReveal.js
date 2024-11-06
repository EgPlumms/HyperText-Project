import Output from "./Output";

function DiaryReveal() {
    return(
        <div>
            <div className="background"></div>
            <div className="text">
                <div className="bold">
                    <Output text="Objective: Discover The Hidden Key That Unlocks The Puppeteer's Diary To Reveal Vital Information For Breaking The Curse."/>
                </div>
                <div id="ital">
                    <Output text="Step 5: Read The Puppeteers Diary"/>
                </div>
                <Output text="After Unlocking, You Discover The Diary Filled With The Puppeteer's Regrets And Vital Insights Into Breaking The Curse."/>
                <a id="boot" href="/Entry1">Open The Diary</a>
            </div>
        </div>
    )
}

export default DiaryReveal;