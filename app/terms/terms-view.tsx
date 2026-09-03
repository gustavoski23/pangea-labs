'use client';
import { CredentialBanner, LegalShell, S, useLegalLang } from '../components/legal-doc';

const UPDATED_EN = 'August 25, 2026';
const UPDATED_ES = '25 de agosto de 2026';
const EMAIL = 'gustavo@pangeawallet.space';

export function TermsView() {
  const [lang, setLang] = useLegalLang();

  return (
    <LegalShell lang={lang} setLang={setLang}>
      {lang === 'en' ? (
        <>
          <h1 style={S.h1}>Terms of Service</h1>
          <p style={S.meta}>Pangea Wallet · Pangea Labs S.A.S (Colombia) · Last updated: {UPDATED_EN}</p>
          <CredentialBanner lang="en" />
          <p style={S.p}>Pangea Wallet is operated by <strong>Pangea Labs S.A.S</strong>, a company incorporated in Colombia and registered with the Chamber of Commerce, and a Money Services Business (MSB) registered with the U.S. Financial Crimes Enforcement Network (FinCEN). These terms explain what Pangea Wallet is, what it does for you, and what stays in your hands. By using the app you accept what this page says. If anything is unclear, write to us before using it.</p>

          <h2 style={S.h2}>What Pangea Wallet is (and isn’t)</h2>
          <p style={S.p}>Pangea Wallet is a <strong>non-custodial wallet</strong> on the Solana network. It helps you create and use your own keys to hold and move crypto assets (such as USDC, USDT and SOL). You can use it in two ways: with a <strong>12-word recovery phrase</strong>, or by signing in <strong>with your Google account</strong>, where a provider (Privy) creates and safeguards a wallet tied to that login. In both cases, the keys are generated and encrypted so that only you can sign.</p>
          <p style={S.p}><strong>We do not custody your money.</strong> We don’t hold your funds, we can’t move them, we can’t freeze them and we can’t return them. We are not a bank, we are not an exchange and we don’t take deposits. You sign every transaction from your own device.</p>

          <h2 style={S.h2}>Your key is your responsibility</h2>
          <ul>
            <li style={S.li}>If you lose your 12-word recovery phrase (or your private key, in Google mode) and have no backup, <strong>you lose access to your funds forever</strong>. No one can recover them: not you, not us, no one.</li>
            <li style={S.li}>Never share your phrase or your key with anyone. <strong>Pangea will never ask you for them</strong>, by any means. Anyone who asks is trying to rob you.</li>
            <li style={S.li}>Keeping your password and your phrase somewhere safe is part of the deal: it’s what makes the wallet yours and no one else’s.</li>
          </ul>

          <h2 style={S.h2}>Transactions can’t be undone</h2>
          <p style={S.p}>Blockchain transactions are <strong>irreversible</strong>. If you send funds to the wrong address, the wrong network or a scammer, that money can’t be recovered and we can’t reverse it. That’s why the app shows you the full address and asks you to confirm it before signing: check it.</p>

          <h2 style={S.h2}>Practice mode and the real network</h2>
          <p style={S.p}>The app can run on a test network, where money <strong>has no real value</strong> and is only for learning, or on the main network, where money is real and irreversible. The app tells you which one you’re on. Never reuse on the real network a phrase you used to practice.</p>

          <h2 style={S.h2}>Adding funds</h2>
          <p style={S.p}>You can add funds to your wallet in several ways. However you do it, the money arrives as <strong> USDC in your own non-custodial wallet</strong> — we don’t hold it along the way.</p>
          <ul>
            <li style={S.li}><strong>Buy with card:</strong> this is an integration through Privy with an aggregator called <strong>Meld</strong>. Meld routes your purchase to one of several third-party providers. <strong>Each provider runs its own identity verification (KYC) and sets its own limits and fees</strong> — that verification is done by the provider, not by Pangea. You buy USDC through them and it arrives in your wallet.</li>
            <li style={S.li}><strong>Deposit in local currency (Colombia / Latin America):</strong> handled by <strong> Yativo</strong>, a regulated provider, and its local payment partners (for example PSE, Nequi, bank transfer or Bre-B). Yativo also provides the bank accounts for Colombia and Latin America. Using it requires you to verify your identity with Yativo.</li>
          </ul>

          <h2 style={S.h2}>Partner / Third-Party Terms — Pangea Shop</h2>
          <p style={S.p}>Inside the app you can buy gift cards, mobile top-ups and eSIMs in the <strong>Pangea Shop</strong>. Those purchases are made <strong>directly with Cryptorefills</strong> (a brand of Big Dream Ventures BV, incorporated in the Netherlands), which is the seller of record: Cryptorefills sells you the product and delivers it to the email you enter at checkout. Pangea only shows the catalog — <strong>we never receive or hold the money for a Shop purchase</strong>. You pay from your own wallet, directly to the payment address Cryptorefills generates for that order.</p>
          <p style={S.p}>Because Cryptorefills is the seller, its own terms and privacy policy apply to every Shop purchase, in addition to this page:</p>
          <ul>
            <li style={S.li}><a href="https://www.cryptorefills.com/en/terms-of-service" target="_blank" rel="noopener noreferrer" style={S.link}>Cryptorefills Terms of Service</a></li>
            <li style={S.li}><a href="https://www.cryptorefills.com/en/privacy-policy" target="_blank" rel="noopener noreferrer" style={S.link}>Cryptorefills Privacy Policy</a></li>
          </ul>
          <p style={S.p}><strong>Support for a Shop purchase is handled by Cryptorefills</strong>, at{' '}<a href="https://www.cryptorefills.com/en/help" target="_blank" rel="noopener noreferrer" style={S.link}>cryptorefills.com/en/help</a>. You can also write to us and we’ll help you route it. Cryptorefills may update its terms and privacy policy from time to time; the links above always point to the version in force.</p>

          <h2 style={S.h2}>Bank accounts</h2>
          <p style={S.p}>If you request one, the account is opened and operated by a regulated provider, not by Pangea. We are not a bank and we don’t custody the money: what you receive is converted to USDC and lands in your own wallet, whose keys only you hold.</p>
          <ul>
            <li style={S.li}><strong>United States:</strong> the U.S. bank account is provided by <strong>Fin</strong>{' '}and its associated banks.</li>
            <li style={S.li}><strong>Colombia / Latin America:</strong> the bank account is provided by <strong> Yativo</strong> and its partners.</li>
          </ul>
          <p style={S.p}>Approval is <strong>not guaranteed</strong>: it depends on the identity verification and compliance policies of the provider and its banks, which may ask for more information, delay the review, reject the request or close an account already opened. We show you the status and what needs fixing, but the decision isn’t ours.</p>

          <h2 style={S.h2}>Payment link (getting paid)</h2>
          <p style={S.p}>You can create a payment link to receive money. This is also handled by <strong>Yativo</strong>{' '}and requires identity verification with that provider. What is collected is converted to USDC and arrives in your wallet.</p>

          <h2 style={S.h2}>Identity verification (KYC / KYB)</h2>
          <p style={S.p}>Basic use of the phrase-based wallet needs no account and no ID. But some features — buying with card, depositing in local currency, opening a bank account or using a payment link — require by law that a <strong>regulated provider verify your identity</strong> (KYC), and for businesses, verify the business (KYB). Each provider has its own verification, its own limits and its own fees, and <strong>keeps those records under its own anti-money-laundering rules</strong> — not Pangea. Submitting false data or someone else’s data is grounds for rejection and may be a crime. What data is sent and who keeps it is described in our{' '}<a href="/privacy" style={S.link}>Privacy Policy</a>.</p>

          <h2 style={S.h2}>Swapping assets</h2>
          <p style={S.p}>You can exchange one crypto asset for another inside the app. The swap runs against public protocols on the network (Jupiter). The price depends on the market at that moment and can move between the time you see it and the time it confirms; the app shows you the <strong> guaranteed minimum</strong> before you sign.</p>

          <h2 style={S.h2}>Session security</h2>
          <p style={S.p}>To protect you, the app can ask for a <strong>PIN</strong> when you open it and let you turn on <strong>two-step verification</strong> (in Google mode). It also locks itself after a while of inactivity. These layers guard access to the app on your device; signing your transactions still depends on your keys. Take care of your PIN, your password and your device: whoever has access to them can operate your wallet.</p>

          <h2 style={S.h2}>Fees</h2>
          <p style={S.p}>Every network transaction has a cost charged by the network, not by us. If you use the option to send or swap without holding SOL for the network fee, a service of ours pays it for you and charges a <strong>flat 0.50 USDC service fee</strong>, deducted from the amount: the app shows you <strong>how much arrives net before you confirm</strong>. If you hold your own SOL, you send the normal way without that fee. Payment, deposit and swap providers also charge their own fees, which you’ll see in their flow before you accept.</p>

          <h2 style={S.h2}>Permitted use</h2>
          <ul>
            <li style={S.li}>You must be over 18.</li>
            <li style={S.li}>You may not use the app for illegal activity, fraud, money laundering, terrorist financing, or to evade international sanctions.</li>
            <li style={S.li}>You are responsible for complying with the laws and tax obligations of your country for what you do with your funds.</li>
            <li style={S.li}>Don’t attempt to attack, overload or breach the app or the services that support it.</li>
          </ul>

          <h2 style={S.h2}>This is not financial advice</h2>
          <p style={S.p}>Pangea Wallet is a tool, not an advisor. We don’t recommend buying, selling or holding any asset. Crypto assets are volatile and their value can fall: decisions about your money are yours and you assume the risk.</p>

          <h2 style={S.h2}>The service is provided “as is”</h2>
          <p style={S.p}>We do our best to keep the app working well, but we don’t guarantee it will always be available or free of faults. It depends on public networks and external providers that can go down or change their rules. We may modify, suspend or discontinue features.</p>
          <p style={S.p}>To the extent the law allows, Pangea Labs S.A.S is not liable for losses arising from: the loss of your phrase or key, transactions you signed yourself, errors typing an address, price swings, failures of networks or external providers, or unauthorized access to your device.</p>

          <h2 style={S.h2}>Ending your use of the service</h2>
          <p style={S.p}>You can stop using the app whenever you want. From Profile → Account you can delete the wallet from your device or, in Google mode, delete your account. Remember that deleting without having saved your phrase or key means losing access to those funds. The details are in our <a href="/privacy" style={S.link}>Privacy Policy</a>.</p>

          <h2 style={S.h2}>Changes to these terms</h2>
          <p style={S.p}>If these terms change, we’ll update this page and the date above. Significant changes will be announced inside the app.</p>

          <h2 style={S.h2}>Governing law and contact</h2>
          <p style={S.p}>These terms are governed by the laws of the Republic of Colombia. Any question or claim: Pangea Labs S.A.S ·{' '}<a href={`mailto:${EMAIL}`} style={S.link}>{EMAIL}</a></p>
        </>
      ) : (
        <>
          <h1 style={S.h1}>Términos del servicio</h1>
          <p style={S.meta}>Pangea Wallet · Pangea Labs S.A.S (Colombia) · Última actualización: {UPDATED_ES}</p>
          <CredentialBanner lang="es" />
          <p style={S.p}>Pangea Wallet la opera <strong>Pangea Labs S.A.S</strong>, una sociedad constituida en Colombia e inscrita en la Cámara de Comercio, y una Money Services Business (MSB) registrada ante la FinCEN de los Estados Unidos. Estos términos explican qué es Pangea Wallet, qué hace por ti y qué queda en tus manos. Al usar la app aceptas lo que dice esta página. Si algo no te queda claro, escríbenos antes de usarla.</p>

          <h2 style={S.h2}>Qué es Pangea Wallet (y qué no es)</h2>
          <p style={S.p}>Pangea Wallet es una <strong>billetera no-custodial</strong> sobre la red Solana. Te ayuda a crear y usar tus propias llaves para guardar y mover criptoactivos (como USDC, USDT y SOL). Puedes usarla de dos formas: con una <strong>frase de recuperación de 12 palabras</strong>, o entrando <strong>con tu cuenta de Google</strong>, donde un proveedor (Privy) crea y resguarda una wallet ligada a ese inicio de sesión. En ambos casos, las llaves se generan y se cifran para que solo tú puedas firmar.</p>
          <p style={S.p}><strong>No custodiamos tu dinero.</strong> No tenemos tus fondos, no podemos moverlos, no podemos congelarlos y no podemos devolverlos. No somos un banco, no somos una casa de cambio y no recibimos depósitos. Cada transacción la firmas tú desde tu dispositivo.</p>

          <h2 style={S.h2}>Tu llave es tu responsabilidad</h2>
          <ul>
            <li style={S.li}>Si pierdes tu frase de recuperación de 12 palabras (o tu llave privada, en el modo Google) y no tienes respaldo, <strong>pierdes el acceso a tus fondos para siempre</strong>. Nadie puede recuperarlos: ni tú, ni nosotros, ni nadie.</li>
            <li style={S.li}>Nunca compartas tu frase ni tu llave con nadie. <strong>Pangea jamás te las va a pedir</strong>, por ningún medio. Quien te las pida te está robando.</li>
            <li style={S.li}>Guardar tu contraseña y tu frase en un lugar seguro es parte del trato: es lo que hace que la billetera sea tuya y no de un tercero.</li>
          </ul>

          <h2 style={S.h2}>Las transacciones no se pueden deshacer</h2>
          <p style={S.p}>Las transacciones en blockchain son <strong>irreversibles</strong>. Si envías fondos a una dirección equivocada, a la red equivocada o a un estafador, ese dinero no se puede recuperar y no podemos revertirlo. Por eso la app te muestra la dirección completa y te pide confirmarla antes de firmar: revísala.</p>

          <h2 style={S.h2}>Modo de práctica y red real</h2>
          <p style={S.p}>La app puede funcionar en una red de prueba, donde el dinero <strong>no tiene valor real</strong> y sirve solo para aprender, o en la red principal, donde el dinero es real e irreversible. La app te indica en cuál estás. Nunca reutilices en la red real una frase que hayas usado para practicar.</p>

          <h2 style={S.h2}>Recargar y depositar</h2>
          <p style={S.p}>Puedes cargar saldo a tu wallet de varias maneras. Como sea que lo hagas, el dinero llega como <strong>USDC a tu propia wallet no-custodial</strong> — no lo retenemos en el camino.</p>
          <ul>
            <li style={S.li}><strong>Comprar con tarjeta:</strong> es una integración a través de Privy con un agregador llamado <strong>Meld</strong>. Meld enruta tu compra a uno de varios proveedores externos. <strong> Cada proveedor hace su propia verificación de identidad (KYC) y fija sus propios límites y comisiones</strong> — esa verificación la hace el proveedor, no Pangea. Tú compras USDC a través de ellos y llega a tu wallet.</li>
            <li style={S.li}><strong>Depositar en moneda local (Colombia / Latinoamérica):</strong> lo opera <strong> Yativo</strong>, un proveedor regulado, con sus aliados de pago locales (por ejemplo PSE, Nequi, transferencia o Bre-B). Yativo también provee las cuentas bancarias para Colombia y Latinoamérica. Para usarlo debes verificar tu identidad con Yativo.</li>
          </ul>

          <h2 style={S.h2}>Términos de terceros — Pangea Shop</h2>
          <p style={S.p}>Desde la app puedes comprar tarjetas de regalo, recargas y eSIM en el <strong>Pangea Shop</strong>. Esas compras se hacen <strong>directamente con Cryptorefills</strong> (marca de Big Dream Ventures BV, constituida en los Países Bajos), que es quien te vende el producto y lo entrega al correo que dejas en el checkout. Pangea solo muestra el catálogo — <strong>nunca recibimos ni custodiamos el dinero de una compra del Shop</strong>. Tú pagas desde tu propia wallet, directo a la dirección de pago que Cryptorefills genera para esa orden.</p>
          <p style={S.p}>Como Cryptorefills es quien vende, sus propios términos y su política de privacidad aplican a toda compra del Shop, además de esta página:</p>
          <ul>
            <li style={S.li}><a href="https://www.cryptorefills.com/en/terms-of-service" target="_blank" rel="noopener noreferrer" style={S.link}>Términos del servicio de Cryptorefills</a></li>
            <li style={S.li}><a href="https://www.cryptorefills.com/en/privacy-policy" target="_blank" rel="noopener noreferrer" style={S.link}>Política de privacidad de Cryptorefills</a></li>
          </ul>
          <p style={S.p}><strong>El soporte de una compra del Shop lo atiende Cryptorefills</strong>, en{' '}<a href="https://www.cryptorefills.com/en/help" target="_blank" rel="noopener noreferrer" style={S.link}>cryptorefills.com/en/help</a>. También puedes escribirnos a nosotros y te ayudamos a encaminarlo. Cryptorefills puede actualizar sus términos y su política de privacidad; los enlaces de arriba siempre apuntan a la versión vigente.</p>

          <h2 style={S.h2}>Cuentas bancarias</h2>
          <p style={S.p}>Si solicitas una, la cuenta la abre y la opera un proveedor regulado, no Pangea. No somos un banco y no custodiamos el dinero: lo que recibas se convierte a USDC y llega a tu propia wallet, cuyas llaves solo tú tienes.</p>
          <ul>
            <li style={S.li}><strong>Estados Unidos:</strong> la cuenta bancaria en EE. UU. la provee <strong>Fin</strong>{' '}y sus bancos asociados.</li>
            <li style={S.li}><strong>Colombia / Latinoamérica:</strong> la cuenta bancaria la provee <strong>Yativo</strong>{' '}y sus aliados.</li>
          </ul>
          <p style={S.p}>La aprobación <strong>no está garantizada</strong>: depende de la verificación de identidad y de las políticas de cumplimiento del proveedor y de sus bancos, que pueden pedirte información adicional, demorar la revisión, rechazar la solicitud o cerrar una cuenta ya abierta. Nosotros te mostramos el estado y lo que haga falta corregir, pero la decisión no es nuestra.</p>

          <h2 style={S.h2}>Link de pago (para cobrar)</h2>
          <p style={S.p}>Puedes crear un link de pago para recibir dinero. Esto también lo opera <strong>Yativo</strong>{' '}y requiere verificación de identidad con ese proveedor. Lo que se cobra se convierte a USDC y llega a tu wallet.</p>

          <h2 style={S.h2}>Verificación de identidad (KYC / KYB)</h2>
          <p style={S.p}>El uso básico de la billetera con frase no exige cuenta ni identificación. Pero algunas funciones —comprar con tarjeta, depositar en moneda local, abrir una cuenta bancaria o usar un link de pago— requieren por ley que un <strong>proveedor regulado verifique tu identidad</strong>{' '}(KYC), y para empresas, verifique la empresa (KYB). Cada proveedor tiene su propia verificación, sus propios límites y sus propias comisiones, y <strong>conserva esos registros bajo sus propias reglas de prevención de lavado de activos</strong> — no Pangea. Enviar datos falsos o de otra persona es causa de rechazo y puede constituir un delito. Qué datos se envían y quién los conserva está en nuestra <a href="/privacy" style={S.link}>política de privacidad</a>.</p>

          <h2 style={S.h2}>Cambiar monedas (swap)</h2>
          <p style={S.p}>Puedes intercambiar unos criptoactivos por otros dentro de la app. El cambio se ejecuta contra protocolos públicos de la red (Jupiter). El precio depende del mercado en ese momento y puede moverse entre que lo ves y que se confirma; la app te muestra el <strong>mínimo garantizado</strong> antes de firmar.</p>

          <h2 style={S.h2}>Seguridad de tu sesión</h2>
          <p style={S.p}>Para protegerte, la app puede pedirte un <strong>PIN</strong> al abrirla y ofrecerte activar la <strong> verificación en dos pasos</strong> (en el modo Google). También se bloquea sola tras un rato de inactividad. Estas capas cuidan el acceso a la app en tu dispositivo; la firma de tus transacciones sigue dependiendo de tus llaves. Cuida tu PIN, tu contraseña y tu dispositivo: quien tenga acceso a ellos puede operar tu wallet.</p>

          <h2 style={S.h2}>Comisiones</h2>
          <p style={S.p}>Toda transacción en la red tiene un costo que cobra la red, no nosotros. Si usas la opción de enviar o cambiar sin tener SOL para la comisión de red, un servicio nuestro la paga por ti y cobra una <strong>comisión de servicio fija de 0,50 USDC</strong>, que se descuenta del monto: la app te muestra <strong>cuánto llega en limpio antes de que confirmes</strong>. Si tienes tu propio SOL, envías por la vía normal sin esa comisión. Los proveedores de pago, de depósito y de cambio cobran además sus propias comisiones, que verás en su flujo antes de aceptar.</p>

          <h2 style={S.h2}>Uso permitido</h2>
          <ul>
            <li style={S.li}>Debes ser mayor de 18 años.</li>
            <li style={S.li}>No puedes usar la app para actividades ilegales, fraude, lavado de activos, financiamiento del terrorismo, ni para evadir sanciones internacionales.</li>
            <li style={S.li}>Eres responsable de cumplir las leyes y obligaciones tributarias de tu país por lo que hagas con tus fondos.</li>
            <li style={S.li}>No intentes atacar, sobrecargar ni vulnerar la app o los servicios que la sostienen.</li>
          </ul>

          <h2 style={S.h2}>Esto no es asesoría financiera</h2>
          <p style={S.p}>Pangea Wallet es una herramienta, no un asesor. No te recomendamos comprar, vender ni conservar ningún activo. Los criptoactivos son volátiles y su valor puede caer: las decisiones sobre tu dinero son tuyas y asumes su riesgo.</p>

          <h2 style={S.h2}>El servicio se ofrece «tal cual»</h2>
          <p style={S.p}>Hacemos lo posible por que la app funcione bien, pero no garantizamos que esté siempre disponible ni libre de fallas. Depende de redes públicas y de proveedores externos que pueden caerse o cambiar sus reglas. Podemos modificar, suspender o descontinuar funciones.</p>
          <p style={S.p}>En la medida en que la ley lo permita, Pangea Labs S.A.S no responde por pérdidas derivadas de: la pérdida de tu frase o tu llave, transacciones que hayas firmado tú, errores al escribir una dirección, fluctuaciones de precio, fallas de redes o proveedores externos, ni accesos no autorizados a tu dispositivo.</p>

          <h2 style={S.h2}>Terminar de usar el servicio</h2>
          <p style={S.p}>Puedes dejar de usar la app cuando quieras. Desde Perfil → Cuenta puedes borrar la billetera de tu dispositivo o, en el modo Google, borrar tu cuenta. Recuerda que borrar sin haber guardado tu frase o tu llave significa perder el acceso a esos fondos. El detalle está en nuestra{' '}<a href="/privacy" style={S.link}>política de privacidad</a>.</p>

          <h2 style={S.h2}>Cambios a estos términos</h2>
          <p style={S.p}>Si estos términos cambian, actualizaremos esta página y la fecha de arriba. Los cambios importantes se anunciarán dentro de la app.</p>

          <h2 style={S.h2}>Ley aplicable y contacto</h2>
          <p style={S.p}>Estos términos se rigen por las leyes de la República de Colombia. Cualquier duda o reclamo: Pangea Labs S.A.S · <a href={`mailto:${EMAIL}`} style={S.link}>{EMAIL}</a></p>
        </>
      )}
    </LegalShell>
  );
}
