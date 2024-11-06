import Output from "./Output";
import Cookies from 'js-cookie';


function TrueBad() {
    Cookies.set('TrueBad', true, { expires: 7 });
    return (
        <div>
            <div className="badbackground"></div>
            <div className="text">
                <div className="size">
                    <Output text="Your Decision To Use The Dark Magic From The Tome Had Devastating Consequences. As You Became Increasingly Overwhelmed By The Forest's Corruption, Your Mind And Spirit Were Consumed By The Malevolent Forces. The Dark Magic Twisted Your Intentions, Leaving You Vulnerable To The Forest's Relentless Shadows."/>
                    <Output text="Struggling To Navigate The Forest's Labyrinthine Paths, You Found Yourself Unable To Escape The Dark Influence. The Malevolent Spirit At The Forest's Core Was Never Confronted Due To Your Inability To Maintain Control Over The Dark Magic, The Forest's Corruption Deepened, Spreading Its Taint Further Into Wonderland."/>
                    <Output text="Admist The Chaos. Taking The Notes And Leaving Led To Your Failure. The Loss Of The Finding The Cursed Clown Mask You Needed Left You At A Significant Disadvantage. You Faced Increasingly Insurmountable Challenges Without The Necessary Power And Knowledge To Combat Them."/>
                    <Output text="As A Final Blow, Your Journey Through The Haunted Dollhouse Proved Fruitless. You Missed The Key Artifacts And Insights That Could Have Provided Crucial Assistance. The Curses Within The Dollhouse Remained Unresolved, Further Complicating The Quest."/>
                    <Output text="In A Last Desperate Attempt To Salvage Your Mission, You Entered The Forgotten Circus. However, Your Lack Of Crucial Insights And Resources Made It Impossible To Effectively Address The Circus's Corruption. The Wishing Star, Which Would Have Offered Hope And Guidance, Remained Beyond Your Reach."/>
                </div>
                <p className="BTrue">True Ending</p>
                <div className="smol">
                    <Output text="Wonderland Falls Depper Into Despair As The Combined Effects Of The Cursed Forest's Darkness, The Unaddressed Curses Of The Haunted Dollhouse, And The Ongoing Corruption In The Forgotten Circus Take Their Toll. The Realm Is Consumed By Eternal Darkness And Madness. The Twisted Forces Of Chaos Prevail, And Wonderland Is Lost To A Never-Ending Nightmare."/>
                </div>
                <p className="BTrue">Epilogue</p>
                <div className="smol">
                    <Output text="The Realm Of Wonderland Becomes A Desolate, Corrupted Landscape, Forever Trapped In The Clutches Of Darkness. The Remnants Of Its Once-Vibrant Magic Are Smothered By All-Encompassing Shadow."/>
                </div>
                <a id='boot' href="/">Home</a>
            </div>
        </div>
    )
}

export default TrueBad;