import React from 'react';

interface GalleryItem {
    title: string;
    imageUrl: string;
    likes: number;
    views: number;
}

interface Category {
    name: string;
}

const BusinessGalleryPage: React.FC = () => {
    // Placeholder data for gallery items and categories (replace with actual data fetching)
    const galleryItems: GalleryItem[] = Array(15).fill(null).map((_, index) => ({ // Create 15 dummy items
        title: 'Design magazine',
        imageUrl: `/images/gallery-placeholder.jpg`, // Use placeholder image
        likes: 24 + index, // Example like counts
        views: 12 + index * 2, // Example view counts
    }));

    const categories: Category[] = [
        { name: 'Consulting' },
        { name: 'Programming' },
        { name: 'Engineering, architecture' },
        { name: 'Design' },
        { name: 'Marketing' },
        { name: 'Writing and translation' },
        { name: 'Data Entry' },
        { name: 'Training & Education' },
    ];

    return (
        <div className="bg-gray-100 min-h-screen flex">
            {/* Left Sidebar (Filters) */}
            <aside className="bg-white w-64 p-6 border-r border-gray-200">
                <div className="mb-4">
                    <button className="text-sm text-orange-500 hover:text-orange-700 focus:outline-none">
                        Clear all filters
                    </button>
                </div>
                <div className="mb-6">
                    <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">Search from here</label>
                    <input
                        type="text"
                        id="search"
                        placeholder="Search..."
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Categories</label>
                    <div className="border border-gray-300 rounded p-2">
                        {categories.map((category, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <input type="checkbox" id={`category-${index}`} className="form-checkbox h-4 w-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500" />
                                <label htmlFor={`category-${index}`} className="ml-2 text-sm text-gray-700">{category.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Main Content (Gallery) */}
            <main className="flex-1 p-8">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">Business gallery</h2>
                    </div>
                    <div>
                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">
                            Grid work
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img className="w-full h-32 object-cover" src={item.imageUrl} alt={item.title} />
                            <div className="p-4">
                                <h3 className="text-sm font-semibold text-gray-800 truncate mb-2">{item.title}</h3>
                                <div className="flex items-center justify-between text-gray-600 text-xs">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h-2v2h2v-2zM3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2M3 7v-2a4 4 0 014-4h10a4 4 0 014 4v2h-1.333M3 7h18m-13 4v4h-2v-4m-6-4h.01M19 11h.01M21 7a2 2 0 01-2 2V5a2 2 0 112 2zM4 7a2 2 0 01-2 2V5a2 2 0 112 2z"></path></svg>
                                        <span>Play</span> {/* Placeholder for play icon text */}
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                            <span>{item.likes}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                            <span>{item.views}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8">
                    <div className="flex rounded-lg overflow-hidden border border-gray-300">
                        <button className="px-3 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </button>
                        <button className="px-4 py-2 text-orange-500 font-semibold hover:bg-gray-200 focus:outline-none">1</button>
                        <button className="px-4 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none">2</button>
                        <button className="px-4 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none">3</button>
                        <span className="px-4 py-2 text-gray-700">...</span>
                        <button className="px-4 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none">17</button>
                        <button className="px-3 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BusinessGalleryPage;