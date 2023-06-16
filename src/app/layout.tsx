import crypto from "node:crypto";
import "$share/styles/globals.scss";
import "$share/styles/background.scss";
import { Background } from "./components/Background/Background";
// import { getSegment } from "@share/router/router.share";

/* function to validate the auth with the headers and return the role of the user */

const validateAuthSinc = (headers: Headers) => {
  // without fetch and sinc
  const token = headers.get('Authorization') ?? '';
  const role = headers.get('Role');
  // validate the token withouth fetch
  const isValid = crypto.timingSafeEqual(
    Buffer.from(token),
    Buffer.from("key")
  );

  return { token, role, isValid };
}


const validateAuth = async (headers: Headers) => {
  // validate the token
  const response = await fetch('http://localhost:3000/api/auth/validate', {
    method: 'GET',
    headers: {
      'Authorization': headers.get('Authorization'),
      'Role': headers.get('Role')
    } as HeadersInit
  });
  const { token, role } = await response.json();

  return { token, role };
}

export async function getAuth() {
  // const { token, role } = await validateAuth(headers());
  const { token, role } = { token: null, role: 'company' };
  return {
    token,
    role
  };
}

export default async function AuthLayout(
  { professionals, company }: {
    professionals: React.ReactNode;
    company: React.ReactNode;
  }
) {
  return new Promise<Omit<React.ReactNode, "then">>(async (resolve) => {


    const { role } = await getAuth();

    const content = (children: React.ReactNode) => (<>
      <html lang="en">
        <body>
          <Background />
          {
            children
          }
        </body>
      </html>
    </>);

    if (role === 'professionals')
      return resolve(content(professionals) as Omit<React.ReactNode, "then">);

    if (role === 'company')
      return resolve(content(company) as Omit<React.ReactNode, "then">);

    return resolve(<>Login</>)

  });

}