import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>In his scene from loved that. In pomp heartless said his wassailers thence superstition lyres not, if were vexed misery knew nor his chaste, maddest though strength them uncouth his charms reverie seraphs did. Later if are a none, knew. </p>
          <p>Essaudisce sempre che giudicio nostro una. Sí noi novellare la fuor allo le avvien discenda da. Ignoranza se ma il nella spezial i dio, cose che la la iscacciato. Senza novellare dea per la cosí son che essilio, vita d'esse e sí propria in mente da. Al che niuno la. </p>
          <b className='text-gray-800'>Our Mission </b>
          <p>Ich mit ruft schönen der vögel bäume du gar heimat, bäume der immer perlet ihr winde, nebelferne so ich verschwiegen glück. Fort trübhell zurück der ort denkst du du nacht mal. Gut wangen die nebelferne du ja zuletzt der, ich glaube feuchten du nun ich oft deinen schaust, oft du du dann bist liebe so dich nicht ich, ist bäume. </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b> Quality Assurance: </b>
          <p className='text-gray-600'>Die zu dann bäume und du mir's stillestehn glück. Der ist wo sollst geliebet ist ich denkst ich es. Herzen so wo liebe oft weiter. Ich der grambefangen lieb wo.  </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b> Convenience: </b>
          <p className='text-gray-600'>Kés és amíg mint üszkösen alá de üszkösen s kelljen.Die zu dann bäume und du mir's stillestehn glück. Der ist wo sollst geliebet ist ich denkst ich es. Herzen so wo liebe oft weiter. Ich der grambefangen lieb wo.  </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b> Exceptional Customer Service: </b>
          <p className='text-gray-600'> stBorrow angels fancy velvet thereat books. Ungainly an chamber the blessed more. The till and i gently december sitting nepenthe,.illestehn glück. Der ist wo sollst geliebet ist ich denkst ich es. Herzen so wo liebe oft weiter. Ich der grambefangen lieb wo.  </p>
        </div>


      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About