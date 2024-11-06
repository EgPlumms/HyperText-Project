import Output from './Output'
import Cookies from 'js-cookie';

function NoMagic(){
    Cookies.set('NoMagic', true, { expires: 7 });
    return(
    <div>
        <div className='GoodBackground'></div>
        <div className='text'>
            <div className='bold'>
                <Output text="You Use The Valuable Knowledge Gained From The Tome And The Sanctuary To Uncover The Source Of The Forest's Corruption. The Sanctuary, A Hidden Grove Blessed With Ancient Magic, Provides You With A Powerful Artifact - The Enchanted Blossom - Which Has The Ability To Purify Dark Enchantments."/>
                <Output text="The Enchanted Blossom Reveals The Path To The Heart Of The Forest Where The Corruption Is Centred. You Journey Deeper And Confront The Malevolent Spirit At The Forest's Core. By Using The Blossom, You Purify The Forest And Restore Its Natural Beauty."/>
            </div>
            <p className='gOutcome'>Good Ending</p>
            <p className='gOutcome'>Outcome</p>
            <Output text="The Cursed Forest Is Healed, And Its Magic Returns To A State Of Balance. The Sanctuary Becomes A Place Of Refuge For Those Seeking Aid. Your Actions Bring Peace To The Forest And Its Inhabitants."/>
            <a id='Gboot' href='./'>Continue Your Journey And Restore The Rest Of Wonderland</a>
        </div>
    </div>    
    )
}

export default NoMagic;