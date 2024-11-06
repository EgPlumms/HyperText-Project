function Choice() {
    return (
        <div className="text">
            <div className="background"></div>
            <h3>You Find Yourself Drawn Into A Dark, Twisted Version Of Wonderland. The Realm, Once Vibrant And Magical, Is Now A Nightmarish Landscape Plagued By Shadows And Madness. Your Mission Is To Navigate This Distorted Wonderland, Uncover The Truth Behind Its Corruption, And Restore Sanity.</h3>
            <b><p id="ital">You Start In The Heart Of This Chaotic Realm, Facing Three Distinct Paths Leading To Different Areas Of Wonderland</p></b>
            <p id="line">1. The Cursed Forest - A Dark, Foreboding Forest Filled With Gnarled Trees And Whispering Shadows</p>
            <a id="boot" href='./Forest'>The Cursed Forest</a>
            <p>2. The Haunted Dollhouse - An Errie Mansion Overrun With Malfunctioning Dolls And Broken Toys</p>
            <a id="boot" href='./Dollhouse'>The Haunted Dollhouse</a>
            <p>3. The Forgotten Circus - A Dilapidated Circus Ground Where Abandoned Performers And Twisted Attractions Lurk</p>
            <a id="boot" href='./Circus'>The Forgotten Circus</a>
        </div>
        
    );
}

export default Choice;