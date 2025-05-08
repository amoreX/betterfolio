import Playlist from './RightSection/Playlist';
import Socials from './RightSection/Socials';

export default function RightSection() {
    return (
        <div className="flex flex-col md:w-[25%] w-full gap-4">
            <Playlist />
            <Socials />
        </div>
    )
}
