import Output from "./Output";
import Cookies from 'js-cookie';

function Leave(){
    Cookies.set('Caution', true, { expires: 7 });
    return(
        <div>
            <div className="badbackground"></div>
            <div className="text">
                <div className="bold">
                    <Output text="The Notes You Collected Provide Some Clues But Lack The Complete Information Needed To Fully Understand And Combat The Circus's Corruption. The Cursed Clown's Mask Remains Hidden And The Corruption Continues To Spread."/>
                    <Output text="Without Addressing The True Source Of The Madness, The Circus's Twisted Attractions Remain, And You Struggle To Make Significant Progress To Your Quest."/>
                </div>
                <p className="outcome">Bad Ending</p>
                <p className="outcome">Outcome</p>
                <Output text="The Corruption In The Circus Continues To Fester, And Your Incomplete Knowledge Leaves You At A Disadvantage. The Forgotten Circus Remains A Place Of Horror And Despair."/>
                <a id='boot' href='./'>Restart Your Story Find A Better Way</a>
            </div>
        </div>
    )
}

export default Leave;