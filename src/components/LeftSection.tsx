import Headline from './LeftSection/Headline';
import ImageSection from './LeftSection/ImageSection';
import Bio from './LeftSection/Bio';
import Contact from './LeftSection/Contact';

export default function LeftSection() {
    return (
        <div className="flex-1 flex flex-col gap-4 max-h-[calc(100vh-4rem)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                <Headline />
                <ImageSection />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                <Bio />
                <Contact />
            </div>
        </div>
    );
}
