import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';

const TakeControlSection = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email.trim()) {
			navigate(`/signup?email=${encodeURIComponent(email.trim())}`);
		} else {
			navigate('/account-type');
		}
	};

	return (
		<section className="flex flex-col items-center bg-white w-full">
			<div className="w-full max-w-[1600px] px-6 py-12 md:px-8 md:py-16 md:max-w-[1228px] lg:px-12 lg:py-20 lg:max-w-[1600px]">

				{/* Two-col layout — stacks on mobile, row on desktop */}
				<div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

					{/* ── Left: heading + description + form ── */}
					<div className="flex flex-col gap-6 w-full lg:basis-1/2">
						{/* display-2 heading */}
						<h2 className="text-display-1 font-normal text-gray-100 m-0">
							Take control <br /> of your money
						</h2>

						<div className="flex flex-col gap-6 w-full max-w-[900px]">
							<p className="text-base leading-6 text-gray-100 m-0">
								Start your portfolio today and discover crypto
							</p>

							{/* Email form */}
							<form noValidate onSubmit={handleSubmit} className="w-full">
								<div className="flex flex-col sm:flex-row items-stretch gap-3 w-full">
									{/* Input — max 400px on sm+ */}
									<div className="w-full sm:max-w-[400px]">
										<Input
											type="email"
											size="lg"
											value={email}
											onChange={e => setEmail(e.target.value)}
											placeholder="waotabil@nopelO.com"
										/>
									</div>

									{/* Submit button — full width on mobile, auto on sm+ */}
									<div className="w-full sm:w-auto">
										<Button variant="primary" size="md" type="submit" className="w-full h-full">
											Sign up
										</Button>
									</div>
								</div>
							</form>
						</div>
					</div>

					{/* ── Right: crypto coins cluster image (1:1 aspect ratio) ── */}
					<div className="w-full lg:basis-1/2 flex items-center justify-center">
						<div className=" aspect-square">
							<picture>
								<source
									srcSet="https://images.ctfassets.net/o10es7wu5gm1/3Ib1lnukt8MvV4bDjH2jm7/00bd55a880ce264f3b77253b837760b2/image.png?fm=avif&h=3200&q=65"
									type="image/avif"
								/>
								<source
									srcSet="https://images.ctfassets.net/o10es7wu5gm1/3Ib1lnukt8MvV4bDjH2jm7/00bd55a880ce264f3b77253b837760b2/image.png?fm=webp&h=3200&q=75"
									type="image/webp"
								/>
								<img
									src="https://images.ctfassets.net/o10es7wu5gm1/3Ib1lnukt8MvV4bDjH2jm7/00bd55a880ce264f3b77253b837760b2/image.png"
									alt="Coinbase Homepage Crypto Circle"
									loading="eager"
									width="4256"
									height="3200"
									className="w-full h-full object-contain"
								/>
							</picture>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};

export default TakeControlSection;
