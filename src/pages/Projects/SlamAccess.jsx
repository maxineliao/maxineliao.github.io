import Header from "@/components/Header"
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
export default function SlamAccess() {
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
    return (<>
        <Header mode={mode} setMode={setMode} />
        {/* <section className="hero w-full h-[300px] bg-cover bg-right background-position: <value>;" style={{"backgroundImage": `url(${projectSlam})`}}>
            
        </section> */}
        <section>
            <div className="container">
                <div className="max-w-[740px] mx-auto text-white">
                    <div className="text-neon text-2xl font-semibold text-center py-16">
                        <h1 className="mb-1">Slam 專案預覽管理系統｜<span className="block sm:hidden"></span>公司內部工具開發</h1>
                        <p className="text-white text-base font-normal">公司內部專案預覽管理系統，著重資安與流程設計</p>    
                    </div>
                    <div className="mb-20">
                        <h2 className="text-neon-light text-xl font-semibold mb-2 text-center">專案背景</h2>
                        <p className="mb-4">在申朗創意擔任設計兼前端的期間，我觀察到團隊在交付銀行客戶預覽案件時，長期依賴 FTP 與手動作業，不僅流程繁瑣，也常因安全性不足（http://）而遇到瀏覽器阻擋、Google 誤判惡意網頁等問題。除此之外，像是需要定期手動清檔、交付檔案時壓縮檔密碼難以管理、總覽頁難以快速查找專案等問題，也讓團隊效率受限。</p>
                        <p className="mb-2">基於這些痛點，我主動提出以 React + Firebase + Node.js 重新打造一套專案預覽管理系統的構想，並利用私人時間進行開發。這個系統能夠提供：</p>
                        <ul className="list-disc list-inside leading-8 mb-4">
                            <li>使用者登入驗證與身份記錄</li>
                            <li>自動加密預覽連結與設定到期日</li>
                            <li>預覽與下載分離、獨立密碼保護</li>
                            <li>可依客戶分類檢視、快速查找歷史專案</li>
                            <li>設定日期區間以匯出專案停用狀態</li>
                        </ul>
                        <p className="mb-4">這不僅是我初次實戰後端架構與 Firestore 資料權限控管的專案，也是我首次從問題觀察 → 架構設計 → UI / UX → 實作 → 上線交付，全程獨立完成的完整開發流程。</p>
                    </div>
                    <div className="mb-20">
                        <h2 className="text-neon-light text-xl font-semibold mb-4 text-center">使用技術</h2>
                        <div className="mb-2 flex items-baseline"><span className="text-black bg-neon-light font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">前端技術</span>使用 React 負責頁面切換與資料渲染，Tailwind CSS 進行排版與響應式設計</div>
                        <div className="mb-2 flex items-baseline"><span className="text-black bg-neon-light font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">後端技術</span>使用 Firebase Hosting 作為預覽頁部署空間，Firestore 儲存專案資料與到期時間設定，Cloud Functions 搭配 Node.js 負責自動部署與壓縮處理邏輯</div>
                        <div className="mb-2 flex items-baseline"><span className="text-black bg-neon font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">額外技術</span>使用 Firebase Auth 處理登入狀態、X-Robots-Tag 阻擋搜尋引擎爬蟲等安全性強化手段</div>
                    </div>
                    <div className="mb-20">
                        <h2 className="text-neon-light text-xl font-semibold mb-4 text-center">我的角色與實作內容</h2>
                        <p className="mb-4">我在此專案中負責完整系統的設計與開發，包括 UI 設計、React 元件架構規劃、Firebase 資料結構設計、後端串接邏輯（Cloud Functions）、密碼加密、cookie 登入狀態紀錄、專案自動部署與下載邏輯。</p>
                        <div className="mb-4">除了技術開發外，我也需與設計背景的老闆進行需求釐清與功能驗證。由於對方不熟技術細節，溝通時必須避開專有名詞，轉以「流程優化」與「減少手動操作」的角度進行溝通，讓他能理解此系統的實際價值與使用方式。</div>
                        <div className="mb-4">這是我首次從 0 到 1 完成前後端整合型專案，過程中也學會如何將真實需求轉換為具體功能、使用 AI 工具快速找到開發方向與解法，並兼顧操作便利與安全性考量。</div>
                    </div>
                </div>
            </div>
        </section>    
        <section>    
            <div className="mb-20 text-white">
                <h2 className="text-neon-light text-xl font-semibold mb-4 text-center">開發挑戰 / 技術亮點</h2>
                <div className="border-b-1 border-t-1 border-neon py-8">
                    <div className="max-w-[740px] mx-auto px-2">
                        <h3 className="text-center text-white text-lg font-medium mb-2">① 撰寫登入驗證機制（Firebase Auth + Cookie 記憶狀態）</h3>
                        <div>
                            <div className="mb-2 flex items-baseline">
                                <span className="text-black bg-white font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">挑戰</span>
                                <p>希望讓內部人員只輸入一次密碼即可記住登入狀態，但又不能影響安全性</p>
                            </div>
                            <div className="mb-4 flex items-baseline">
                                <span className="text-black bg-neon-light font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">解法</span>
                                <ul>
                                    <li className="flex items-center gap-2 mb-2">
                                    <div>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                            </svg>
                                        </div>
                                        <span>使用 Firebase Auth 實作帳密登入機制</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                            </svg>
                                        </div>
                                        <span>登入後根據 role 顯示不同功能（admin 才有權限修改設定）</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="border-1 border-neon-light p-6 rounded-2xl mb-8">
                                <p className="text-neon-light text-center mb-2">登入驗證設計與權限控管（Firebase Auth + Token-Based Access）</p>
                                <p className="mb-4">系統使用 Firebase Authentication 管理使用者登入狀態。登入成功後，Firebase 會提供一組 JWT token，我在前端透過 onAuthStateChanged 與 onIdTokenChanged 兩層監聽，即時同步更新 Redux 中的使用者資料與 token。這能確保 App 在啟動時便能得知「使用者是否登入」、「token 是否仍有效」，避免畫面閃爍與權限錯誤。</p>
                                <p>— 在存取網頁預覽頁面時 —</p>
                                <ul className="mb-4">
                                    <li className="mb-2"><span className="text-neon-light">已登入的內部團隊成員</span>：前端會自動夾帶 Firebase token，因此可直接取得預覽網址，不需要再次輸入預覽密碼。</li>
                                    <li><span className="text-neon-light">未登入的外部使用者</span>：後端會回傳 401，前端則自動切換至「密碼輸入頁」。密碼驗證成功後才會取得預覽內容。</li>
                                </ul>
                                <p className="mb-4">此流程讓<b>內部使用者不需反覆輸入密碼</b>，但外部使用者仍受控於密碼保護。</p>
                                <p>整體設計簡化內部作業流程並兼具銀行客戶要求的安全性，提升公司內部使用體驗。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b-1 border-neon py-8">
                    <div className="max-w-[740px] mx-auto px-2">
                        <h3 className="text-center text-white text-lg font-medium mb-2">② 加密連結 + 密碼保護（Preview / Download 分開控管）</h3>
                        <div>
                            <div className="mb-2 flex items-baseline">
                                <span className="text-black bg-white font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">挑戰</span>
                                <p>舊流程中交付檔案直接提供 ftp link，無密碼保護，使用壓縮檔加密文件又難以管理。</p>
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-black bg-neon-light font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">解法</span>
                                <ul>
                                    <li className="flex items-center gap-2 mb-2">
                                    <div>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                            </svg>
                                        </div>
                                        <span>Admin帳號可設定全域「預覽密碼」與「下載密碼」，儲存在 Firestore 並與專案綁定</span>
                                    </li>
                                    <li className="flex items-center gap-2 mb-2">
                                        <div>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                            </svg>
                                        </div>
                                        <span>使用者訪問連結需輸入密碼，前端將密碼與 Firestore 進行比對</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                            </svg>
                                        </div>
                                        <span>預覽與下載的連結完全獨立，分開管理</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b-1 border-neon py-8">
                    <div className="max-w-[740px] mx-auto px-2">
                        <h3 className="text-center text-white text-lg font-medium mb-2">③ 預覽連結自動失效 + 狀態切換</h3>
                        <div>
                            <div className="mb-2 flex items-baseline">
                                <span className="text-black bg-white font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">挑戰</span>
                                <p>舊流程需人工搬移過期檔案、改路徑，非常花時間</p>
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-black bg-neon-light font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">解法</span>
                                <ul>
                                    <li className="flex items-center gap-2 mb-2">
                                    <div>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                            </svg>
                                        </div>
                                        <span>每個專案可設定「到期日」</span>
                                    </li>
                                    <li className="flex items-center gap-2 mb-2">
                                        <div>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                            </svg>
                                        </div>
                                        <span>透過 Firebase Cloud Functions 設計到期檢查機制，專案狀態會依「到期日」自動判定為停用，避免人工維護。</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                            </svg>
                                        </div>
                                        <span>狀態變更後連結將被封鎖</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b-1 border-neon py-8">
                    <div className="max-w-[740px] mx-auto px-2">
                        <h3 className="text-center text-white text-lg font-medium mb-2">④ 自動部署 preview 資料夾</h3>
                        <div>
                            <div className="mb-2 flex items-baseline">
                                <span className="text-black bg-white font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">挑戰</span>
                                <p>設計師需上傳壓縮檔至 ftp，無系統化管理，效率低且易出錯</p>
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-black bg-neon-light font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">解法</span>
                                <ul>
                                    <li className="flex items-center gap-2 mb-2">
                                    <div>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                            </svg>
                                        </div>
                                        <span>上傳後自動部署到 Firebase Hosting，並生成唯一的預覽網址</span>
                                    </li>
                                    <li className="flex items-center gap-2 mb-2">
                                        <div>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                            </svg>
                                        </div>
                                        <span>部署後自動記錄 Firebase URL 與密碼，減少人工輸入</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                            </svg>
                                        </div>
                                        <span>上傳前自動在 html 檔注入 JS 丟出網頁 Title、Description 等，並顯示於預覽頁面，方便客戶確認（To Do）</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b-1 border-neon py-8">
                    <div className="max-w-[740px] mx-auto px-2">
                        <h3 className="text-center text-white text-lg font-medium mb-2">⑤ 專案管理功能：分類、篩選、匯出報表</h3>
                        <div>
                            <div className="mb-2 flex items-baseline">
                                <span className="text-black bg-white font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">挑戰</span>
                                <p>客戶要求每月提交預覽頁面啟用與否的總表，人工紀錄費時費力且易出錯</p>
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-black bg-neon-light font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">解法</span>
                                <ul>
                                    <li className="flex items-center gap-2 mb-2">
                                    <div>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                            </svg>
                                        </div>
                                        <span>使用 Firestore 撰寫過濾條件，可依「客戶」「狀態」「到期日」快速搜尋（To Do）</span>
                                    </li>
                                    <li className="flex items-center gap-2 mb-2">
                                        <div>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                            </svg>
                                        </div>
                                        <span>建立報表功能，可依區間匯出停用專案清單，便於交付連結狀態給重視安全問題的客戶確認，以及後續清檔或下載（To Do）</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className="pb-20">
                <div className="container">
                    <div className="max-w-[740px] mx-auto text-white">
                        <h2 className="text-neon-light text-xl font-semibold mb-4 text-center">回顧</h2>
                        <p className="mb-4">在這個專案中，我第一次真正完整地接觸到後端資料結構、部署流程與 Node.js 的實務運作，也是在這個階段，我開始理解「一個產品從需求到上線」所需的完整流程。原本以為幾個 Node.js 教學就能完成，但實際開發時才發現系統邏輯、狀態同步、權限驗證都比想像中複雜，也因此讓我成長最多。</p>
                        <p className="mb-4">專案中我大量使用 AI 來加速開發，但並非單純複製貼上，而是透過閱讀、調整與理解 AI 的產出，學習如何建立 axios 攔截器、運用 AbortController 防止 unmounted setState、以及如何使用 Firebase Admin 簡化權限驗證邏輯。這些都讓我在實作中累積起對「為什麼要這麼寫」的真正理解。</p>
                        <p>隨著 AI 時代的來臨，我期望自己能具備跨前後端的基礎能力，理解系統架構與資料流，而不是只停留在切版或 UI 邏輯。我相信只要妥善運用，AI 能成為學習的加速器。當知識能夠快速累積，理解得愈多，就愈能對自己交付的程式碼負起更大的責任，也能在未來的工程角色中創造更多價值。</p>
                    </div> 
                </div>       
            </section>
        <Footer />
    </>
    )
}