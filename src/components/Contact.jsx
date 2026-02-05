import { SendHorizontal, Linkedin, Twitter, ChevronRight, Mail, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import blackhole from '../assets/blackhole.png';

export const Contact = () => {
    // Data object for contact methods
    const contactMethods = [
        {
            id: 1,
            icon: Mail,
            title: 'Email',
            subtitle: 'Drop me a message',
            value: 'ansarihusain771@gmail.com',
            link: 'mailto:ansarihusain771@gmail.com',
        },
        {
            id: 2,
            icon: Linkedin,
            title: 'LinkedIn',
            subtitle: 'Let\'s connect professionally',
            value: 'Husain Ansari',
            link: 'https://www.linkedin.com/in/husainansari/',
        },
        {
            id: 3,
            icon: Twitter,
            title: 'Twitter',
            subtitle: 'Follow for updates',
            value: '@hus7ain_',
            link: 'https://twitter.com/hus7ain_',
        }
    ];

    // Data object for the user profile
    const profileData = {
        name: "Husain Ansari",
        role: "Full Stack Developer",
        tagline: "Building digital experiences with code & creativity",
        location: "India",
        availability: "Open to opportunities",
        imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQHWJ4Hb5DxSUA/profile-displayphoto-scale_400_400/B56Zh_PiW2G0Ag-/0/1754481438805?e=1770854400&v=beta&t=vxH3OJUO5JBH5Z1KnL5l-0Mjg9Z_fDiwssdM8ZojLkg"
    };

    // Quick stats
    const stats = [
        { label: 'Projects', value: '15+' },
        { label: 'Experience', value: '3 Yrs' },
        { label: 'Clients', value: '10+' }
    ];

    return (
        <div className='relative min-h-screen bg-[#1a1a1a] py-20 overflow-hidden'>
            {/* Subtle gradient effect */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />

            {/* Content */}
            <div className='container mx-auto px-4 relative z-10'>
                {/* Header Section */}
                <div className='mb-16'>
                    <h2 className='text-center text-5xl font-unbounded text-white mb-6 uppercase tracking-widest opacity-90'>
                        Let's Talk
                    </h2>
                    <p className='text-center text-gray-400 font-open-sans text-lg max-w-xl mx-auto leading-relaxed'>
                        Have a project in mind or just want to say hello?
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-6xl mx-auto'>
                    {/* Left Side: Profile Info + Contact Methods */}
                    <div className='flex flex-col gap-10 lg:w-[480px]'>

                        {/* Profile Card */}
                        <div className='group border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300'>
                            <div className='flex items-start gap-5'>
                                {/* Profile Image */}
                                <div className='relative'>
                                    <img
                                        src={profileData.imageUrl}
                                        alt={profileData.name}
                                        className='w-20 h-20 rounded-full object-cover border-2 border-white/20'
                                    />
                                    {/* Status indicator */}
                                    <div className='absolute bottom-0 right-0 w-4 h-4 bg-white rounded-full border-2 border-[#1a1a1a]' />
                                </div>

                                <div className='flex-1'>
                                    <h3 className='text-xl font-unbounded text-white'>{profileData.name}</h3>
                                    <p className='text-[#51442f] font-space-grotesk font-medium text-sm mt-0.5'>{profileData.role}</p>
                                    <p className='text-gray-400 font-open-sans text-sm mt-2 leading-relaxed'>{profileData.tagline}</p>

                                    {/* Location & Availability */}
                                    <div className='flex flex-wrap gap-3 mt-4'>
                                        <span className='inline-flex items-center gap-1.5 text-xs font-space-grotesk text-gray-400 border border-white/10 px-3 py-1.5 rounded-full'>
                                            <MapPin size={12} className='text-gray-500' />
                                            {profileData.location}
                                        </span>
                                        <span className='inline-flex items-center gap-1.5 text-xs font-space-grotesk text-white/80 border border-white/10 px-3 py-1.5 rounded-full'>
                                            <Clock size={12} />
                                            {profileData.availability}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            {/* <div className='grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10'>
                                {stats.map((stat, index) => (
                                    <div key={index} className='text-center'>
                                        <div className='text-xl font-unbounded text-white'>{stat.value}</div>
                                        <div className='text-xs font-space-grotesk text-gray-500 uppercase tracking-wider mt-1'>{stat.label}</div>
                                    </div>
                                ))}
                            </div> */}
                        </div>

                        {/* Contact Methods List */}
                        <div className='space-y-4'>
                            <h4 className='text-sm font-space-grotesk text-gray-500 uppercase tracking-wider mb-4'>Reach out via</h4>
                            {contactMethods.map((method) => (
                                <a
                                    key={method.id}
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='group flex items-center gap-4 border border-white/10 rounded-xl p-4 hover:border-white/25 hover:bg-white/[0.02] transition-all duration-300'
                                >
                                    {/* Icon */}
                                    <div className='flex items-center justify-center w-12 h-12 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors duration-300'>
                                        <method.icon size={22} className="text-white/70 group-hover:text-white transition-colors duration-300" />
                                    </div>

                                    <div className='flex-1'>
                                        <h3 className='text-base font-unbounded text-white'>
                                            {method.title}
                                        </h3>
                                        <p className="text-gray-500 font-open-sans text-sm">{method.value}</p>
                                    </div>

                                    {/* Arrow */}
                                    <ArrowUpRight size={18} className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Newsletter */}
                    <div className='flex-1'>
                        <div className="relative rounded-2xl overflow-hidden min-h-[500px] h-full">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `url(${blackhole})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50" />

                            {/* Content */}
                            <div className="relative h-full flex flex-col items-center justify-center p-8 lg:p-12 text-center">
                                <span className='text-xs font-mono text-gray-400 uppercase tracking-[0.3em] mb-6'>
                                    Mission Updates
                                </span>

                                <h1 className="text-4xl lg:text-5xl font-unbounded uppercase tracking-wide text-white mb-6">
                                    Stay Updated
                                </h1>

                                <p className="font-open-sans text-gray-300 text-base leading-relaxed mb-10 max-w-md">
                                    Join mission updates and receive early access to launches, experiments, and development progress.
                                </p>

                                {/* Email form */}
                                <div className="w-full max-w-sm">
                                    <div className="flex flex-col gap-3">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-500 font-space-grotesk focus:outline-none focus:border-white/50 transition-all duration-300"
                                        />
                                        <button className="group w-full px-6 py-3 rounded-lg bg-white text-black font-medium font-space-grotesk hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2">
                                            Subscribe
                                            <ChevronRight size={18} className='group-hover:translate-x-1 transition-transform duration-300' />
                                        </button>
                                    </div>
                                    <p className='text-xs text-gray-500 font-mono mt-4 tracking-wide'>
                                        No spam, unsubscribe anytime.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient effect */}
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none" />

        </div>
    );
};