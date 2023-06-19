import Sidebar from "./sidebar";
import Footer from "./footer";

interface Props {
	type: string;
	tid: string;
	children: React.ReactNode;
}

export default function Framer({ type, tid, children }: Props) {
	return (
		<div id="framer" className="mt-16 expanded">
			<Sidebar
				type={ type }
				tid={ tid }
			/>
			<div id="container" className={ `flex flex-col ml-auto` }>
				<div className=""></div>
				<main className="flex py-8 mb-6 min-h-[450px]">
					<div className="w-[90%] max-w-6xl mx-auto">{ children }</div>
				</main>
				<Footer />
			</div>
		</div>
	);
}
