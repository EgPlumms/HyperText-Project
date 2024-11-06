import Output from "./Output";

function UpAttic() {
    return(
        <div>
            <div className="background"></div>
            <div className="text">
                <div className="bold">
                    <Output text="Objective: Discover The Hidden Key That Unlocks The Puppeteer's Diary To Reveal Vital Information For Breaking The Curse."/>
                </div>
                <Output text="A Hidden Door Opens, Revealing A Staircase To The Attic"/>
                <div id="ital">
                    <Output text="Step 2: The Attic's Trials"/>
                </div>
                <Output text="Upon Entering The Attic, You Find A Large, Locked Chest And Three Ornate Keys Marked With A Heart, Star, And Skull."/>
                <Output text="Choose The Correct Key Based On A Riddle Posed By A Shadowy Figure Resembling The Puppeteer"/>
                <Output text='"I Beat Without A Sound, And Though I Am Often Fragile, I Can Endure More Than You Think. I Live Within Us All, Binding Us With Invisible Threads, Yet I Can Be Broken In An Instant. What Am I?"'/>
                <a id="boot" href="/DollRoom">Select The Heart Key</a>
                <p></p>
                <a id="boot" href="/AtticFail">Select The Star Key</a>
                <p></p>
                <a id="boot" href="/AtticFail">Select The Skull Key</a>
            </div>
        </div>
    )
}

export default UpAttic;