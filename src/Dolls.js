import Output from "./Output";

function Dolls(){
    return(
        <div>
            <div className="background"></div>
            <div className="text">
                <div className="bold">
                    <Output text="The Dolls Come To Life And Challenge You With A Series Of Dangerous Games. Surviving Their Games Might Grant You Valuable Items Or Information About The Dollhouse's Curse."/>
                </div>
                <div id="ital">
                    <Output text="Are The Games A Trick To Your Demise, Or Will They Help Free Wonderland?"/>
                </div>
                <Output text='1. Play The Dolls Games And Risk Your Life For The Secrets They Know.'/>
                <a id="boot" href="./Games">Participate In The Games</a>
                <Output text='2. Try Avoid The Dolls And Discover The Secrets of The Dollhouse.'/>
                <a id="boot" href="./Avoid">Try To Avoid The Dolls</a>
            </div>
        </div>
    )
}

export default Dolls;