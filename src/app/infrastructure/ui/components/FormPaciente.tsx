import '/src/assets/style/app.css'

const FormPaciente = () => {
  return (
    <div>
      <div className='container-form'>
        <div className='md:flex sm:h-screen justify-end items-center py-10'>
              <form className='bg-white shadow-md rounded-3xl py-10 mx-5 col-end-1'>
              <h2 className='font-black text-2xl md:text-3xl text-center mb-5'>DEJA TUS DATOS</h2>
                  <div className="md:grid grid-cols-2 gap-x-14 mx-6">
                    <div className="mb-5">
                      <label htmlFor='name' className='block text-gray-700 uppercase font-bold' >Nombre:</label>
                      <input id="name" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" placeholder='Ingrese su Nombre'/>
                    </div>
                    <div className="mb-5">
                      <label htmlFor='last-name' className='block text-gray-700 uppercase font-bold' >Apellidos:</label>
                      <input id="last-name" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" placeholder='Ingrese su Apellido'/>
                    </div>
                  </div>
                  <div className="md:grid grid-cols-2 gap-x-14 mx-6">
                    <div className="mb-5">
                      <label htmlFor='documento' className='block text-gray-700 uppercase font-bold' >DOCUMENTO:</label>
                      <input id="documento" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="number" placeholder='XXXXXXXX'/>
                    </div>
                    <div className="mb-5">
                      <label htmlFor='years' className='block text-gray-700 uppercase font-bold' >Edad:</label>
                      <input id="years" className='border-2 w-full p-2 mt-2 rounded-md' placeholder="" type="number"/>
                    </div>
                  </div>
                  <div className="mb-5 mx-6">
                      <label htmlFor='email' className='block text-gray-700 uppercase font-bold' >Email:</label>
                      <input id="email" className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 '  placeholder="Example@gmail.com" type="email"/>
                  </div>
                  <div className="mb-5 mx-6">
                    <label htmlFor='tel' className='block text-gray-700 uppercase font-bold placeholder-gray-400' >Celular:</label>
                    <input id="tel" className='border-2 w-full p-2 mt-2 rounded-md' placeholder="XXXXXXXXX" type="tel"/>
                  </div>
                  <div className="mb-5 mx-6">
                    <label htmlFor='password' className='block text-gray-700 uppercase font-bold' >Contraseña:</label>
                    <input id="password" className='border-2 w-full p-2 mt-2 rounded-md' placeholder="" type="password"/>
                  </div>
                  <input type="submit" className=" bg-sky-400 ml-6 px-8 rounded-md p-3 text-white uppercase font-bold hover:bg-sky-500 cursor-pointer transition-all" value="Enviar" />
              </form>
        </div>
      </div>
    </div>
  )
}

export default FormPaciente
