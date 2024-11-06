import Output from "./Output";
import Cookies from 'js-cookie';

function Caution(){
    Cookies.set('Caution', true, { expires: 7 });
    return(
        <div>
            <div className="badbackground"></div>
            <div className="text">
                <div className="bold">
                    <Output text="By Navigating The Funhouse Cautiously, You Miss Out On Crucial Insights And Items That Could Have Greatly Aided Your Quest. The Remaining Challenges You Face In The Circus Become Increasingly Difficult Without The Advantage Of The Artifacts And Hidden Passages."/>
                    <Output text="You Struggle To Piece Together The Puzzle Of The Circus's Corruption, And The Journey Becomes A Series Of Relentless Trials."/>
                </div>
                <p className="outcome">Bad Ending</p>
                <p className="outcome">Outcome</p>
                <Output text="The Forgotten Circus Remains Corrupted, And Your Quest Is Marked By Difficulty And Frustration. The Funhouse's Illusions Continue To Obstruct Your Path, Making Progress Slow And Arduous."/>
                <a id='boot' href='./'>Restart Your Story Find A Better Way</a>
            </div>
        </div>
    )
}

export default Caution;