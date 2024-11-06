import Output from "./Output";
import Cookies from 'js-cookie';

function Illusions(){
    Cookies.set('Illusions', true, { expires: 7 });
    return(
        <div>
            <div className="GoodBackground"></div>
            <div className="text">
                <div className="bold">
                    <Output text="Navigating The Funhouse's Illusions Leads You To - The Wishing Star - A Powerful Artifact That Can Amplify Your Abilities And Reveal Hidden Truths. The Illusions Also Reveal Secret Passages That Lead To The Circus's Central Tent."/>
                    <Output text="Inside The Central Tent, You Find Clues About The Circus's Downfall And The Source Of The Madness. The Wishing Star Helps You See Through The Illusions And Defeat The Corrupted Circus Ringmaster."/>
                </div>
                <p className="gOutcome">Good Ending</p>
                <p className="gOutcome">Outcome</p>
                <Output text="You Restore Parts Of The Circus, Transforming It Into A Place Of Wonder And Amusement Once More. The Wishing Star Becomes A Symbol Of Hope, And The Central Tent Is Turned Into A Beacon Of Light And Joy."/>
                <a id='Gboot' href='./'>Continue Your Journey And Restore The Rest Of Wonderland</a>
            </div>
        </div>
    )
}

export default Illusions;