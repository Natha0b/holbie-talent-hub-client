import { NextRequest, NextResponse } from 'next/server'

function checkAuthentication(request: NextRequest) {
  const { cookies } = request

  // Verificar si el usuario está autenticado basado en la presencia de una cookie de sesión
  const sessionCookie = cookies.get('session')

  console.log('sessionCookie', sessionCookie)

  if (sessionCookie) {
    // El usuario está autenticado
    return true
  } else {
    // El usuario no está autenticado
    return false
  }
}


export function middleware(request: NextRequest) {
  // Verificar la autenticación del usuario
  const isAuthenticated = checkAuthentication(request)
  
  if (!isAuthenticated) {
    // Redirigir al formulario de inicio de sesión si no está autenticado
    // return NextResponse.redirect('/login')
  }

  // Continuar con la siguiente middleware o página si está autenticado
  return NextResponse.next()
}
