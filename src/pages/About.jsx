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
					<p className="md:text-center mb-8">嗨，我是 Max！<br />現職網頁開發設計師，目標是結合既有的設計美感，<span className="hidden md:block"></span>成為同時具備視覺與工程能力的前端工程師。<br /><br />前端方面曾實作 React、Tailwind、Bootstrap、GSAP，熟悉 Git 版控，<span className="hidden md:block"></span>也在個人專案中實際使用過 Firebase 與 Node.js。<br /><br />在現職中，我也曾處理客戶對活動網頁 JavaScript 的資安弱掃需求，<span className="hidden md:block"></span>實際與客戶端的 AI scanner 來回修正規則（被折磨過），<span className="hidden md:block"></span>也因此更理解自動化檢測對程式 pattern 的要求，<br />以及其與語言模型在理解層面的差異🤖。</p>
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
						<div className="text-lg text-center md:text-left md:w-[65%]">Firebase（Auth / Hosting / Firestore）<br />Node.js（基礎 API / 工具）<br />GSAP / Lottie（互動動畫）<br />Web Security（XSS / CSP / redirect）</div>
					</div>
					<div className="mb-16 md:mb-8 flex flex-col md:flex-row items-center justify-center gap-4">
						<h2 className="text-2xl font-medium text-center md:text-right md:w-[35%]">設計背景</h2>
						<div className="text-lg text-center md:text-left md:w-[65%]">Web / UI 設計&ensp;&ensp;視覺設計<span className="block md:hidden"></span><span className="hidden md:inline">&ensp;&ensp;</span>Motion Graphics&ensp;&ensp;影像後期</div>
					</div>
					<div className="mb-16 md:mb-8 flex flex-col md:flex-row items-center justify-center gap-4">
						<h2 className="text-2xl font-medium text-center md:text-right md:w-[35%]">工作風格與軟實力</h2>
						<div className="text-lg text-center md:text-left md:w-[65%]">團隊溝通能力&ensp;&ensp;注重細節<span className="hidden md:inline">&ensp;&ensp;</span><span className="block md:hidden"></span>熟悉與客戶 / 設計師溝通<span className="hidden md:inline">&ensp;&ensp;</span><br />善於拆解與解決問題<span className="hidden md:inline">&ensp;&ensp;</span><span className="block md:hidden"></span>學習速度快&ensp;&ensp;流暢英語溝通&ensp;&ensp;同理心&ensp;&ensp;幽默感</div>
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
						<p className="text-neon-light">網頁開發設計師</p>
					</div>
					<ul className="list-disc w-[320px] md:w-[350px] px-3 md:px-0 ml-4 sm:ml-0">
						<li>負責銀行活動型網頁前端開發，處理 JavaScript 互動與第三方套件整合</li>
						<li>配合銀行客戶資安弱掃規範，修正前端程式以避免 XSS、Open Redirect 等風險</li>
						<li>將第三方套件（Swiper）的初始化與參數設定改寫為可控結構，降低 DOM-based injection 風險</li>
						<li>協助調整 Content Security Policy（CSP）與前端資源引用方式，確保通過自動化掃描</li>
						<li>整合 Swiper / 追蹤碼設定 / 免責申明跳窗為客製通用 JS，並撰寫使用文件</li>
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
						<li>產品官網設計（Figma、Wordpress）</li>
						<li>參與 R&D 部門 UX/UI 討論</li>
						<li>協助產品 UAT</li>
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
						<p className="text-black bg-gray-300 px-2 py-0.5 mb-3 w-fit text-lg font-medium">從設計師身份到前端的轉變</p>
						<p >過去從影像剪輯、動畫到網頁設計，我不停的探索自己想要的方向。利用時間學習 UIUX、切版、開發 React 專案、串 API、Git 協作等，對於技術的焦慮及對學習的渴望帶領著我，不斷擴大自己的技能樹。</p>
						<p>工作上，我曾經在軟體新創的行銷部門製作 SASS 產品的形象網站，也協助 RD 部門進行產品 UAT 測試，可以說是我進入相關領域的起點。</p>	
						<p className="mb-10">在現職中，我將所學的前端技能運用在各類銀行活動頁專案中，包含以 GSAP 製作動態視覺、使用 Lottie.js 放入自行製作的 JSON 動畫，以提升行銷頁的互動與品質。</p>	
						<p className="mb-10"><span className="text-neon-dark font-medium text-medium block mb-1">金融專案經驗｜資安與弱掃處理</span>由於金融客戶對資安要求嚴格，我也協助處理多項弱掃項目，例如<span className="text-blue-200">修正 XSS、punycode、URL 驗證</span>等問題，並與客戶端溝通 Content Security Policy 的設定需求，確保活動頁能順利過審。在此過程中，我將 Slick、Swiper、GSAP 等常用插件整合為一支可安全嵌入的通用 JS，並撰寫完整使用文件，讓團隊可透過 data attribute 即可初始化元件，降低開發門檻並避免資安誤判。同時也讓整體專案流程更一致、更易於維護。</p>	
						<p><span className="text-neon-dark font-medium text-medium block mb-1">目標的確立</span>在這個充滿突發任務的路上，我發現比起設計畫面、視覺，在面臨及解決程式碼問題時更能令我獲得成就感，也較能激發我的熱忱，使我對未來的方向更加明確。</p>
						<p>一直以來都覺得自己有能力做到更多，軟體工程讓我看到「學習」的無限可能，而我希望透過不斷精進技術，讓自己的能力與成就感都能正向循環。</p>
					</div>
					<div className="flex flex-col space-y-2 mb-8">
						<p className="text-black bg-gray-300 px-2 py-0.5 mb-3 w-fit text-lg font-medium">從自學到實踐</p>
						<p className="mb-10"><span className="text-neon-dark font-medium text-medium block mb-1">2023 －Vue 銷售後台管理</span>2023 年，我有幸得到了一個參與 Vue 全端專案的機會，協助優化介面的設計及版型，是我第一次接觸前端框架。但也是因為首次接觸，閱讀及理解對我來說是非常大的考驗。下班之餘，我經常研究程式碼到忘記時間的流逝，卻感覺效果不如預期。這一經驗促使我尋找更有系統性的學習路徑，也在協作中習得了<span className="text-blue-200"> Git 的基礎操作、rebase、整理 commit </span>等。</p>	
						<p className="mb-10"><span className="text-neon-dark font-medium text-medium block mb-1">2024－React 音樂播放器 × Spotify API</span>2024 年，報名了一門教授 React 基礎及製作 Side Project 的課程。5 個月的時間裡，除了學習基礎使用，基於我對音樂的熱愛，我與夥伴選擇了音樂播放器為主題，使用 Spotify API 及 SDK 製作了一個官網及網頁播放器。其複雜度不如預想中單純，卻也讓我接觸了<span className="text-blue-200"> OAUTH 2.0、redux、自定 Hook </span>等擴充知識。</p>	
						<p><span className="text-neon-dark font-medium text-medium block mb-1">2025－接觸後端</span>因公司主要業務來自於金融業，對於資安有一定的要求標準。其中最基本的就是活動網頁的預覽需要經過加密。隨著資安的要求愈來愈高，我們也多了許多需要人工統計的資料需要交付，這點成為我開發專案預覽系統的契機。</p>
						<p>在粗略評估可行性後，我向老闆提出使用私人時間製作此系統的想法，除了希望讓公司的工作流程更加順暢，也藉此機會學習<span className="text-blue-200">使用 node.js 建立後端資料、前後端部署、CORS </span>等做純前端專案時比較少接觸到的範疇。</p>
						<p>過程中我也經歷了一個產品從前期觀察、提出問題、思考解決方案，到開始實際執行的完整過程，在一人專案中發現一個產品開發團隊中每個角色的重要性，也使我對這樣的團隊與環境更加嚮往。</p>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
