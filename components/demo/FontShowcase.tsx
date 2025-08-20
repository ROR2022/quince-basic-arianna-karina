"use client"

export function FontShowcase() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          🎨 Nuevas Fuentes Cursivas Implementadas
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Great Vibes */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-700">Great Vibes</h3>
            <p className="font-script text-4xl text-purple-600 mb-4">
              Arianna Karina
            </p>
            <p className="text-sm text-gray-600">
              Para elementos decorativos y firmas elegantes
            </p>
          </div>

          {/* Satisfy */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-700">Satisfy</h3>
            <p className="font-elegant text-4xl text-pink-600 mb-4">
              Arianna Karina
            </p>
            <p className="text-sm text-gray-600">
              Para nombres principales y títulos importantes
            </p>
          </div>

          {/* Pacifico */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-700">Pacifico</h3>
            <p className="font-cursive text-4xl text-blue-600 mb-4">
              Arianna Karina
            </p>
            <p className="text-sm text-gray-600">
              Para títulos de secciones y texto destacado
            </p>
          </div>
        </div>

        {/* Ejemplo de uso en contexto */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            ✨ Ejemplo en Contexto
          </h3>
          
          <div className="text-center space-y-4">
            <p className="font-cursive text-2xl text-purple-600">
              Te invitamos a celebrar
            </p>
            <h1 className="font-elegant text-5xl text-pink-600">
              Los XV Años de Arianna Karina
            </h1>
            <p className="font-script text-3xl text-blue-600">
              Una noche mágica e inolvidable
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            🎭 <strong>Implementación completada:</strong> Opción 3 - Mix Elegante
          </p>
        </div>
      </div>
    </section>
  )
}
