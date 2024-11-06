import Output from "./Output";

function Entry1() {
    return(
        <div>
            <div className="background"></div>
            <div className="text">
                <div className="bold">
                    <Output text="The Puppeteer's Diary"/>
                </div>
                <Output text="Entry 1: The Beginning Of Creation"/>
                <div id="ital">
                    <Output text="Date: Unknown"/>
                </div>
                <Output text="Today, I Embarked On A Journey To Transcend The Mundane. My Ambition Consumes Me - I Will Craft Dolls That Mimic Life Itself, Each One A Perfect Vessel For A Fragment Of My Genius. But What If I Could Do More? What If I Could Bind Their Very Souls To The Toys? This Would Be My Ultimate Triumph, A Grotesque MasterPiece."/>
                <a id="boot" href="/Entry5">Continue Reading</a>
            </div>
        </div>
    )
}

export default Entry1;