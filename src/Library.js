import Output from "./Output";

function Library(){
    return(
        <div>
            <div className="background"></div>
            <div className="text">
                <div className="bold">
                    <Output text="In The Library, You Find Ancient Books And Manuscripts Detailing The History Of Wonderland's Corruption. One Book Describes A Ritual That Could Potentially Restore Balance To The Realm."/>
                </div>
                <div id="ital">
                    <Output text="Perform The Ritual And Risk It All Or Leave The Dollhouse And Play It Safe"/>
                </div>
                <Output text='1. Perform The Ritual And Attempt To Restore Peace.'/>
                <a id="boot" href="./Ritual">Perform The Ritual</a>
                <Output text='2. Take The Books And Play It Safe Leaving The Dollhouse Behind.'/>
                <a id="boot" href="./Books">Take The Books And Leave</a>
            </div>
        </div>
    )
}

export default Library;