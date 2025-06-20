import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectsCard = ({ data }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState(null); // 'video' or 'photo'

	const openModal = (type) => {
		setModalType(type);
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
		setModalType(null);
	};

	return (
		<>
			<motion.div
				whileHover={{ scale: 1.03 }}
				whileTap={{ scale: 0.98 }}
				transition={{ type: 'spring', stiffness: 300, damping: 20 }}
				className="card bg-base-100 shadow-lg rounded-2xl border border-blue-200 overflow-hidden w-full max-w-md min-h-[360px] md:min-h-[400px] flex flex-col"
			>
				{/* Card Body */}
				<div className="card-body flex flex-col flex-1 p-6 h-full min-h-[360px] md:min-h-[400px]">
					<div>
						<div className="mb-4">
							<h3 className="card-title text-blue-900">{data.name}</h3>
							<p className="text-blue-800 leading-relaxed mt-2 text-justify">{data.desc}</p>
						</div>
						<div
							className={`flex gap-2 w-full ${data.video && data.photo ? '' : 'justify-center'}`}
						>
							{data.video && (
								<button
									onClick={() => openModal('video')}
									aria-label={`Open video for ${data.name}`}
									className={`relative ${data.video && data.photo ? 'w-1/2' : 'w-full'} h-48 rounded-xl overflow-hidden border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
								>
									<video
										src={data.video}
										className="w-full h-full object-cover rounded-xl"
										muted
										loop
										playsInline
										preload="metadata"
										onClick={(e) => e.preventDefault()}
									/>
									<div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer rounded-xl">
										<span className="text-white text-lg font-semibold select-none">View Video</span>
									</div>
								</button>
							)}
							{data.photo && (
								<button
									onClick={() => openModal('photo')}
									aria-label={`Open image for ${data.name}`}
									className={`relative ${data.video && data.photo ? 'w-1/2' : 'w-full'} h-48 rounded-xl overflow-hidden border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
								>
									<Image
										src={data.photo}
										alt={data.name}
										fill
										unoptimized={false}
										loading="lazy"
										sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
										className="object-cover rounded-xl"
									/>
									<div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer rounded-xl">
										<span className="text-white text-lg font-semibold select-none">View Image</span>
									</div>
								</button>
							)}
						</div>
					</div>
					{data.link && (
						<div className="mt-auto pt-6 text-center">
							<a
								href={data.link}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-primary gap-2 w-full max-w-xs mx-auto"
								aria-label={data.linkLabel || 'View Project'}
							>
								{data.linkLabel || 'View Project'}
								<ArrowUpRight className="w-5 h-5" />
							</a>
						</div>
					)}
				</div>
			</motion.div>

			{/* Modal */}
			{isModalOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-title"
					onClick={closeModal} // clicking outside modal closes it
				>
					<div
						className="relative max-w-4xl max-h-full w-full rounded-lg overflow-hidden shadow-lg bg-white"
						onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
					>
						<button
							onClick={closeModal}
							className="absolute top-3 right-3 text-black text-3xl font-bold focus:outline-none hover:text-red-600 cursor-pointer z-50"
							style={{ zIndex: 1000 }}
							aria-label="Close media modal"
							type="button"
						>
							&times;
						</button>

						{modalType === 'video' && data.video && (
							<video src={data.video} controls autoPlay className="w-full h-auto max-h-[80vh]" />
						)}
						{modalType === 'photo' && data.photo && (
							<Image
								src={data.photo}
								alt={data.name}
								width={960}
								height={540}
								className="object-contain"
								unoptimized={false}
							/>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default ProjectsCard;
