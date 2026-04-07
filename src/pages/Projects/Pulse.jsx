import Header from "@/components/Header"
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import projectPulse from "@/assets/images/index_project_pulse.jpg";
import imgOAuth from "@/assets/images/project_pulse_index_oauth.gif";
import imgPlayerControl from "@/assets/images/project_pulse_player_control.gif";
import imgOverall from "@/assets/images/project_pulse_overall.jpg";
import imgMarquee from "@/assets/images/project_pulse_index_marquee.gif";
export default function Pulse() {
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
                        <h1 className="mb-1">PULSE 音樂播放器 ｜<span className="block sm:hidden"></span> Side Project</h1>
                        <p className="text-white text-base font-normal">串接 Spotify API 的 Web Player，從 OAuth 2.0 驗證到播放狀態管理的完整前端實作</p>    
                    </div>
                    <img src={projectPulse} alt="" className="max-w-[500px] mx-auto mb-10 w-full"/>
                    <div className="mb-20">
                        <h2 className="text-neon-light text-xl font-semibold mb-2 text-center">專案背景</h2>
                        <p className="mb-4">PULSE 是一個串接 Spotify API 的網頁播放器，支援使用者登入、播放控制、搜尋及查看收藏歌單/藝人功能。我在這個專案中負責前端的切版、整合 API 並應用 Spotify SDK，目標是模擬實際產品的開發流程，深入了解 OAUTH、Redux 狀態管理及播放器 SDK 的運作。並且在與他人合作時，更加熟悉分支整合、解決衝突。</p>
                        <p className="mb-4">之所以選擇播放器主題，一方面是因為音樂在我的生活中佔據非常重要的一部分，另一方面也希望能夠從富有挑戰性的題材中快速強化自身對 API 串接以及 React 應用的理解。</p>
                    </div>
                    <div className="mb-20">
                        <h2 className="text-neon-light text-xl font-semibold mb-4 text-center">使用技術</h2>
                        <div className="max-w-[300px] mx-auto">
                            <div className="mb-2 flex items-baseline"><span className="text-black bg-neon-light font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">前端技術</span>React、Bootstrap</div>
                            <div className="mb-2 flex items-baseline"><span className="text-black bg-neon-light font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">動畫</span>GSAP</div>
                            <div className="mb-2 flex items-baseline"><span className="text-black bg-neon font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">後端</span>Spotify API、Spotify SDK</div>
                        </div>
                        <img src="" alt="" />
                    </div>
                    <div className="mb-20">
                        <h2 className="text-neon-light text-xl font-semibold mb-4 text-center">我的角色與實作內容</h2>
                        <p className="mb-4">專案開發之初，我與合作的夥伴共同撰寫使用者故事、繪製流程圖，後需要繪製 Wireframe 提供給合作的設計師製作 UI 設計稿。因為我具有設計背景，主要是由我繪製 Wireframe 並與設計窗口溝通。</p>
                        <div className="mb-4">在切畫面時，我也善於提出意見，對於設計稿與成品的相似精確度較有要求，希望能夠把關畫面品質。</div>
                        <div className="mb-4">開發功能時期，我花費了不少心思在研究 Spotify API 及 SDK ，將其整合成自訂 Hook，方便在功能重複性非常高的播放器中使用，並使用 Redux 管理全域狀態。</div>
                    </div>
                </div>
            </div>
        </section>    
        <section>    
            <div className="mb-20 text-white">
                <h2 className="text-neon-light text-xl font-semibold mb-4 text-center">開發挑戰 / 技術亮點</h2>
                <div className="border-b-1 border-t-1 border-neon py-8">
                    <div className="max-w-[740px] mx-auto px-2">
                        <h3 className="text-center text-white text-lg font-medium mb-2">① Web Playback SDK 的初始化與跨頁架構重構</h3>
                        <div>
                              <div className="mb-2 flex items-baseline">
                                <span className="text-black bg-white font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">挑戰</span>
                                <div>
                                    <p className="mb-2">Spotify Web Playback SDK 必須在使用者互動後才能初始化，且同一時間僅能存在單一實例。在 React Router 的多頁架構下，專案初期出現以下問題：</p>
                                    <ul>
                                        <li className="flex items-center gap-2 mb-2">
                                        <div>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                                </svg>
                                            </div>
                                            <span>換頁後播放器失效、播放狀態無法更新</span>
                                        </li>
                                        <li className="flex items-center gap-2 mb-2">
                                            <div>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                                </svg>
                                            </div>
                                            <span>UI 按鈕無反應，<code> player_state_changed </code>事件未正常回傳</span>
                                        </li>
                                         <li className="flex items-center gap-2 mb-2">
                                            <div>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                                </svg>
                                            </div>
                                            <span>播放器實例隨元件卸載而被銷毀，跨頁狀態無法維持</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-4 flex items-baseline">
                                <span className="text-black bg-neon-light font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">解法</span>
                                <div>
                                    <p className="mb-2">將 SDK 初始化與事件監聽邏輯自 UI 元件中抽離，重新設計播放器架構：</p>
                                    <ul className="mb-2">
                                        <li className="flex items-center gap-2 mb-2">
                                            <div>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                                </svg>
                                            </div>
                                            <span>建立全站唯一的 GlobalPlayerManager，集中管理 SDK 初始化與事件註冊</span>
                                        </li>
                                        <li className="flex items-center gap-2 mb-2">
                                            <div>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                                </svg>
                                            </div>
                                            <span>確保 Web Playback SDK 僅被初始化一次，避免重複實例</span>
                                        </li>
                                        <li className="flex items-center gap-2 mb-2">
                                            <div>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                                </svg>
                                            </div>
                                            <span>將播放狀態儲存在 Redux，提供跨頁一致的播放資訊</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                                </svg>
                                            </div>
                                            <span>讓播放器實例不受 React Router 換頁影響，維持穩定運作</span>
                                        </li>
                                    </ul>
                                    <p>此重構讓播放器架構更穩定，事件回傳正常，UI 與播放狀態能在跨頁情境下保持同步。</p>
                                    <div className="relative py-[40px]"><img src={imgPlayerControl} alt="" className="w-full" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b-1 border-neon py-8">
                    <div className="max-w-[740px] mx-auto px-2">
                        <h3 className="text-center text-white text-lg font-medium mb-2">② OAuth 2.0 + PKCE Flow</h3>
                        <div>
                            <div className="mb-2 flex items-baseline">
                                <span className="text-black bg-white font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">挑戰</span>
                                <p>在純前端應用中整合 Spotify API 時，需遵循官方建議，使用 OAuth 2.0 + PKCE Flow 以避免在前端暴露 client secret。同時，登入流程涉及 redirect 與 token 管理，需確保在多頁架構下狀態一致，並避免 token 過期導致功能中斷。</p>
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-black bg-neon-light font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">解法</span>
                                <div>
                                    <p className="mb-2">依照官方建議採用 PKCE Flow，並進一步針對前端實務進行架構整理：</p>
                                    <ul>
                                        <li className="flex items-center gap-2 mb-2">
                                        <div>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                                </svg>
                                            </div>
                                            <span>使用 PKCE 完成安全授權流程</span>
                                        </li>
                                        <li className="flex items-center gap-2 mb-2">
                                            <div>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                                </svg>
                                            </div>
                                            <span>將 token 交換、refresh 與登入狀態封裝為自製 React Hook</span>
                                        </li>
                                        <li className="flex items-center gap-2 mb-2">
                                            <div>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                                </svg>
                                            </div>
                                            <span>透過 Redux 管理 Access Token 與 Refresh Token，提供跨頁一致的授權狀態</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                                </svg>
                                            </div>
                                            <span>主動處理 redirect 後的 URL 清理與 token 更新時機，確保 API 與播放器穩定運作</span>
                                        </li>
                                    </ul>
                                    <div className="relative py-[40px]">
                                        <img src={imgOAuth} alt="" className="w-full"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b-1 border-neon py-8">
                    <div className="max-w-[740px] mx-auto px-2">
                        <h3 className="text-center text-white text-lg font-medium mb-2">③ 將複雜播放器功能封裝成 Custom Hook</h3>
                        <div>
                            <div className="mb-2 flex items-baseline">
                                <span className="text-black bg-white font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">挑戰</span>
                                <p>Spotify 提供的 API 非常多，加上 SDK 也有一套功能，使用複雜且有眾多重複的程式碼</p>
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-black bg-neon-light font-medium px-2 py-1 rounded-full mr-2 block w-fit mb-2 whitespace-nowrap">解法</span>
                                <div>
                                    <p className="mb-2">將常用功能抽成 Hook，例如：</p>
                                    <ul>
                                        <li className="flex items-center gap-2 mb-2">
                                        <div>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                                </svg>
                                            </div>
                                            <code>useSpotifyPlayer</code>
                                        </li>
                                        <li className="flex items-center gap-2 mb-2">
                                            <div>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.48954 0L10.1768 5.0229L15 7.00281L9.05544 8.9771L5.51042 14L4.82315 8.9771L0 7.00281L5.94452 5.0229L9.48954 0Z" fill="#BFFF00"/>
                                                </svg>
                                            </div>
                                            <code>useSpotifyAuth</code>
                                        </li>
                                    </ul>
                                    <p>大幅減少重複程式碼，並提升維護性。</p>
                                </div>
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
                        <p className="mb-4">作為我初次使用 React 框架開發的專案，這個題材讓我對前端的資料串接與狀態管理的理解有非常深刻的影響。</p>
                        <p className="mb-4">在教科書上或各種教學中，API 串接似乎只是選對 URL、設定好 method 就能拿到資料；但實際操作 Spotify API 後，我深刻體會到大型、受限嚴格的 API 會帶來什麼樣的挑戰與學習曲線。</p>
                        <p className="mb-4">Spotify 作為一個安全性高、資料結構複雜的服務平台，從登入驗證、token 交換，到播放器狀態的更新，每一步都需要思考「<b>什麼時候該抓資料、該更新哪個狀態」</b>。</p>
                        <p>這些過程讓我對「狀態一致性」、「API hook 的封裝」、「登入流程中的安全驗證邏輯」有了實戰經驗，也強化了我面對複雜 API 架構設計時的信心與思維方式。</p>
                    </div>
                </div>       
            </section>
            <section className="pb-20 px-2">
                <div className="max-w-[1200px] mx-auto text-white mb-16">
                    <h2 className="text-neon-light text-xl font-semibold mb-8 text-center">畫面展示</h2>
                    <p className="py-4 text-center">播放器官網首頁</p>
                    <img className="drop-shadow-[-10px_10px_0] drop-shadow-neon-light border-1 border-neon-light" src={imgOverall} alt="首頁一覽"/>
                </div> 
                <div className="max-w-[740px] mx-auto text-white">
                    <img className="drop-shadow-[-6px_6px_0] drop-shadow-neon-light border-1 border-neon-light" src={imgMarquee} alt="首頁Marquee"/>
                </div>
            </section>
        <Footer />
    </>
    )
}