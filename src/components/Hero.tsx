import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline/next"));

const Hero = () => {
    return (
        <>
            <section className="hidden lg:block">
                <Suspense fallback={<div className="h-screen bg-slate-600 w-full animate-pulse" />}>
                    <Spline scene="https://prod.spline.design/UlXD6tJQ1PdqHHEq/scene.splinecode" />
                </Suspense>
            </section>
            <section className="lg:hidden min-h-[100vw]"></section>
        </>
    );
};

export default Hero;
