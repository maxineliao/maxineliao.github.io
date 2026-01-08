export default function Footer() {
    return <>
        <footer className="bg-neon-light py-[80px] sm:py-[120px] lg:h-screen relative">
				<div className="container h-full flex flex-col justify-center">
					<div className="text-2xl md:text-3xl font-bold text-black flex items-end gap-2 mb-3">
						與我聯繫
						<div className="w-[20px] md:w-[24px]">
							<svg
								className="w-full"
								width="24"
								height="35"
								viewBox="0 0 24 35"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.21108 34.9534C6.83426 29.7765 8.45743 24.5965 10.1018 19.3606H0C0.0876575 19.1558 0.148115 19.0068 0.211591 18.861C2.93199 12.7126 5.65542 6.56425 8.36978 0.409684C8.5058 0.0993183 8.666 0 8.99547 0C13.8287 0.0124146 18.662 0.00931179 23.4952 0.00931179C23.6222 0.00931179 23.7521 0.00931179 23.9819 0.00931179C20.533 4.14339 17.1506 8.19367 13.7169 12.3091H24C17.7249 19.9255 11.5134 27.4643 5.30478 35C5.27456 34.9845 5.24433 34.9721 5.21108 34.9565V34.9534Z"
									fill="#202020"
								/>
							</svg>
						</div>
					</div>
					<p className="text-2xl md:text-4xl font-medium">mxnliao@gmail.com</p>
					<p className="absolute left-1/2 -translate-x-[50%] bottom-10">
						© Maxine Liao 2026
					</p>
				</div>
			</footer>
    </>
}