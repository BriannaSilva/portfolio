import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import './App.css'

function currentControl() {
  if (window.innerWidth < 768)
    return "automover";

  else
    return "mouse";
}

function App() {

  const overlay = useRef<HTMLTableSectionElement>(null);

  const [control, setControl] = useState(currentControl());

  const speed = 20;

  const [xdirection, setXDirection] = useState(speed);
  const [ydirection, setYDirection] = useState(speed);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => setControl(currentControl()));
  }, []);

  useEffect(() => {
    const f = () => {
      if (control !== "automover")
        return;

      let xdirNow = xdirection;
      if (x > window.innerWidth || x < 0) {
        xdirNow *= -1;
        setXDirection(xdirNow);
      }

      let ydirNow = ydirection;
      if (y > window.innerHeight || y < 0) {
        ydirNow *= -1;
        setYDirection(ydirNow);
      }

      setX(x + xdirNow);
      setY(y + ydirNow);

      gsap.to(overlay.current, {
        "--x": `${x + xdirNow}px`,
        "--y": `${y + ydirNow}px`,
        duration: 0.1,
        ease: "sine.out"
      });
    };
    const tref = setTimeout(f, 100);
    return () => clearTimeout(tref);
  }, [control, x, y, xdirection, ydirection]);

  useEffect(() => {
    const f = (e: MouseEvent): void => {
      if (control !== "mouse")
        return;

      const { clientX, clientY } = e;

      setX(clientX);
      setY(clientY);

      gsap.to(overlay.current, {
        "--x": `${clientX}px`,
        "--y": `${clientY}px`,
        duration: 0.3,
        ease: "sine.out"
      });
    };

    window.addEventListener("mousemove", f);

    // mata el event listener que activamos arriba
    // cuando el use effect cambie, debido a la variable control
    return () => window.removeEventListener("mousemove", f);
  }, [control]);

  const [abierto, setAbierto] = useState(false);

  let overlayClassName: string = "overlay";
  if (abierto)
    overlayClassName += " is-open";

  return (
    <>
      <section className="section-1">
        <MyNameIs>
          <span className="hover-btn">
            <Entrar />
          </span>
        </MyNameIs>
      </section>
      <div className="absolute-container">
        <section className={overlayClassName} ref={overlay}>
          <MyNameIs>
            <span className="hover-btn2" onClick={() => setAbierto(!abierto)}>
              <Entrar />
            </span>
          </MyNameIs>
        </section>
      </div>
    </>
  )
}

function Entrar() {
  return <Link to="/graphic" className="button-index">Press me</Link>;
}

function MyNameIs({ children }: PropsWithChildren) {
  return (
    <div className="div-home">
      <h1 className="nombre">BRIANNA SILVA</h1>
      {children}
    </div>
  )
}

export default App
