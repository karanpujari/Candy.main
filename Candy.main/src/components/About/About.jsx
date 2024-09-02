import React from 'react'

function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://scontent.fbom66-1.fna.fbcdn.net/v/t39.30808-6/339919054_226902306676921_5525025905627331866_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JUDLG2yiX5YQ7kNvgEx8dTO&_nc_ht=scontent.fbom66-1.fna&oh=00_AYBvJyksrgH0lfFc8pQ-yRmQ41ZILmZMFv9tvYEiLf_oog&oe=66DA2724"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Learn Editing with Karan Pujari!
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Editing involves making changes to a document, text, or other content to improve clarity, accuracy, or overall quality. This can include correcting grammar and spelling errors, rephrasing sentences for better readability, adjusting formatting, and ensuring the content meets specific requirements or standards. The goal of editing is to refine and enhance the content so it effectively communicates the intended message to the audience.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Editing is crucial in various fields, from writing and publishing to software development and web design, as it ensures the final product is clear, accurate, and professional.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About