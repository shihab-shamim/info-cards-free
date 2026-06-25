const SkeletonCard = () => <div className="icbnc-skeleton-card">
	<div className="icbnc-skeleton-image icbnc-skeleton-pulse"></div>
	<div className="icbnc-skeleton-content">
		<div className="icbnc-skeleton-line icbnc-skeleton-pulse" style={{ width: '40%', height: '12px' }}></div>
		<div className="icbnc-skeleton-line icbnc-skeleton-pulse" style={{ width: '90%', height: '18px', marginTop: '10px' }}></div>
		<div className="icbnc-skeleton-line icbnc-skeleton-pulse" style={{ width: '100%', height: '12px', marginTop: '12px' }}></div>
		<div className="icbnc-skeleton-line icbnc-skeleton-pulse" style={{ width: '80%', height: '12px', marginTop: '6px' }}></div>
		<div className="icbnc-skeleton-line icbnc-skeleton-pulse" style={{ width: '30%', height: '14px', marginTop: '16px' }}></div>
	</div>
</div>

const LoadingSkeleton = ({ attributes }) => {
	const { styles = {} } = attributes;
	const colD = styles?.columns?.desktop || 3;
	const colT = styles?.columns?.tablet || 2;
	const colM = styles?.columns?.mobile || 1;
	const numCards = attributes?.postsPerPage || 6;

	return <div className="icbnc-loading-skeleton">
		<style dangerouslySetInnerHTML={{ __html: `
			.icbnc-loading-skeleton {
				display: grid;
				grid-template-columns: repeat(${colD}, 1fr);
				gap: ${styles?.columnGap?.desktop || 50}px;
				row-gap: ${styles?.rowGap?.desktop || 50}px;
			}
			.icbnc-skeleton-card {
				border-radius: 4px;
				overflow: hidden;
				background: #f0f0f0;
				min-height: 400px;
			}
			.icbnc-skeleton-image {
				width: 100%;
				height: 200px;
				background: #ddd;
			}
			.icbnc-skeleton-content {
				padding: 16px;
			}
			.icbnc-skeleton-line {
				border-radius: 4px;
				background: #ddd;
			}
			@keyframes icbnc-pulse {
				0% { opacity: 1; }
				50% { opacity: 0.4; }
				100% { opacity: 1; }
			}
			.icbnc-skeleton-pulse {
				animation: icbnc-pulse 1.5s ease-in-out infinite;
			}
			@media (max-width: 1024px) {
				.icbnc-loading-skeleton {
					grid-template-columns: repeat(${colT}, 1fr);
					gap: ${styles?.columnGap?.tablet || 30}px;
				}
			}
			@media (max-width: 767px) {
				.icbnc-loading-skeleton {
					grid-template-columns: repeat(${colM}, 1fr);
					gap: ${styles?.columnGap?.mobile || 20}px;
				}
			}
		` }} />

		{Array.from({ length: Math.max(1, numCards) }).map((_, i) => <SkeletonCard key={i} />)}
	</div>
}

export default LoadingSkeleton;
