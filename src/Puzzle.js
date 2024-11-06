import Output from "./Output";
import Cookies from 'js-cookie';

function Puzzle(){
    Cookies.set('Puzzle', true, { expires: 7 });
    return(
        <div>
            <div className="GoodBackground"></div>
            <div className="text">
                <div className="bold">
                    <Output text="You Successfully Decipher The Intricate Carving On The Door, Revealing A Hidden Passage Beyond It. Inside The Chamber, Strange Artifacts Pulse With Energy. Among Them, A Crystal Orb Shows Visions Of Wonderland Before Its Corruption."/>
                    <Output text="You Gather The Artifacts And Learn How To Summon Protective Spirits, Empowering You Against The Dark Enitity Haunting The Forest."/>
                </div>
                <p className="gOutcome">Good Ending</p>
                <p className="gOutcome">Outcome</p>
                <Output text="Armed With Your Newfound Allies, You Confront The Dark Entity Thats Corrupting The Forest, Restoring Peace To The Cursed Forest. The Spirits Bless You, Granting You Enhanced Abilities For Your Ongoing Journey Through Wonderland."/>
                 <a id='Gboot' href='./'>Continue Your Journey And Restore The Rest Of Wonderland</a>
            </div>
        </div>
    )
}

export default Puzzle;