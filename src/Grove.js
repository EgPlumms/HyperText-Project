import Output from "./Output";

function Grove(){
    return(
    <div>
        <div className="background"></div>
        <div className="text">
            <div className="bold">
                <Output text="In The Hidden Grove, You Discover An Old, Magical Tome Resting On The Altar. The Tome's Pages Are Filled With Spells And Information About The Forest's Corruption. Using This Tome Could Grant You Insights Or Abilities But Might Come With A Cost."/>
            </div>
            <div id="ital">
                <Output text='Are The Costs Worth The Risk Or Shall You Forever Ruin Wonderlands Chance Of Being Restored?'/>
            </div>
            <Output text='1. Use The Tome And Find Out How Great The Cost Is'/>
            <a id="boot" href="./Magic">Use The Tome's Magic</a>
            <Output text='2. Leave The Tome And Never Learn Its Secrets'/>
            <a id="boot" href="./NoMagic">Leave The Tome Alone</a>
        </div>
    </div>
    )
}

export default Grove;