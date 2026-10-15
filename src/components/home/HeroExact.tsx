"use client";
import { useState, useEffect } from "react";
import ResponsiveSlider from "@/components/ui/ResponsiveSlider";
import Countdown from "@/components/landing/Countdown";
import { motion } from "framer-motion";
import PresaleModal from "@/components/ui/PresaleModal";

export default function HeroExact() {
    const [targetDate, setTargetDate] = useState("2026-04-24T18:00:00");
    const [showPresale, setShowPresale] = useState(false);

    useEffect(() => {
        fetch("/api/admin/settings.json", { cache: 'no-store' })
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const date = data.find((s: any) => s.key === "HERO_COUNTDOWN")?.value;
                    if (date) setTargetDate(date);
                }
            });
    }, []);

    return (
        <section style={{
            position: "relative",
            minHeight: "100vh",
            width: "100%",
            background: "#000",
            overflow: "hidden"
        }}>
            {/* The Dynamic Premium Slider */}
            <ResponsiveSlider sliderId="home-main" />

            {/* Float Overlay Elements (Fixed on top of slider) */}
            <div className="container" style={{
                position: "absolute",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 100,
                textAlign: "center"
            }}>
                <div style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(10px)", padding: "20px 40px", borderRadius: "15px", display: "inline-block", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <div className="countdown-wrapper">
                        <Countdown targetDate={targetDate} />
                    </div>
                    <div style={{ marginTop: "15px", fontSize: "13px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", color: "white" }}>
                        LA GRAN FINAL: <span style={{ color: "var(--accent-pink)" }}>24 DE ABRIL</span>
                    </div>
                </div>

                <div className="hero-btns" style={{ marginTop: "30px" }}>
                        <motion.a
                            href="#entradas"
                            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="btn-hero-solid"
                            style={{ 
                                display: "inline-block", 
                                marginRight: "10px", 
                                background: "linear-gradient(135deg, #f5245f, #9e0e41)",
                                textDecoration: "none",
                                padding: "18px 45px",
                                borderRadius: "12px",
                                fontWeight: "900",
                                fontSize: "16px",
                                letterSpacing: "2px",
                                boxShadow: "0 10px 40px rgba(245,36,95,0.4)"
                            }}
                        >
                            COMPRA TU ENTRADA
                        </motion.a>

                    <motion.a
                        href="/#about"
                        whileHover={{ scale: 1.05, border: "1px solid var(--accent-pink)" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="btn-hero-outline"
                        style={{ display: "inline-block" }}
                    >
                        CONÓCENOS
                    </motion.a>
                </div>
            </div>

            {/* Side Indicator Decorative */}
            <div style={{
                position: "absolute",
                right: "60px",
                top: "50%",
                transform: "translateY(-50%) rotate(90deg)",
                zIndex: 100,
                color: "var(--accent-pink)",
                fontSize: "12px",
                fontWeight: "900",
                letterSpacing: "5px"
            }} className="desktop-only">
                ESTÉTICA • ELEGANCIA • PODER
            </div>

            <PresaleModal isOpen={showPresale} onClose={() => setShowPresale(false)} />
        </section>
    );
}
