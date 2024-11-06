import Output from "./Output";

function Avoid(){
    return(
        <div>
            <div className="badbackground"></div>
            <div className="text">
                <div className="bold">
                    <Output text="You Attempt To Avoid The Dolls, But Their Relentless Pursuit Leads You Into Traps And Dangerous Areas Of The Mansion."/>
                    <Output text="As You Hide And Run, You Overhear Fragments Of Their Conversations - Stories Of Betrayal And Sorrow. You Learn The Dolls Were Once Innocent Children, Cursed By The Puppeteer To Endure Endless Games."/>
                </div>
                <p className="outcome">Bad Ending</p>
                <p className="outcome">Outcome</p>
                <Output text="In The End, You Become A Part Of The Dollhouse's Twisted Narrative Your Essence Slowy Merging With The Shadows. The Dolls Celebrate Your Despair, Adding Your Story To Their Collection Of Lost Souls. You Are Forever Trapped In The Dollhouse, A Silent Witness To Its Madness, Unable To Escape Or Aid Those Still Wandering In Wonderland."/>
                <a id='boot' href='./'>Restart Your Story Find A Better Way</a>
            </div>
        </div>
    )
}

export default Avoid;