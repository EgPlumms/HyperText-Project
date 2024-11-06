import Output from "./Output";

function Funhouse(){
    return(
        <div>
            <div className="background"></div>
            <div className="text">
                <div className="bold">
                    <Output text="Inside The Funhouse, You Face A Series Of Nightmarish Illusions And Warped Realities. Overcoming These Illusions Could Provide Insights Or Valuable Items, But It Comes With A Risk Of Further Madness."/>
                </div>
                <div id="ital">
                    <Output text="Are You Ready To Face The Illusions Or Will You Cautiously Make Your Way Through The Funhouse?"/>
                </div>
                <Output text='1. Confront The Illusions Head-On And See What Secrets They Hide.'/>
                <a id="boot" href="./Illusions">Confront The Illusions Head-On</a>
                <Output text='2. Navigate The Funhouse Cautiously And Risk Losing Important Information.'/>
                <a id="boot" href="./Caution">Navigate the Funhouse Cautiously</a>
            </div>
        </div>
    )
}

export default Funhouse;