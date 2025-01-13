import './SkeletonLoader.css';

export default function SkeletonLoader() {
    return <div className="skeleton-loader">
        <div className="skeleton-thumbnail"></div>
        <div className="skeleton-content">
            <div className="skeleton-chimage"></div>
            <div className="skeleton-text">
                <div className="skeleton-title"></div>
                <div className="skeleton-subtitle"></div>
            </div>
        </div>
    </div>
}