import Output from './Output'
import Cookies from 'js-cookie';

function Magic(){
    Cookies.set('Magic', true, { expires: 7 });
    return(
    <div>
        <div className='badbackground'></div>
        <div className='text'>
            <div className='bold'>
                <Output text='The Dark Magic From The Tome Begins To Overwhelm You, Distorting Your Perception And Clouding Your Judgement. As You Wander Deeper Into The Forest, The Corruption Starts To Consume Your Mind And Body. The Forest, Sensing Your Weakness, Becomes Even More Hostile, Its Twisted Creatures Attacking Relentlessly.'/>
                <Output text='You Find Yourself Lost And Disoriented, Unable To Find A Way Out. The Once-Beautiful Forest Now Feels Like A Prison Of Shadow And Madness, And Your Connection To The Dark Magic Becomes Stronger, Making It Impossible To Escape.'/>
            </div>
            <p className='outcome'>Bad Ending</p>
            <p className='outcome'>Outcome</p>
            <Output text="The Forest's Corruption Engulfs You Completely. You Become A Permanent Part Of The Dark Magic, Your Spirit Lost Within The Forests Depths. The Realm Remains In A State Of Decay, And The Cursed Forest Continues To Spread Its Influence."/>
            <a id='boot' href='./'>Restart Your Story Find A Better Way</a>
        </div>
    </div>    
    )
}

export default Magic;