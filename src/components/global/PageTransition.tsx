"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";
import styles from "./PageTransition.module.css";

const strokePaths = [
  "M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262",
  "M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012",
];

function animateLeave(paths: SVGPathElement[]) {
  return new Promise<void>((resolve) => {
    const timeline = gsap.timeline({ onComplete: resolve });
    paths.forEach((path) => {
      timeline.to(
        path,
        {
          strokeDashoffset: 0,
          attr: { "stroke-width": 700 },
          duration: 1,
          ease: "power1.inOut",
        },
        0,
      );
    });
  });
}

function animateEnter(paths: SVGPathElement[]) {
  return new Promise<void>((resolve) => {
    const timeline = gsap.timeline({ onComplete: resolve });
    paths.forEach((path) => {
      const length = path.getTotalLength();
      timeline.to(
        path,
        {
          strokeDashoffset: -length,
          attr: { "stroke-width": 200 },
          duration: 1,
          ease: "power1.inOut",
          onComplete: () => gsap.set(path, { strokeDashoffset: length }),
        },
        0,
      );
    });
  });
}

export default function PageTransition() {
  const svgRef = useRef<SVGSVGElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isTransitioning = useRef(false);
  const pendingNavigation = useRef(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    const paths = Array.from(svgRef.current?.querySelectorAll("path") ?? []);
    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    });

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      if (isTransitioning.current) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      isTransitioning.current = true;
      pendingNavigation.current = true;

      animateLeave(paths).then(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router]);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    if (!pendingNavigation.current) return;

    pendingNavigation.current = false;
    const paths = Array.from(svgRef.current?.querySelectorAll("path") ?? []);
    animateEnter(paths).then(() => {
      isTransitioning.current = false;
    });
  }, [pathname]);

  return (
    <div className={styles.transitionSvg} aria-hidden="true">
      <svg ref={svgRef} viewBox="0 0 2453 2535" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d={strokePaths[0]} stroke="var(--transition-stroke-1)" strokeWidth="200" strokeLinecap="round" />
        <path d={strokePaths[1]} stroke="var(--transition-stroke-2)" strokeWidth="200" strokeLinecap="round" />
      </svg>
    </div>
  );
}