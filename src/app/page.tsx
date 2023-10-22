import Image from "next/image";
import Button from "./_components/button/Button";

export default function Home() {
	return (
		<>
			<section className="bg-hero-pattern bg-no-repeat bg-center mt-5 xl:mt-20 xl:bg-left">
				<div className="container flex flex-col-reverse items-center xl:flex-row">
					<div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
						<h3 className=" text-xl dark:text-info xl:text-2xl">
							خوش اومدی به...
						</h3>
						<h1 className="text-3xl font-black gradient lg:text-5xl ">
							مسیر صعود به قله های برنامه نویسی
						</h1>
						<p className="">
							هر جای مسیر برنامه‌نویسی که باشی، با همراهی استاد
							های باتجربه کلاسبن میتونی بدون محدودیت به قله های
							بالاتر صعود کنی. ما همیشه هواتو داریم.
						</p>
						<div className="mt-5 flex gap-4 mb-3">
							<Button variant="primary" size="large">
								دوره های ریکت و نکست
							</Button>
							<Button variant="neutral" size="large">
								مشاوره برنامه‌نویسی
							</Button>
						</div>
						<Image
							className="grayscale mt-4 opacity-70 m-auto xl:m-0"
							src="/images/frameworks.png"
							height={39}
							width={412}
							alt=""
						/>
					</div>

					<Image
						className=""
						src="/images/programmer-landing.svg"
						height={521}
						width={702}
						alt="calssbon"
					/>
				</div>
			</section>
		</>
	);
}
