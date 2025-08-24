import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
            <div className="pointer-events-none absolute inset-0 [background:radial-gradient(900px_circle_at_50%_-10%,rgba(99,102,241,0.20),transparent_60%)]" />

            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />

            <main className="relative z-10 flex items-center justify-center min-h-screen px-6">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                >
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight select-none">
                        <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_8px_24px_rgba(236,72,153,0.25)]">
                            Home
                        </span>
                    </h1>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                        className="mx-auto mt-4 h-[3px] w-40 origin-left rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400"
                    />

                    <p className="mt-6 max-w-xl mx-auto text-slate-300/90 text-lg">
                        <div className="flex gap-5">
                            <Link to="sign_up">
                                <button className="p-2 border  px-13 rounded-4xl font-bold text-[#fff] transition-all duration-300 hover:scale-[1.1] bg-purple-500 hover:bg-[#fff] hover:text-pink-500 ">SIGN UP</button>
                            </Link>
                            <Link to="sign_in">
                                <button className="p-2 border  px-13 rounded-4xl font-bold text-[#fff] transition-all duration-300 hover:scale-[1.1] bg-purple-500 hover:bg-[#fff] hover:text-pink-500">SIGN IN</button>
                            </Link>
                        </div>
                    </p>
                </motion.div>
            </main>

            <motion.div
                aria-hidden
                className="absolute -left-16 top-24 h-56 w-56 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle at 30% 30%, #a78bfa55, transparent 60%)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                aria-hidden
                className="absolute -right-20 bottom-24 h-64 w-64 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle at 70% 70%, #f472b655, transparent 60%)" }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
    );
}
