export interface HeroSection {
    _id: string;
    _type: 'hero';
    title: string;
    backgroundImage: {
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
    ctaLabel: string;
    ctaLink: string;
}