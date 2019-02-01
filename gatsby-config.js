module.exports = {
    pathPrefix: "/my-portfolio",
	siteMetadata: {
		title: "My Website",
		description: "This is my official website",
        url:"https://bansalrachita.github.io/",
        image: "/pages/images/image5.jpg"
	},
	plugins: [
		"gatsby-transformer-remark",
        "gatsby-plugin-react-helmet",
		{ 
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: `${__dirname}/src/pages`
			}
		}
	]
};
