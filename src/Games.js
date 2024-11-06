import Output from "./Output";
import Cookies from 'js-cookie';

function Games(){
    Cookies.set('Games', true, { expires: 7 });
    return(
        <div>
            <div className="GoodBackground"></div>
            <div className="text">
                <div className="bold">
                    {/* <Output text="You Gain An Important Item - A Key That Unlocks A Hidden Compartment In The Dollhouse Revealing The Puppeteer's Diary. This Diary Contains Vital Information On How To Break The Curse And Restore Peace To The Dolls, Ultimately Aiding In Your Quest."/> */}
                    <Output text="You Play The Dolls' Games With Skill And Bravery. You Win Their Respect And Are Rewarded With An Important Item That Reveals Clues About The Dollhouse's Curse."/>
                    <Output text="As You Navigate Through The Challenges, You Notice That The Dolls Begin To Exhibit More Human-Like Emotions, Hinting At Their Tragic Pasts. One Doll, A Porcelain Figure With A Cracked Face, Whispers Secrets About The Dollhouse's Creator - A Twisted Puppeteer Who Trapped Their Souls Within These Toys."/>
                </div>
                <p className="gOutcome">Good Ending</p>
                {/* <a id='boot' href="/Diary">Read The Puppeteer's Diary</a> */}
                <p className="gOutcome">Outcome</p>
                <Output text="In The Aftermath, The Dolls Regain Their Original Forms And Memories, Grateful For Your Help. They Pledge To Aid You In Your Quest To Restore Wonderland, Providing Valuable Insights And Protection As You Continue Your Journey. With Their Laughter Echoing In Your Ears, You Leave The Dollhouse, Hopeful And Empowered, Ready To Face The Next Challenge That Lies Ahead."/>
                <a id='Gboot' href='./'>Continue Your Journey And Restore The Rest Of Wonderland</a>
            </div>
        </div>
    )
}

export default Games;