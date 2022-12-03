import React from 'react';
import './heroRight.css'
const HeroRight = () => {
const bodyItems=[
   {
      heading: "hydrogen vs electric cars",
      desc: "Will hydrogen-fueled cars ever catch up to EV's"
   },
   {
      heading: "The downsides of Ai Artistry",
      desc: "What are the possible adverse effects of on-demand Ai image genretions?"
   },
   {
      heading: "Is vs funding drying up?",
      desc: "Private funding by vc forms is down 50% yoy. We take a look at what that means."
   },
]
   return (
      <aside className='heroRight'>
         <h1 className='heading'>New</h1>
<div className='heroRight-body'>
   {bodyItems.map(item=><div key={item.heading} className='body-item'>
      <h5>{item.heading}</h5>
      <p>{item.desc}</p>
      <div/>
   </div>)}
</div>
      </aside>
   );
};

export default HeroRight;