import Output from "./Output";
import Cookies from 'js-cookie';

function Ritual(){
    Cookies.set('Ritual', true, { expires: 7 });
    return(
        <div>
            <div className="GoodBackground"></div>
            <div className="text">
                <div className="bold">
                    <Output text="You Perform The Ritual Using The Information From The Books, Channelling The Energies Of Wonderland To Cleanse The Dollhouse Of Its Corruption. A Brillaint Light Fills The Room As The Dark Magic Dissipates, Revealing The True Beauty Of The Mansion Beneath The Decay. The Dolls, Once Twisted And Malevolent, Regain Their Lost Innocence And Joy."/>
                    <Output text="As The Last Remnants Of The Curse Are Lifted, You Feel A Profound Connection To Wonderland And Its Inhabitants. The Spirits Of The Dollhouse Express Their Gratitude, Sharing Secrets About The Corruption That Plagues The Realm. They Reveal The Location Of The Cursed Artifact At The Heart Of The Forgotten Circus, Which Is The Source Of The Madness Affecting Wonderland."/>
                </div>
                <p className="gOutcome">Good Ending</p>
                <p className="gOutcome">Outcome</p>
                <Output text="With The Newfound Knowledge And The Aid Of The Restored Dolls, You Embark On A Quest To Confront The Artifact. The Dolls Join You As Allies, Guiding You Through The Challenges Ahead. Armed With Wisdom And Support, You Venture Into The Depths Of Wonderland, Determined To Restore Balance And Sanity To The Entire Realm, Transforming The Nightmare Back Into A Dream Of Hope And Wonder."/>
                <a id='Gboot' href='./'>Continue Your Journey And Restore The Rest Of Wonderland</a>
            </div>
        </div>
    )
}

export default Ritual;