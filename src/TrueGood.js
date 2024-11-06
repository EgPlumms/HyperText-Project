import Output from "./Output";
import Cookies from 'js-cookie';


function TrueGood() {
    Cookies.set('TrueGood', true, { expires: 7 });
    return (
        <div>
            <div className="GoodBackground"></div>
            <div className="text">
                <div className="bold">
                    <Output text="With The Corruption In Wonderland Addressed, You Are Now Prepared To Confront The Ultimate Source Of The Madness. You Follow The Clues And Artifacts You've Gathered To The Heart Of Wonderland, Where You Find The True Cause Of The Realm's Suffering."/>
                    <Output text="The Final Battle Involes Confronting - The Dark Phantom - A Malevolent Entity That Thrives On Chaos And Destruction. Using The Artifcats You've Acquired - The Enchanted Blossom, The Sacred Locket, The Luminous Tear, The Wishing Star And The Cursed Clown's Mask - You Face The Dark Phantom In An Epic Duel."/>
                    <Output text="Your Strategic Use Of These Artifacts Allows You To Counter The Dark Phantom's Powers, Weaken Its Hold On Wonderland, And Ultimately Defeat It. The Artificats Combine Their Strengths To Seal The Dark Phantom Away And Restore Peace To Wonderland."/>
                </div>
                <p className="True">True Good Ending</p>
                <Output text=" Wonderland Is Fully Restored, And The Balance Between Light And Darkness Is Achieved. You Emerge As A Hero, Celebrated For Your Bravery And Determination. The Realm Returns To Its Vibrant, Magical State, And You Find Peace And Solace In The Realm You Saved."/>
                <p className="True">Epilogue</p>
                <Output text="Wonderland Flourishes Once More, And Tales Of Your Adventure Become Legendary. The Artifacts Are Placed In Safe Keeping, And The Realm Is Protected From Future Threats. Your Courage And The Choices You Made Ensure That Wonderland Remains A Place Of Wonder And Harmony."/>
                <a id='Gboot' href="/">Home</a>
            </div>
        </div>
    )
}

export default TrueGood;