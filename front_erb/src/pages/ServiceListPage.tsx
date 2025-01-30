import React from 'react';
import imageUrl from '../assets/bro.png'

interface Category {
    name: string;
    image: string;
}

interface Service {
    title: string;
    rating: number;
    price: number;
    reviews: number;
    imageUrl: string;
}

interface ServiceCardProps extends Service { }

interface StarRatingProps {
    rating: number;
}


const ServiceListingPage: React.FC = () => {
    // Placeholder data for categories and services (replace with actual data fetching)
    const categories: Category[] = [
        { name: 'Marketing', image: `${imageUrl}` },
        { name: 'Video & media', image: `${imageUrl}` },
        { name: 'Translation', image: `${imageUrl}` },
        { name: 'Illust. image', image: `${imageUrl}` },
        { name: 'Marketing & Design', image: `${imageUrl}` },
        { name: 'Engineering', image: `${imageUrl}` },
        { name: 'Programming', image: `${imageUrl}` },
        { name: 'Training & Education', image: `${imageUrl}` },
        { name: 'More ...', image: `${imageUrl}` }, 
    ];

    const servicesData: { [category: string]: Service[] } = {
        'Marketing': [
            { title: 'Design magazine', rating: 4.5, price: 273, reviews: 412, imageUrl: `${imageUrl}` },
            { title: 'Design magazine', rating: 4.5, price: 253, reviews: 302, imageUrl: `${imageUrl}` },
            { title: 'Design magazine', rating: 4.5, price: 288, reviews: 200, imageUrl: `${imageUrl}` },
            { title: 'Design magazine', rating: 4.5, price: 298, reviews: 280, imageUrl: `${imageUrl}` },
        ],
        'Video & editing': [
            { title: 'Design magazine', rating: 4.7, price: 254, reviews: 425, imageUrl: `${imageUrl}` },
            { title: 'Design magazine', rating: 4.7, price: 245, reviews: 545, imageUrl: `${imageUrl}` },
            { title: 'Design magazine', rating: 4.7, price: 268, reviews: 406, imageUrl: `${imageUrl}` },
            { title: 'Design magazine', rating: 4.7, price: 268, reviews: 208, imageUrl: `${imageUrl}` },
        ],
        'Translation': [
            { title: 'Design magazine', rating: 4.3, price: 303, reviews: 402, imageUrl: `${imageUrl}` },
            { title: 'Design magazine', rating: 4.3, price: 304, reviews: 305, imageUrl: `${imageUrl}` },
            { title: 'Design magazine', rating: 4.3, price: 302, reviews: 202, imageUrl: `${imageUrl}` },
            { title: 'Design magazine', rating: 4.3, price: 298, reviews: 208, imageUrl: `${imageUrl}` },
        ],
        'Animation services': [
            { title: 'Design magazine', rating: 4.2, price: 398, reviews: 492, imageUrl: `${imageUrl}` },
            { title: 'Design magazine', rating: 4.2, price: 399, reviews: 575, imageUrl: `${imageUrl}` },
            { title: 'Design magazine', rating: 4.2, price: 392, reviews: 302, imageUrl: `${imageUrl}` },
            { title: 'Design magazine', rating: 4.2, price: 398, reviews: 208, imageUrl: `${imageUrl}` },
        ],
    };

    const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex items-center">
                {[...Array(fullStars)].map((_, i) => <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}
                {hasHalfStar && <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0v15z"/></svg>}
                {[...Array(emptyStars)].map((_, i) => <svg key={i} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}
            </div>
        );
    };


    const ServiceCard: React.FC<ServiceCardProps> = ({ title, rating, price, reviews, imageUrl }) => {
        return (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img className="w-full h-24 object-cover" src={`${imageUrl}`} alt={title} />
                <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-800 truncate">{title}</h3>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                            <StarRating rating={rating} />
                            <span className="text-xs text-gray-600 ml-1">{rating.toFixed(1)}</span>
                        </div>
                        <div className="text-sm font-bold text-orange-500">${price}</div>
                    </div>
                    <div className="mt-1">
                        <span className="text-xs text-gray-500">{reviews} reviews</span>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                {/* Top Section - Title and Search */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Services that help you grow your projects</h2>
                </div>
                <div className="flex justify-center mb-8">
                    <div className="flex rounded-lg overflow-hidden border border-gray-300 shadow-sm">
                        <input
                            type="text"
                            placeholder="Search about services..."
                            className="px-4 py-2 w-64 focus:outline-none text-sm"
                        />
                        <button className="bg-orange-500 text-white px-4 py-2 text-sm font-semibold hover:bg-orange-600 focus:outline-none">
                            Search
                        </button>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="mb-8">
                    <div className="flex overflow-x-auto space-x-4">
                        {categories.map((category, index) => (
                            <div key={index} className=" flex flex-col justify-center  items-center bg-white rounded-lg shadow-sm p-4 w-28 cursor-pointer hover:shadow-md transition-shadow duration-200">
                                <img className="w-12 h-12 object-cover rounded-full mb-1" src={`${category.image}`} alt={category.name} />
                                <span className="text-xs text-gray-700 truncate">{category.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Service Listings by Category */}
                {Object.keys(servicesData).map((categoryName, index) => (
                    <div key={index} className="mb-8">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-lg font-semibold text-gray-800 capitalize">{categoryName}</h3>
                            <div className="flex items-center space-x-2">
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" aria-haspopup="true" aria-expanded="false">
                                            Status menu
                                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 12l-3.293 3.293a1 1 0 01-1.414-1.414l3-3z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    {/* Dropdown panel (hidden by default, implement state to toggle visibility) */}
                                    {/* <div className="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button" tabIndex="-1">
                                        <div className="py-1" role="none">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="options-menu-item-0">Option 1</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="options-menu-item-1">Option 2</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="options-menu-item-2">Option 3</a>
                                        </div>
                                    </div> */}
                                </div>
                                <button className="text-sm font-semibold text-orange-500 hover:text-orange-700 focus:outline-none">View menu</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {servicesData[categoryName].map((service, index) => (
                                <ServiceCard key={index} {...service} />
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ServiceListingPage;