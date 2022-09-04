import '/src/assets/style/app.css'

const FormPaciente = () => {
  return (
    <div>
      <h2 className='font-black text-3xl text-center'>DEJA TUS DATOS</h2>
      <div className='container-form'>
        <form className='bg-white shadow-md rounded-lg py-10 mx-5 col-end-1 grid md:place-content-end'>
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
                    <label htmlFor='documento' className='block text-gray-700 uppercase font-bold' >dOCUMENTO:</label>
                    <input id="documento" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="number" placeholder='XXXXXXXX'/>
                  </div>
                  <div className="mb-5">
                    <label htmlFor='years' className='block text-gray-700 uppercase font-bold' >Edad:</label>
                    <input id="years" className='border-2 w-full p-2 mt-2 rounded-md' placeholder="" type="number"/>
                  </div>
                </div>
                <div className="mb-5">
                    <label htmlFor='email' className='block text-gray-700 uppercase font-bold' >Email:</label>
                    <input id="email" className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 '  placeholder="Example@gmail.com" type="email"/>
                </div>
        
                <div className="mb-5">
                  <label htmlFor='tel' className='block text-gray-700 uppercase font-bold placeholder-gray-400' >Celular:</label>
                  <input id="tel" className='border-2 w-full p-2 mt-2 rounded-md' placeholder="XXXXXXXXX" type="tel"/>
                </div>
                <div className="mb-5">
                  <label htmlFor='password' className='block text-gray-700 uppercase font-bold' >Contraseña:</label>
                  <input id="password" className='border-2 w-full p-2 mt-2 rounded-md' placeholder="" type="password"/>
                </div>
                <input type="submit" className="bg-sky-400 w-full rounded-md p-3 text-white uppercase font-bold hover:bg-sky-500 cursor-pointer transition-all" value="Enviar" />
        </form>
      </div>
    </div>
  )
}

export default FormPaciente
