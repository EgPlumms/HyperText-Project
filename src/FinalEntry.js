import Output from "./Output";

function FinalEntry() {
    return(
        <div>
            <div className="background"></div>
            <div className="text">
                <div className="bold">
                    <Output text="The Puppeteer's Diary"/>
                </div>
                <Output text="Final Entry: A Desperate Plea"/>
                <div id="ital">
                    <Output text="Date: Unknown"/>
                </div>
                <Output text="If You Hold This Diary, You Are My Last Hope And The Final Chance For Redemption. The Key To Their Freedom Lies In Confronting The Darkness I've Unleashed. You Must Navigate The Harrowing Challenges And Face The Truth Of Their Cursed Existence. Succeed, And The Chains Will Shatter, Freeing Their Tormented Souls. Remember, Only Kindness And Courage Can Pierce The Veil Of This Darkness. Help Them Find Peace, And Perhaps You Will Find Your Own- Or Be Consumed By The Shadows I Have Created."/>
                <Output text="The Pages Are Steeped In Despair, A Testament To The Puppeteer's Twisted Ambition And The Haunting Fates Of The Dolls. Armed With This Knowledge, You Feel A Chilling Determination To Confront The Darkness That Binds The Dollhouse And Its Inhabitants."/>
                <a id="boot" href="/Dollhouse">Stop Reading</a>
            </div>
        </div>
    )
}

export default FinalEntry;