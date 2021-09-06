module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                "my-photo": "url('/erki2.jpg')",
            }),
            opacity: ["disabled"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
