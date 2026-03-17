import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import scrollToId from "@/utils/ScrollSmooth";
import { motion } from "framer-motion";

export default function About() {
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
	function PersonalityTag({
		label,
		x = 0,
		y = 0,
		z = 0,
		rotate = 0,
		color = "white",
		}) {
		const colorMap = {
			white: `
			bg-white text-black
			dark:bg-white dark:text-black
			`,
			light: `
			bg-neon-light text-black
			dark:bg-neon-light dark:text-black
			`,
			normal: `
			bg-neon text-black
			dark:bg-neon dark:text-black
			`,
		};

		return (
			<span
			className={`
				absolute font-medium px-3 py-1
				text-sm md:text-sm whitespace-nowrap
				${colorMap[color]}
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
			<section className="py-[80px] sm:pt-[160px] sm:pb-[100px] text-white">
				<div className="container">
					<h1 className="text-5xl lg:text-6xl font-bold text-center w-fit mx-auto mb-30">關於我
						<PersonalityTag label="#Problem Solver" x={-13} y={-1} rotate={-6} color="white"/>
						<PersonalityTag label="#Quick Learner" x={-5} y={0.8} rotate={1} color="normal"/>
						<PersonalityTag label="#Thrive on challenges" x={-15} y={2.5} rotate={6} color="light"/>
					</h1>
					<p className="md:text-center mb-8">嗨，我是 Max！<br />現職前端設計師，擁有設計及前端開發實作經驗，<span className="hidden md:block"></span>也因此擅長拆解產品需求，並在不同的角色間建立有效的溝通橋樑。<br /><br />前端經驗包含 React、Tailwind、Bootstrap、GSAP，熟悉 Git 版控，<span className="hidden md:block"></span>也在單人專案中實際使用過 Firebase 、 Node.js 以及使用 Cloud Run 部署後端。<br /><br />在現職中，我也曾處理客戶對活動網頁 JavaScript 的資安弱掃需求，<span className="hidden md:block"></span>實際與客戶端的 AI scanner 來回修正規則（被折磨過），<span className="hidden md:block"></span>也因此更理解自動化檢測對程式 pattern 的要求，<br />以及其與語言模型在理解層面的差異🤖。</p>
					<a href="#background" onClick={(e)=> {
						e.preventDefault();
						scrollToId("background");
					}}
						className="dark:bg-neon dark:text-black mx-auto block w-[180px] py-2 font-medium rounded-full whitespace-nowrap overflow-clip text-center"
					>完整介紹
					</a>
				</div>
			</section>
			<section className="py-[60px] text-white">
				<div className="container">
					<div className="mb-16 md:mb-8 flex flex-col md:flex-row items-center justify-center gap-4">
						<h2 className="text-neon text-3xl md:text-4xl font-bold text-center md:text-right md:w-[35%]">前端核心技能</h2>
						<div className="text-lg text-center md:text-left md:w-[65%]">React（Hooks / Router / Redux）&ensp;&ensp;JavaScript&ensp;&ensp;<br />API 串接（REST / OAuth 2.0）&ensp;&ensp;Axios&ensp;&ensp;Tailwind&ensp;&ensp;<span className="hidden md:block"></span>Bootstrap&ensp;&ensp;GitHub&ensp;&ensp;</div>
					</div>
					<div className="mb-16 md:mb-8 flex flex-col md:flex-row items-center justify-center gap-4">
						<h2 className="text-neon text-3xl md:text-4xl font-bold text-center md:text-right md:w-[35%]">其他輔助與平台</h2>
						<div className="text-lg text-center md:text-left md:w-[65%]">Firebase（Auth / Hosting / Firestore）<br />Cloud Run（IAM權限管理、Cloud Storage）<br />Node.js（基礎 API / service 檔）<br />GSAP / Lottie（互動動畫）<br />Basic Web Security（XSS / CSP / redirect）</div>
					</div>
					<div className="mb-16 md:mb-8 flex flex-col md:flex-row items-center justify-center gap-4">
						<h2 className="text-2xl font-medium text-center md:text-right md:w-[35%]">設計背景</h2>
						<div className="text-lg text-center md:text-left md:w-[65%]">Web / UI 設計&ensp;&ensp;視覺設計<span className="block md:hidden"></span><span className="hidden md:inline">&ensp;&ensp;</span>Motion Graphics&ensp;&ensp;影像後期</div>
					</div>
					<div className="mb-16 md:mb-8 flex flex-col md:flex-row items-center justify-center gap-4">
						<h2 className="text-2xl font-medium text-center md:text-right md:w-[35%]">工作風格與軟實力</h2>
						<div className="text-lg text-center md:text-left md:w-[65%]">流暢英語溝通&ensp;&ensp;團隊溝通能力&ensp;&ensp;注重細節<br />熟悉與客戶 / 設計師溝通<span className="hidden md:inline">&ensp;&ensp;</span><br />善於拆解與解決問題<span className="hidden md:inline">&ensp;&ensp;</span><span className="block md:hidden"></span>學習速度快&ensp;&ensp;同理心&ensp;&ensp;幽默感</div>
					</div>
				</div>
			</section>
			<section className="py-[60px] text-white">
				<h2 className="text-neon text-3xl md:text-4xl font-bold mb-4 text-center px-2">學經歷</h2>
				<div
				className="flex flex-col md:flex-row items-center md:items-start gap-10 justify-center border-b-1 py-8 bg-black">
					<div className="min-w-[320px] md:min-w-[192px] px-3 md:px-0">
						<p className="text-base mb-1">2023 May－Now</p>
						<p className="text-neon-light text-3xl font-medium mb-1">申朗創意</p>
						<p className="text-neon-light">前端設計師</p>
					</div>
					<ul className="list-disc w-[320px] md:w-[350px] px-3 md:px-0 ml-4 sm:ml-0">
						<li className="mb-2">開發公司專案管理系統，前端使用 React + Tailwind、後端使用 Express + Firebase + Cloud Run，為銀行客戶打造密碼保護及到期自動失效的網頁預覽功能</li>
						<li className="mb-2">負責銀行活動型網頁前端開發，處理 JavaScript 互動與第三方套件整合</li>
						<li className="mb-2">配合銀行客戶資安弱掃規範，修正前端程式以避免 XSS、Open Redirect 等風險</li>
						<li className="mb-2">將第三方套件（Swiper）的初始化與參數設定改寫為可控結構，降低 DOM-based injection 風險</li>
						<li className="mb-2">協助調整 Content Security Policy（CSP）與前端資源引用方式，確保通過自動化掃描</li>
						<li className="mb-2">整合 Swiper / 追蹤碼設定 等常用 JavaScript 為客製通用模組，並撰寫使用文件，使設計團隊能在不撰寫 JavaScript 的情況下直接使用互動元件。</li>
					</ul>
				</div>
				<div className="flex flex-col md:flex-row items-center md:items-start gap-10 justify-center border-b-1 py-8 bg-black">
					<div className="min-w-[320px] md:min-w-[192px] px-3 md:px-0">
						<p className="text-base mb-1">2022 Jun.－2022 Dec.</p>
						<span className="text-neon-light text-base font-medium">新加坡商</span>
						<p className="text-neon-light text-3xl font-medium mb-1">艾高科技</p>
						<p className="text-neon-light">網頁設計師暨數位內容企劃</p>
					</div>
					<ul className="list-disc w-[320px] md:w-[350px] px-3 md:px-0 ml-4 sm:ml-0">
						<li className="mb-2">產品官網設計（Figma、Wordpress）</li>
						<li className="mb-2">參與 R&D 部門 UX/UI 討論</li>
						<li className="mb-2">協助產品 UAT</li>
					</ul>
				</div>
				<div className="flex flex-col md:flex-row items-center md:items-start gap-10 justify-center border-b-1 py-8 bg-black">
					<div className="min-w-[320px] md:min-w-[192px] text-gray-300 px-3 sm:px-0">
						<p className="text-base mb-1">2018 Sep.－2022 Mar.</p>
						<p className="text-lg font-medium mb-1">LiveABC 影視製作部</p>
						<p>影像後製處理</p>
					</div>
					<div className="list-disc hidden md:block md:w-[350px] px-3 sm:px-0"></div>
				</div>
				<div className="flex flex-col md:flex-row items-center md:items-start gap-10 justify-center border-b-1 py-8 bg-black">
					<div className="min-w-[320px] md:min-w-[192px] text-gray-300 px-3 sm:px-0">
						<p className="text-base mb-1">2018 Jul.－2018 Aug.</p>
						<p className="text-lg font-medium mb-1">時間軸影像製作公司</p>
						<p>剪輯實習</p>
					</div>
					<div className="list-disc hidden md:block md:w-[350px] px-3 sm:px-0"></div>
				</div>
				<div className="flex flex-col md:flex-row items-center md:items-start gap-10 justify-center border-b-1 py-8 bg-black">
					<div className="min-w-[320px] md:min-w-[192px] text-gray-300 px-3 sm:px-0">
						<p className="text-base mb-1">2017 Jun.－2017 Oct.</p>
						<p className="text-lg font-medium mb-1">九比一線上課程</p>
						<p>影像後製處理</p>
					</div>
					<div className="list-disc hidden md:block md:w-[350px] px-3 sm:px-0"></div>
				</div>
				<div className="flex flex-col md:flex-row items-center md:items-start gap-10 justify-center border-b-1 py-8 bg-black">
					<div className="w-[320px] md:min-w-[192px] text-gray-300 px-3 sm:px-0">
						<p className="text-base mb-1">2015－2020</p>
						<p className="text-neon-light text-3xl font-medium mb-1">輔仁大學</p>
						<p>影像傳播學系／動態資訊視覺設計微學分學程</p>
					</div>
					<div className="list-disc hidden md:block md:w-[222px]"></div>
				</div>
			</section>
			<section className="py-[60px] text-gray-300">
				<div className="container" id="background">
					<h2 className="text-neon text-3xl md:text-4xl font-bold mb-4 text-center px-2">技術與背景</h2>
					<div className="flex flex-col space-y-2 mb-12">
						<p className="text-black bg-gray-300 px-2 py-0.5 mb-3 w-fit text-lg font-medium">專業定位與實務經驗</p>
						<p>現職主要負責銀行活動網頁的前端開發，長期參與金融行銷頁專案製作。擅長忠實還原設計稿件，並在設計稿不完整的情況下仍能完整考慮多裝置 RWD 的呈現。視覺呈現也曾使用 GSAP 製作動態視覺效果、使用 Lottie.js 自製 JSON 動畫，優化行銷頁面的視覺與互動體驗。</p>
						<p><span className="text-neon-light">熟悉 React、JavaScript、Vite 整合專案，並有 Bootstrap 及 Tailwind 實務運用經驗。</span>並在金融客戶高資安要求的環境下協助處理弱點掃描項目與 Content Security Policy 的設定，結合 AI 工具調整程式碼，以符合 OWASP 提出的安全風險建議。</p>	
					</div>
					<div className="flex flex-col space-y-2 mb-12">
						<p className="text-black bg-gray-300 px-2 py-0.5 mb-3 w-fit text-lg font-medium">金融專案中的資安與模組化經驗</p>
						<p>由於金融客戶對資安標準要求嚴格，曾協助修正多項弱掃項目，包括<span className="text-neon-light"> XSS 風險處理、URL 驗證、punycode </span>問題等。由於客戶使用之掃描器原型為 LLM ，推測有加上諸多限制，在掃描程式碼時對於前後邏輯的關係理解較為淺層，因此實際提交內容會包含 Over Engineered 的程式碼，才能順利過掃。從此理解到 Clean Code 與客戶的要求有時會出現矛盾，需要視情況動態調整撰寫的方式。</p>	
						<p>在過程中，我也將 Swiper、行銷追蹤碼設定、自製 Animate On Scroll 等<span className="text-neon-light">常用插件整合為通用的 JavaScript 模組，透過 data attribute 初始化元件，並撰寫完整使用文件，使設計團隊能在不撰寫 JavaScript 的情況下直接使用互動元件</span>。此做法不僅降低設計團隊的開發門檻，也完全移除 html 中的 script 以消除所有可能的資安疑慮，提升專案的一致性及安全性。</p>	
					</div>
					<div className="flex flex-col space-y-2 mb-12">
						<p className="text-black bg-gray-300 px-2 py-0.5 mb-3 w-fit text-lg font-medium">從前端延伸至系統開發的實踐</p>
						<p>由於部分客戶要求預覽專案及交付檔案時需加密，並須定期向其提交所有專案連結是否失效等統計表，我觀察到公司存在人工統計及既有預覽系統（ftp）存在流程上的痛點，因此主動提出開發內部用的預覽專案管理系統，以減少人工統計與管理預覽連結的時間成本。</p>	
						<p>該系統<span className="text-neon-light">以 Node.js 建立後端服務，除了基本的 CRUD，亦存在權限驗證機制，並處理 CORS、環境變數管理</span>等。從需求觀察、架構設計、實作到部署皆由一人完成，完整經歷產品的開發流程，也更加理解團隊中不同角色的分工與價值。</p>
						<p>此專案使我對系統設計與後端邏輯擁有更宏觀的理解與興趣，希望日後除了持續強化前端技能，也能在後端及系統設計上有更深度的學習。</p>
					</div>
					<div className="flex flex-col space-y-2 mb-12">
						<p className="text-black bg-gray-300 px-2 py-0.5 mb-3 w-fit text-lg font-medium">技術成長與持續學習</p>
						<p>過去曾參與 Vue 專案的畫面設計改版，<span className="text-neon-light">後續投入 React 框架的技術學習，並完成使用 Spotify API 與 Web Playback SDK 的音樂播放器專案，實際操作 OAuth 2.0 授權流程，Redux 狀態管理與自定義 Hook </span>等功能。</p>	
						<p>自設計背景出發，使我在開發中更重視畫面細節與使用體驗；而在解決程式問題與優化架構的過程中，逐漸確立以工程能力為核心的職涯方向。未來也計劃繼續學習 TypeScript 以及其他前端框架、了解 React 底層邏輯，及更有效的利用 AI 工具。期望未來能在成熟的工程團隊中持續累積實戰經驗，深化系統設計與前後端整合能力。</p>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
