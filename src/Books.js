import Output from "./Output";
import Cookies from 'js-cookie';

function Books(){
    Cookies.set('Library', true, { expires: 7 });
    return(
        <div>
            <div className="badbackground"></div>
            <div className="text">
                <div className="bold">
                    <Output text="You Gather The Books But Leave Before Performing The Ritual. As You Exit The Library, You Feel A Nagging Doubt About Your Choice. Without The Immediate Benefits Of The Ritual, You Continue Your Journey With Only Partial Knowledge Of The Corruption."/>
                    <Output text="As You Naviagte The Dollhouse, The Lingering Darkness Becomes More Palpable, And The Eerie Dolls Seem More Hostile. Without The Cleansing Ritual, The Influence Of The Curse Grows Stronger, Warping Your Perception And Driving You Deeper Into Despair."/>
                </div>
                <p className="outcome">Bad Ending</p>
                <p className="outcome">Outcome</p>
                <Output text="You Have Incomplete Information, Making It Harder To Address The Source Of The Corruption. As The Dollhouse Shifts And Contorts Around You, You Become Ensnared By Its Magic. Your Mind Succumbs To The Dollhouse's Nightmares, And You Lose Yourself In The Endless Cycles Of Fear And Confusion, Forever Trapped Within Its Haunted Halls Unable To Escape Or Restore Balance To Wonderland."/>
                <a id='boot' href='./'>Restart Your Story Find A Better Way</a>
            </div>
        </div>
    )
}

export default Books;