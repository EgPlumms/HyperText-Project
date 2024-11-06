import Output from "./Output";

function DollhouseText() {
    return (
        <div>
            You Enter The Mansion, Where The Air Is Filled With The Unsettling Sound Of Broken Toys And Malfunctioning Dolls. You Encounter Two Key Areas: A Room Filled With Animated, Eerie Dolls Or A Dusty Old Library With Mysterious Books
            <a className="secret" href="./sidequest">.</a>
        </div>
    );
}

function Dollhouse() {
    return (
        <div>
            <div className="background"></div>
            <div className="text">
                <div className="bold inline">
                    <Output text={<DollhouseText />} />
                </div>
                <div id="ital">
                    <Output text='What Path Shall You Pick?' />
                </div>
                <Output text="1. Investigate The Room Of Dolls, Though Be Cautious; The Dolls Aren't What They Seem." />
                <a id="boot" href='./Dolls'>Investigate the Room of Dolls</a>
                <Output text='2. Explore The Dusty Library And The Secrets Its Books Hold.' />
                <a id="boot" href="./Library">Explore the Dusty Library</a>
                <p></p>
            </div>
        </div>
    );
}

export default Dollhouse;
