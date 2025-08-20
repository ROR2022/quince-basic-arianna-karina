import React from 'react'
import { basicDemoData } from '@/components/demo/quince/basic/data/basic-demo-data';

/**
 * Este componente debera incluir todos los datos principales del evento
 * 
 */

const DataResume = () => {
  return (
    <div
    style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/quince/fondo1.png')`,
        filter: "brightness(0.9)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        minHeight: "100vh",
      }}
    >
        <div 
        style={{minHeight: "100vh"}}
        className='font-elegant bg-slate-300 bg-opacity-20 p-6 rounded-lg flex flex-col justify-center items-center text-center max-w-3xl mx-auto'>
          <h2 
        className=" font-script text-xl md:text-2xl mb-4 leading-relaxed text-white">
          ¡Mis XV Años!
        </h2>
         <h2 className="font-elegant text-4xl md:text-5xl text-rose-700 mb-8">
            {basicDemoData.event.celebrant}
          </h2>
        <div className="space-y-4">
            <p className='font-script text-xl md:text-2xl text-white'>
                Mis quince años marcan el comienzo de una nueva etapa en mi vida...
                Una etapa maravillosa dónde el amor y la alegría están conmigo...
            </p>
         
          <p className="font-script text-xl md:text-2xl text-white">
            {basicDemoData.event.date.full}
          </p>
          <p className="font-script text-xl md:text-2xl text-white">
           {basicDemoData.event.ceremony.venue}
          </p>
          <p className="font-script text-xl md:text-2xl text-white">
            {basicDemoData.event.ceremony.time}
          </p>
          <p className="font-script text-xl md:text-2xl text-white">
            {basicDemoData.event.party.venue}
          </p>
            <p className="font-script text-xl md:text-2xl text-white">
                {basicDemoData.event.party.time}
            </p>
        </div>
        </div>
        
    </div>
  )
}

export default DataResume