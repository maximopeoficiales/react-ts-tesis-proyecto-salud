import FormPaciente from "./FormPaciente"

const Formulario = () => {
  return (
    <div className=' h-screen'>
      <div className="bg-sky-500/20 pb-20">
        <h2 className='font-black text-3xl text-center pt-14 pb-10'>REGISTRATE</h2>
        <form className='md:shadow-2xl md:px-10 mx-5 md:mx-40 md:py-10'>
          <div className="md:grid grid-cols-2 gap-x-14">
              <div className="mb-5">
                <label htmlFor='name' className='block text-gray-700 uppercase font-bold' >Nombre:</label>
                <input id="name" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" placeholder='Ingrese su Nombre'/>
              </div>
              <div className="mb-5">
                <label htmlFor='last-name' className='block text-gray-700 uppercase font-bold' >Apellidos:</label>
                <input id="last-name" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" placeholder='Ingrese su Apellido'/>
              </div>
            </div>
          <div className="md:grid grid-cols-2 gap-x-14">
            <div className="mb-5">
              <label htmlFor='ruc' className='block text-gray-700 uppercase font-bold' >Ruc:</label>
              <input id="ruc" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="number" placeholder='XXXXXXXXXXX '/>
            </div>
            <div className="mb-5">
              <label htmlFor='email' className='block text-gray-700 uppercase font-bold' >Email:</label>
              <input id="email" className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 '  placeholder="Example@gmail.com" type="email"/>
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor='direction' className='block text-gray-700 uppercase font-bold placeholder-gray-400' >Direccion:</label>
            <input id="direction" className='border-2 w-full p-2 mt-2 rounded-md' placeholder="Ingrese su direccion exacta" type="text"/>
          </div>
          <div className="grid grid-cols-2 gap-x-5 md:gap-x-14">
            <div>
              <label htmlFor='time' className='block text-gray-700 uppercase font-bold placeholder-gray-400' >Apertura de Consultorio:</label>
              <input id="time" className='border-2 w-full p-2 mt-2 rounded-md mb-5 text-center' placeholder="Ingrese su direccion exacta" type="time"/>
            </div>
            <div>
              <label htmlFor='time' className='block text-gray-700 uppercase font-bold placeholder-gray-400' >Cierre de Consultorio:</label>
              <input id="time" className='border-2 w-full p-2 mt-2 rounded-md text-center' placeholder="Ingrese su direccion exacta" type="time"/>
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor='service' className='block text-gray-700 uppercase font-bold placeholder-gray-400' >Servicios:</label>
            <input id="service" className='border-2 w-full p-2 mt-2 rounded-md' placeholder="**PENDIENTE**" type="text"/>
          </div>
          <div className="mb-5">
            <label htmlFor='password' className='block text-gray-700 uppercase font-bold' >Contraseña:</label>
            <input id="password" className='border-2 w-full p-2 mt-2 rounded-md' placeholder="" type="password"/>
          </div>
          <div className="mb-5">
            <label htmlFor='biography' className='block text-gray-700 uppercase font-bold' >Biografía:</label>
            <textarea id="biography" className='resize-none border-2 w-full p-2 mt-2 rounded-md' placeholder=""/>
          </div>
          <input type="submit" className="bg-sky-400 w-full rounded-md p-3 text-white uppercase font-bold hover:bg-sky-500 cursor-pointer transition-all" value="Enviar" />
        </form>
      </div>
    </div>
  )
}

export default Formulario

