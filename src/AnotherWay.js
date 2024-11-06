import Output from "./Output";

function AnotherWay(){
    return(
        <div>
            <div className="badbackground"></div>
            <div className="text">
                <div className="bold">
                    <Output text="You Wander deeper Into The Mansion, Feeling Despair Close In. The Maze-Like Paths Shift, And Shadows Whisper Ominous Secrets. Disoriented, You Stumble Upon A Chamber Filled With Remnants Of Past Adventurers Who Failed To Escape."/>
                </div>
                <p className="outcome">Bad Ending</p>
                <p className="outcome">Outcome</p>
                <Output text="You Become Part Of The Forest's Haunting Tapestry, Your Spirit Trapped Within Its Depths. You Can No Longer Influence The Realm, And Your Story Becomes A Cautionary Tale For Others Who Venture Too Far."/>
                <a id='boot' href='./'>Restart Your Story Find A Better Way</a>
            </div>
        </div>
    )
}

export default AnotherWay;