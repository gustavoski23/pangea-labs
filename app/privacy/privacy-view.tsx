'use client';
import { CredentialBanner, LegalShell, S, useLegalLang } from '../components/legal-doc';

const UPDATED_EN = 'August 25, 2026';
const UPDATED_ES = '25 de agosto de 2026';
const EMAIL = 'gustavo@pangeawallet.space';

export function PrivacyView() {
  const [lang, setLang] = useLegalLang();

  return (
    <LegalShell lang={lang} setLang={setLang}>
      {lang === 'en' ? (
        <>
          <h1 style={S.h1}>Privacy Policy</h1>
          <p style={S.meta}>Pangea Wallet · Pangea Labs S.A.S (Colombia) · Last updated: {UPDATED_EN}</p>
          <CredentialBanner lang="en" />
          <p style={S.p}>Pangea Wallet is operated by <strong>Pangea Labs S.A.S</strong>, a company incorporated in Colombia and registered with the Chamber of Commerce, and a Money Services Business (MSB) registered with FinCEN. This page explains what data the app handles — and, above all, what it doesn’t.</p>

          <h2 style={S.h2}>The principle: your keys never leave your device</h2>
          <p style={S.p}>Pangea Wallet is a <strong>non-custodial</strong> wallet. Your recovery phrase and private keys are generated on your device, encrypted on your device and stored only on your device. We don’t see them, we don’t receive them, and we can’t move your funds or recover your phrase: that’s why the backup is yours.</p>

          <h2 style={S.h2}>What we do NOT collect</h2>
          <ul>
            <li style={S.li}>We don’t use analytics or behavioral trackers.</li>
            <li style={S.li}>We don’t sell or share data with advertisers.</li>
            <li style={S.li}>The recovery-phrase mode has no accounts: we don’t ask for your name, email or phone.</li>
            <li style={S.li}>We don’t store your keys, phrases or passwords on our servers.</li>
          </ul>

          <h2 style={S.h2}>Phrase mode and Google mode</h2>
          <p style={S.p}>If you use the <strong>recovery phrase</strong>, the app works without an account: we keep no personal data of yours on our servers.</p>
          <p style={S.p}>If you sign in <strong>with Google</strong>, there is an account, and with it we keep the minimum needed for the service to work across your devices:</p>
          <ul>
            <li style={S.li}>Sign-in is provided by <strong>Privy</strong>, which processes your Google email to create and safeguard your embedded wallet (see Privy’s policy).</li>
            <li style={S.li}>Your <strong>profile name and photo</strong>, if you set them, are stored on our server so they show the same on all your devices.</li>
            <li style={S.li}>If you set a <strong>PIN</strong>, we store a <strong>hash</strong> (a non-reversible fingerprint) of the PIN and of your security-question answers. No one — not support, not anyone who breaches the database — can read the PIN or the answers: they only serve to check that they match.</li>
          </ul>

          <h2 style={S.h2}>What third parties process when you use certain features</h2>
          <ul>
            <li style={S.li}><strong>Network queries:</strong> to show balances and send transactions, the app talks to Solana and Stellar nodes (e.g. Helius, Horizon). Those services see your public address and your IP, as with any wallet. Blockchain transactions are public by design.</li>
            <li style={S.li}><strong>Buying with card:</strong> this runs through Privy with the Meld aggregator, which routes to third-party payment providers. Each provider runs its own identity verification (KYC) directly with you and under its own policy — <strong>that data is received and kept by the provider, not by us</strong>.</li>
            <li style={S.li}><strong>Shop purchases (Cryptorefills):</strong> when you buy a gift card, a top-up or an eSIM in the Shop, we share with <strong>Cryptorefills</strong> (Big Dream Ventures BV, Netherlands) your email, the recipient you enter (an email address or a phone number), your IP address and browser user-agent (required by their anti-fraud checks), and the purchase details (product, amount, and the wallet address you pay from). Cryptorefills processes this as the seller of that purchase, under its own{' '}<a href="https://www.cryptorefills.com/en/privacy-policy" target="_blank" rel="noopener noreferrer" style={S.link}>privacy policy</a>. None of this happens unless you use the Shop.</li>
            <li style={S.li}><strong>Infrastructure:</strong> the app is served from Vercel, which logs technical data (IP, browser agent) to operate the service.</li>
          </ul>

          <h2 style={S.h2}>Local-currency deposits, bank accounts and identity verification</h2>
          <p style={S.p}>These features are <strong>optional</strong> and only happen if you start them. Opening a bank account or depositing in local currency requires, by law, verifying your identity. Two regulated providers do this, each for its region:</p>
          <ul>
            <li style={S.li}><strong>Yativo</strong> — bank accounts and local-currency deposits and payment links for <strong> Colombia and Latin America</strong>.</li>
            <li style={S.li}><strong>Fin</strong> — bank accounts for the <strong>United States</strong>.</li>
          </ul>
          <p style={S.p}><strong>What is sent:</strong> your personal data (name, date of birth, email, phone, address, occupation and tax/ID document), photos of your ID, a selfie and a proof of address.</p>
          <p style={S.p}><strong>How it passes through:</strong> this data <strong>does cross our server</strong>, because it’s our server that talks to the provider. It does so <em>in transit</em>: it receives what you send, forwards it and discards it when the request ends. We don’t store your documents or personal data in any database of ours, we don’t write them to disk, and we don’t log them.</p>
          <p style={S.p}><strong>What stays on your device:</strong> the case identifier, so we can show you the status, and — if you leave the form halfway — a draft of what you had typed, so you can resume. That draft lives only on your device, is never sent to our servers, doesn’t include your photos, and is deleted the moment you submit or press “Discard”. When the deposit settles, it’s converted to USDC and lands in your own wallet.</p>
          <p style={S.p}><strong>Who keeps it:</strong> the corresponding provider (Yativo or Fin) and its associated entities, under their own policy and for as long as anti-money-laundering regulation requires. Pangea doesn’t custody your money.</p>
          <p style={S.p}><strong>If you want it deleted:</strong> since it’s the provider who keeps it by legal obligation, write to us at{' '}<a href={`mailto:${EMAIL}`} style={S.link}>{EMAIL}</a>{' '}and we’ll process your request with them. Deleting your wallet from your device does not erase a case already submitted to a provider.</p>

          <h2 style={S.h2}>When you contact support</h2>
          <p style={S.p}>If you use the app’s support screen, so we can reply and prevent abuse we send our team: your <strong> message</strong>, the <strong>email</strong> you leave, your wallet’s <strong> public address</strong>, your IP and approximate country, and a device identifier. In Google mode we also attach your account’s verified email. We don’t include your keys, your phrase or your password.</p>

          <h2 style={S.h2}>Deleting your account and data</h2>
          <p style={S.p}><strong>Phrase mode:</strong> the “Delete this wallet from the device” option, under Profile → Account, removes the encrypted wallet from your device immediately and permanently (there is no copy on our servers).</p>
          <p style={S.p}><strong>Google mode:</strong> the “Delete my account” option, under Profile → Account, deletes your sign-in account, the wallet created with it, and the associated data (profile and PIN credentials). It’s immediate and can’t be undone. Since that account holds your wallet’s key, deleting it means losing access to any funds it held: save your private key or move your balance first. If that option isn’t available in your version of the app, write to{' '}<a href={`mailto:${EMAIL}`} style={S.link}>{EMAIL}</a>{' '}and we’ll process the request within 30 days at most.</p>
          <p style={S.p}>This page also serves as the web resource for account-deletion requests: you can ask from here, without installing the app, by writing to that same address.</p>

          <h2 style={S.h2}>Minors</h2>
          <p style={S.p}>Pangea Wallet is not directed at people under 18.</p>
          <h2 style={S.h2}>Changes to this policy</h2>
          <p style={S.p}>If this policy changes, we’ll update this page and the date above. Significant changes will be announced inside the app.</p>
          <h2 style={S.h2}>Contact</h2>
          <p style={S.p}>Pangea Labs S.A.S · <a href={`mailto:${EMAIL}`} style={S.link}>{EMAIL}</a></p>
          <p style={S.p}>See also the <a href="/terms" style={S.link}>Terms of Service</a>.</p>
        </>
      ) : (
        <>
          <h1 style={S.h1}>Política de privacidad</h1>
          <p style={S.meta}>Pangea Wallet · Pangea Labs S.A.S (Colombia) · Última actualización: {UPDATED_ES}</p>
          <CredentialBanner lang="es" />
          <p style={S.p}>Pangea Wallet la opera <strong>Pangea Labs S.A.S</strong>, una sociedad constituida en Colombia e inscrita en la Cámara de Comercio, y una Money Services Business (MSB) registrada ante FinCEN. Esta página explica qué datos maneja la app y, sobre todo, cuáles no.</p>

          <h2 style={S.h2}>El principio: tus llaves nunca salen de tu dispositivo</h2>
          <p style={S.p}>Pangea Wallet es una billetera <strong>no-custodial</strong>. Tu frase de respaldo y tus llaves privadas se generan en tu dispositivo, se cifran en tu dispositivo y se guardan solo en tu dispositivo. Nosotros no las vemos, no las recibimos y no podemos moverte fondos ni recuperarte la frase: por eso el respaldo es tuyo.</p>

          <h2 style={S.h2}>Qué NO recopilamos</h2>
          <ul>
            <li style={S.li}>No usamos analytics ni rastreadores de comportamiento.</li>
            <li style={S.li}>No vendemos ni compartimos datos con anunciantes.</li>
            <li style={S.li}>El modo con frase de respaldo no tiene cuentas: no pedimos nombre, correo ni teléfono.</li>
            <li style={S.li}>No almacenamos en nuestros servidores tus llaves, frases ni contraseñas.</li>
          </ul>

          <h2 style={S.h2}>Modo con frase y modo Google</h2>
          <p style={S.p}>Si usas la <strong>frase de respaldo</strong>, la app funciona sin cuenta: no guardamos datos personales tuyos en nuestros servidores.</p>
          <p style={S.p}>Si entras <strong>con Google</strong>, hay una cuenta de por medio y con ella guardamos lo mínimo para que el servicio funcione en cualquier dispositivo:</p>
          <ul>
            <li style={S.li}>El inicio de sesión lo provee <strong>Privy</strong>, que procesa tu correo de Google para crear y resguardar tu wallet embebida (ver la política de Privy).</li>
            <li style={S.li}>Tu <strong>nombre y foto de perfil</strong>, si los pones, se guardan en nuestro servidor para mostrarlos igual en todos tus dispositivos.</li>
            <li style={S.li}>Si activas un <strong>PIN</strong>, guardamos un <strong>hash</strong> (huella no reversible) del PIN y de las respuestas a tus preguntas de seguridad. Nadie —ni soporte, ni quien comprometa la base— puede leer el PIN ni las respuestas: solo sirven para comprobar que coinciden.</li>
          </ul>

          <h2 style={S.h2}>Qué procesan terceros cuando usas ciertas funciones</h2>
          <ul>
            <li style={S.li}><strong>Consultas a la red:</strong> para mostrar saldos y enviar transacciones, la app habla con nodos de Solana y Stellar (p. ej. Helius, Horizon). Esos servicios ven tu dirección pública y tu IP, como con cualquier billetera. Las transacciones en blockchain son públicas por diseño.</li>
            <li style={S.li}><strong>Comprar con tarjeta:</strong> corre a través de Privy con el agregador Meld, que enruta a proveedores de pago externos. Cada proveedor hace su propia verificación de identidad (KYC) directamente contigo y bajo su propia política — <strong>esos datos los recibe y conserva el proveedor, no nosotros</strong>.</li>
            <li style={S.li}><strong>Compras en el Shop (Cryptorefills):</strong> cuando compras una tarjeta de regalo, una recarga o un eSIM en el Shop, compartimos con <strong>Cryptorefills</strong> (Big Dream Ventures BV, Países Bajos) tu correo, el beneficiario que escribas (un correo o un número de teléfono), tu dirección IP y el user-agent de tu navegador (lo exige su verificación antifraude), y los datos de la compra (producto, monto y la dirección de wallet desde la que pagas). Cryptorefills lo procesa como vendedor de esa compra, bajo su propia{' '}<a href="https://www.cryptorefills.com/en/privacy-policy" target="_blank" rel="noopener noreferrer" style={S.link}>política de privacidad</a>. Nada de esto ocurre si no usas el Shop.</li>
            <li style={S.li}><strong>Infraestructura:</strong> la app se sirve desde Vercel, que registra datos técnicos (IP, agente de navegador) para operar el servicio.</li>
          </ul>

          <h2 style={S.h2}>Depósitos en moneda local, cuentas bancarias y verificación de identidad</h2>
          <p style={S.p}>Estas funciones son <strong>opcionales</strong> y solo ocurren si tú las inicias. Abrir una cuenta bancaria o depositar en moneda local requiere, por ley, verificar tu identidad. Dos proveedores regulados lo hacen, cada uno para su región:</p>
          <ul>
            <li style={S.li}><strong>Yativo</strong> — cuentas bancarias y depósitos en moneda local y links de pago para <strong> Colombia y Latinoamérica</strong>.</li>
            <li style={S.li}><strong>Fin</strong> — cuentas bancarias para <strong>Estados Unidos</strong>.</li>
          </ul>
          <p style={S.p}><strong>Qué se envía:</strong> tus datos personales (nombre, fecha de nacimiento, correo, teléfono, dirección, ocupación y documento de identidad/tributario), las fotos de tu documento, una selfie y un comprobante de domicilio.</p>
          <p style={S.p}><strong>Por dónde pasan:</strong> esos datos <strong>sí atraviesan nuestro servidor</strong>, porque es él quien habla con el proveedor. Lo hace <em>de paso</em>: recibe lo que envías, lo reenvía y lo descarta al terminar la petición. No guardamos tus documentos ni tus datos personales en ninguna base de datos nuestra, no los escribimos en disco y no los registramos en nuestros logs.</p>
          <p style={S.p}><strong>Qué queda en tu dispositivo:</strong> el identificador del trámite, para poder consultarte el estado, y —si dejas el formulario a medias— un borrador con lo que llevabas escrito, para que puedas retomarlo. Ese borrador se guarda solo en tu dispositivo, nunca se envía a servidores nuestros, no incluye tus fotos y se borra en cuanto envías la solicitud o pulsas «Descartar». Cuando el depósito se acredita, se convierte a USDC y llega a tu propia wallet.</p>
          <p style={S.p}><strong>Quién los conserva:</strong> el proveedor correspondiente (Yativo o Fin) y sus entidades asociadas, bajo su propia política y por el tiempo que les exija la regulación de prevención de lavado de activos. Pangea no custodia tu dinero.</p>
          <p style={S.p}><strong>Si quieres borrarlos:</strong> como es el proveedor quien los conserva por obligación legal, escríbenos a <a href={`mailto:${EMAIL}`} style={S.link}>{EMAIL}</a>{' '}y tramitamos tu solicitud con ellos. Borrar tu wallet del dispositivo no elimina un trámite ya enviado a un proveedor.</p>

          <h2 style={S.h2}>Cuando nos escribes a soporte</h2>
          <p style={S.p}>Si usas la pantalla de soporte de la app, para poder responderte y prevenir abuso enviamos a nuestro equipo: tu <strong>mensaje</strong>, el <strong>correo</strong> que dejes, la <strong> dirección pública</strong> de tu wallet, tu IP y país aproximado, y un identificador de dispositivo. En el modo Google se adjunta además el correo verificado de tu cuenta. No incluimos tus llaves, tu frase ni tu contraseña.</p>

          <h2 style={S.h2}>Borrar tu cuenta y tus datos</h2>
          <p style={S.p}><strong>Modo con frase:</strong> la opción «Borrar esta wallet del dispositivo», en Perfil → Cuenta, elimina la wallet cifrada de tu dispositivo de forma inmediata y definitiva (no hay copia en servidores nuestros).</p>
          <p style={S.p}><strong>Modo Google:</strong> la opción «Borrar mi cuenta», en Perfil → Cuenta, borra tu cuenta de inicio de sesión, la wallet creada con ella y los datos asociados (perfil y credenciales de PIN). Es inmediato y no se puede deshacer. Como esa cuenta es la que guarda la llave de tu wallet, al borrarla pierdes el acceso a los fondos que tuviera: guarda tu llave privada o mueve tu saldo antes de hacerlo. Si esa opción no estuviera disponible en tu versión de la app, escribe a <a href={`mailto:${EMAIL}`} style={S.link}>{EMAIL}</a>{' '}y procesamos la solicitud en un máximo de 30 días.</p>
          <p style={S.p}>Esta página sirve además como el recurso web de solicitud de borrado de cuenta: puedes pedirlo desde aquí, sin instalar la app, escribiendo a esa misma dirección.</p>

          <h2 style={S.h2}>Menores de edad</h2>
          <p style={S.p}>Pangea Wallet no está dirigida a menores de 18 años.</p>
          <h2 style={S.h2}>Cambios a esta política</h2>
          <p style={S.p}>Si esta política cambia, actualizaremos esta página y la fecha de arriba. Los cambios importantes se anunciarán dentro de la app.</p>
          <h2 style={S.h2}>Contacto</h2>
          <p style={S.p}>Pangea Labs S.A.S · <a href={`mailto:${EMAIL}`} style={S.link}>{EMAIL}</a></p>
          <p style={S.p}>Ver también los <a href="/terms" style={S.link}>términos del servicio</a>.</p>
        </>
      )}
    </LegalShell>
  );
}
