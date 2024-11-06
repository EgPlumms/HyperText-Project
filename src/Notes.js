import Output from "./Output";
import Cookies from 'js-cookie';

function Notes(){
    Cookies.set('Notes', true, { expires: 7 });
    return(
        <div>
            <div className="GoodBackground"></div>
            <div className="text">
                <div className="bold">
                    <Output text="The Notes Lead You To - The Cursed Clown's Mask - An Artifact That Hold The Essence Of The Circus's Corruption. The Mask Is Hidden In The Depths Of The Circus Grounds And Is The Key To Ending The Madness."/>
                    <Output text="You Confront The Cursed Clown And Use The Mask's Power To Banish The Corruption. The Circus's Twisted Attractions Are Cleansed, And The Vibrant, Joyous Aspects Of The Circus Are Restored."/>
                </div>
                <p className="gOutcome">Good Ending</p>
                <p className="gOutcome">Outcome</p>
                <Output text="The Forgotten Circus Is Revitalised, Returning To Its Former Glory. The Cursed Clown's Mask Is Sealed Away As A Reminder Of The Battle Against Darkness."/>
                <a id='Gboot' href='./'>Continue Your Journey And Restore The Rest Of Wonderland</a>
            </div>
        </div>
    )
}

export default Notes;