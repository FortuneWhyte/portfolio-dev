import { marqueeWord } from "../content";

// Duplicated because the keyframe translates -50%: the second half slides in
// as the first leaves, so the loop has no visible seam.
export default function Marquee() {
    return (
        <div className="marquee" aria-hidden="true">
            <div className="marquee-content">
                {Array.from({ length: 8 }, (_, i) => (
                    <span key={i}>{marqueeWord}</span>
                ))}
            </div>
        </div>
    );
}
