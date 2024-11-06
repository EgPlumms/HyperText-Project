import Output from "./Output";

function sidequest() {
    return(
        <div>
            <div className="background"></div>
            <div className="text">
                <div className="bold">
                    <Output text="Objective: Discover The Hidden Key That Unlocks The Puppeteer's Diary To Reveal Vital Information For Breaking The Curse."/>
                </div>
                <div id="ital">
                    <Output text="Quest Start: The Whispering Shadows And The Key To The Past"/>
                </div>
                <Output text="You Hear Faint Whispers Echoing Through The Dollhouse, Guiding You Toward The Attic. The Dolls Hint That The Key To The Diary Is Hidden There But You'll Need To Naviagte Challenges To Uncover It."/>
                <a id="boot" href="/Attic">Follow The Whispers To The Attic</a>
                <p></p>
                <a id="boot" href="/Dollhouse">Ignore The Whispers And Explore Another Room</a>
            </div>
        </div>
    )
}

export default sidequest;