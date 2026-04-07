import iconInsert from "@/assets/images/icon_insert.svg";
import aboutMeBg from "@/assets/images/bg_aboutMe_text.svg";
import aboutMeBgSm from "@/assets/images/bg_aboutMe_text_sm.svg";
import iconArrow from "@/assets/images/icon_arrow.svg";
import projectSlam from "@/assets/images/index_project_slam.jpg";
import projectPulse from "@/assets/images/index_project_pulse.jpg";
import maxineLogoLg from "@/assets/images/maxine_liao_lg.png";

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function Home() {
	const aboutRef = useRef(null);
	const scrollToAbout = () => {
		aboutRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	const [mode, setMode] = useState("Cool");
	const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
	const [isTablet, setIsTablet] = useState(
		window.innerWidth < 768 && window.innerWidth >= 640
	);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 640);
			setIsTablet(window.innerWidth < 768 && window.innerWidth >= 640);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	useEffect(() => {
		if (mode === "Cool") {
			document.documentElement.classList.add("dark", "bg-black");
		} else {
			document.documentElement.classList.remove("dark", "bg-black");
		}
	}, [mode]);
	function TechTag({ label, x = 0, y = 0, z = 0, rotate = 0, color }) {
		return (
			<span
				className={`
          absolute rounded-full font-medium px-3 py-1
          text-sm md:text-base
          ${
				mode === "Cool"
					? color === "light"
						? "bg-neon-light text-black"
						: "bg-black text-neon"
					: "bg-white text-black"
			}
        `}
				style={{
					transform: `translate(${x}em, ${y}em) rotate(${rotate}deg)`,
					zIndex: z,
				}}
			>
				{label}
			</span>
		);
	}
	
	return (
		<>
			<Header mode={mode} setMode={setMode} />
			<section className="pt-72 pb-50 text-center h-[90vh] flex flex-col items-center justify-center gap-5">
				<h1 className="relative dark:text-neon text-6xl md:text-8xl lg:text-8xl 2xl:text-[120px] font-extrabold italic leading-[0.6] px-2">
					Hi! I'm Max.<br />
					<span className="dark:text-neon-light text-2xl md:text-3xl lg:text-4xl 2xl:text-[60px]">Front-End Developer <small className="font-light">×</small> Problem Solver</span>
					{/* <span className="text-3xl md:text-4xl absolute -top-[2.4em] md:-top-[1.8em] left-[calc(50%+20px)] md:left-[calc(22%+10px)]">
						only
						<img
							className="mt-1"
							src={iconInsert}
							alt="insert icon"
						/>
					</span> */}
				</h1>
				<p className="text-white text-base lg:text-xl/10 px-4">
					<span className="opacity-30">
						{isMobile
							? `<p className=”text-base”>`
							: `<p className=”text-base lg:text-xl”>`}
					</span>{" "}
					Hi，我是Max！
					<span className="block sm:hidden" />
					以 React 專案開發為主，
					<span className="hidden sm:block" />
					擁有設計背景，擅長溝通與拆解需求，並提出可行的解決方式
					<span className="opacity-30">{`</p>`}</span>
				</p>
				<a className="flex flex-col items-center mt-20 cursor-pointer" onClick={scrollToAbout}>
					<p className="dark:text-neon mb-4">scroll down</p>
					<motion.div  
					className="flex justify-center"
					animate={{ y: [0, 12, 0] }}
					transition={{
						duration: 1.2,
						repeat: Infinity,
						ease: 'easeInOut',
					}}>
						<img
						src={iconArrow}
						alt="arrow"
						className="rotate-[90deg] w-[40px]"
						/>
					</motion.div>
				</a>
			</section>
			<motion.section
				initial={{ opacity: 0, y: 80 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ margin: '-25% 0px -25% 0px', once: false }}
				className="py-[80px] sm:py-[160px] text-white">
				<div className="relative mb-20">
					<picture>
						<source
							media="(min-width: 768px)"
							srcSet={mode === "Cool" && aboutMeBg}
						/>
						<img
							src={mode === "Cool" && aboutMeBgSm}
							alt="關於我"
							className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  z-0 w-[200px] md:w-3/4 lg:w-4/5 opacity-50"
						/>
					</picture>
					<p ref={aboutRef} className="mx-auto relative dark:bg-black/85 sm:dark:bg-black/95 w-full md:w-2/3 z-1 p-4 md:p-8 mb-3 text-lg md:text-center">
						嗨，我是 Maxine，同事都叫我 Max。<br />來自設計背景的我，具備前端開發能力，也擁有視覺敏銳度，正邁向更完整的開發角色。
						<br />
						<br />
						我曾主動規劃並開發公司內部的網頁預覽系統，負責從需求分析、系統架構設計到前後端實作與部署。<br />技術採用 React + Tailwind、Express + Firebase + Cloud Run，<br />打造具備密碼保護與到期自動失效機制的安全預覽流程，<br />取代既有 FTP 與人工交付方式，大幅提升專案交付效率與資安控管能力。
						<br />
						<br />
						我也製作過使用 Spotify API 的網頁播放器，<br />透過自製 React Hook 管理播放狀態與 OAUTH 2.0 登入驗證，<br />實際強化 API 串接與元件架構理解。
						<br />
						<br />
						身為一個有些技術 FOMO
						的人，我喜歡點亮技能樹、不斷學習新的酷東西。<br />不只在工作中實踐所學，也樂於迎戰未曾接觸的技術挑戰。<br />
						<span className="font-medium text-neon-light">
							期待能加入開發導向的團隊，在對的環境中厚積薄發，發揮更大的價值。
						</span>
					</p>
				</div>
				<div className="relative">
					<Link to="/about"
						className="dark:bg-neon dark:text-black mx-auto block w-[180px] py-3 font-medium rounded-full whitespace-nowrap overflow-clip"
					>
						<motion.span
							className="block"
							initial={{ x: 0 }}
							animate={{ x: "-100%" }}
							transition={{
								duration: 5,
								repeat: Infinity,
								ease: "linear",
							}}
						>
							更多關於我 更多關於我 更多關於我 更多關於我
							更多關於我
						</motion.span>
					</Link>
					<img
						src={iconArrow}
						alt="arrow"
						className="absolute left-[calc(50%-160px)] top-1/2 -translate-y-1/2"
					/>
					<img
						src={iconArrow}
						alt="arrow"
						className="absolute left-[calc(50%-110px)] top-[calc(100%+36px)] -translate-y-1/2 rotate-[-45deg]"
					/>
					<img
						src={iconArrow}
						alt="arrow"
						className="absolute left-[calc(50%-20px)] top-[calc(100%+42px)] -translate-y-1/2 rotate-[-90deg]"
					/>
					<img
						src={iconArrow}
						alt="arrow"
						className="absolute left-[calc(50%+60px)] top-[calc(100%+36px)] -translate-y-1/2 rotate-[-135deg]"
					/>
					<img
						src={iconArrow}
						alt="arrow"
						className="absolute right-[calc(50%-160px)] top-1/2 -translate-y-1/2 rotate-[-180deg]"
					/>
				</div>
			</motion.section>
			<section className="py-[80px] sm:py-[160px]">
				<div className="container">
					<h2 className="text-4xl lg:text-6xl font-bold text-neon w-fit relative mb-5">
						專案作品
						<div className="absolute -right-6 -top-2 w-[16px] md:w-[20px]">
							<svg
								className="w-full"
								width="19"
								height="27"
								viewBox="0 0 19 27"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4.12544 26.3866C5.41045 22.4785 6.69547 18.5681 7.99723 14.6155H0C0.0693955 14.4609 0.117257 14.3484 0.167509 14.2383C2.32116 9.59684 4.47721 4.9554 6.62607 0.309273C6.73376 0.0749753 6.86059 0 7.12142 0C10.9477 0.00937191 14.7741 0.00702893 18.6004 0.00702893C18.7009 0.00702893 18.8038 0.00702893 18.9856 0.00702893C16.2553 3.12788 13.5776 6.18546 10.8592 9.29225H19C14.0322 15.0419 9.11474 20.733 4.19962 26.4218C4.17569 26.41 4.15176 26.4007 4.12544 26.389V26.3866Z"
									fill="#BFFF00"
								/>
							</svg>
						</div>
					</h2>
					<motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ margin: '-25% 0px 0px 0px', once: false }}
          className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-4 mb-20 md:mb-10">
						<div className="text-white flex flex-col items-start w-full md:w-[40%] lg:w-1/2">
							<h3 className="font-medium text-xl lg:text-3xl mb-2">
								專案預覽管理系統
							</h3>
							<p>用以協助公司管理專案、並為銀行客戶打造密碼保護及到期自動失效的網頁預覽功能，取代 FTP 手動交付流程。
							</p>
							<Link
								to="projects/slam-access"
								className="text-neon self-end mt-4 flex items-center gap-2"
							>
								完整介紹
								<img
									src={iconArrow}
									alt="arrow"
									className="w-[24px]"
								/>
							</Link>
						</div>
						<div className="w-full md:w-[60%] lg:w-1/2 relative">
							<img
								src={projectSlam}
								alt="Slam 專案預覽管理系統"
							/>
							<div className="absolute left-[48%] md:left-1/2 xl:left-[60%] bottom-0 -translate-x-1/2 w-full">
								<TechTag
									label="#React"
									x={1}
									y={-2.6}
									z={0}
									rotate={-20}
									color="light"
								/>
								<TechTag
									label="#Node"
									x={5.8}
									y={-2}
									z={0}
									rotate={0}
									color="dark"
								/>
								<TechTag
									label="#Tailwind"
									x={12}
									y={-2}
									z={0}
									rotate={0}
									color="light"
								/>
								<TechTag
									label="#Express"
									x={8}
									y={-4}
									z={0}
									rotate={0}
									color="dark"
								/>
								<TechTag
									label="#Firebase"
									x={19}
									y={-2}
									z={0}
									rotate={0}
									color="dark"
								/>
							</div>
						</div>
					</motion.div>
					<motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ margin: '-25% 0px 0px 0px', once: false }}
          className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-4">
						<div className="text-white flex flex-col items-start w-full md:w-[40%] lg:w-1/2">
							<h3 className="font-medium text-xl lg:text-3xl mb-2">
								PULSE Web Player
							</h3>
							<p>
								串接 Spotify API 的網頁音樂播放器 Side Project。使用 OAuth 2.0（PKCE）登入流程與 Web Playback SDK 播放控制。
							</p>
							<Link
								to="/projects/pulse"
								className="text-neon self-end mt-4 flex items-center gap-2"
							>
								完整介紹
								<img
									src={iconArrow}
									alt="arrow"
									className="w-[24px]"
								/>
							</Link>
						</div>
						<div className="w-full md:w-[60%] lg:w-1/2 relative">
							<img src={projectPulse} alt="PULSE Web Player" />
							<div className="absolute left-[48%] md:left-1/2 xl:left-[60%] bottom-0 -translate-x-1/2 w-full">
								<TechTag
									label="#React"
									x={3}
									y={-2}
									z={0}
									rotate={0}
									color="light"
								/>
								<TechTag
									label="#Spotify API"
									x={10}
									y={-2}
									z={0}
									rotate={0}
									color="dark"
								/>
								<TechTag
									label="#Bootstrap"
									x={18}
									y={-2}
									z={0}
									rotate={0}
									color="light"
								/>
								<TechTag
									label="#GSAP"
									x={6}
									y={-3.9}
									z={0}
									rotate={4}
									color="light"
								/>
							</div>
						</div>
					</motion.div>
					{/* <motion.a
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ margin: '-25% 0px 0px 0px', once: false }}
						href="#"
						className="dark:border-1 dark:border-neon-dark dark:text-neon-dark mt-10 md:mt-5 block w-[180px] py-3 font-medium rounded-full whitespace-nowrap overflow-clip mx-auto md:mx-0 text-center cursor-not-allowed"
					>
						<span
							className="block"
							initial={{ x: 0 }}
							animate={{ x: "-100%" }}
							transition={{
								duration: 5,
								repeat: Infinity,
								ease: "linear",
							}}
						>
							更多作品 整理中
						</span>
					</motion.a> */}
				</div>
			</section>
			<Footer />
		</>
	);
}
