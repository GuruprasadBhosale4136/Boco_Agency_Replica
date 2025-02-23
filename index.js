const element = document.getElementById("three");

element.addEventListener("click", function() {
    let confirmBox = confirm("Do you want to proceed?");
    if (confirmBox) {
        document.write("<h1>Hi, I am Guruprasad. Do you want to talk with me? Then call on 9322746112.</h1>");

        document.write("<h3>Boco Agency has multiple branches with different services1 Boco Agency India This agency specializes in Shopify and Shopify Plus It focuses on designing and developing strategic ecommerce websites Their services include high conversion rates unmatched speed and stability and reduced reliance on third party apps They have worked with over 90 brands to build high converting Shopify stores2 Boco Creative Agency USA Located in Upstate South Carolina this agency provides marketing services including website development content curation and social media strategies They aim to create personalized experiences with proven results and cost effective solutions3 Boco Creative Denver USA Operating since 2009 this agency focuses on digital marketing for small businesses Their expertise includes web design SEO content marketing and social media marketing They help businesses build a strong online presence with tailored marketing strategies4 Boco Collective Previously an active agency Boco Collective is no longer taking new clients but Courtney Cook a former member now offers freelance design website and social media servicesEach Boco entity provides unique services tailored to their markets and client needs Page 1: Introduction to Boco AgencyBoco Agency is a creative agency specializing in web design, e-commerce solutions, and digital marketing. It operates in different regions, including India and the USA, offering tailored services to businesses.Page 2: Boco Agency India – Shopify ExpertsThis branch focuses on Shopify and Shopify Plus development. They help businesses create high-performing online stores with optimized speed, stability, and conversion rates.Page 3: Boco Agency India – Key Services</h3>")

    }
});



// document.getElementById("g").addEventListener("click", () => {
//    let confirm =  alert("You are going to the Shopify Store Build Page!");

//     if(confirm){

    
//       const randomContents = [`<h3>
//         Shopify Store Build Page is a dedicated platform that helps entrepreneurs and businesses create their online stores effortlessly. 
//         It provides a user-friendly interface that allows users to build, customize, and launch their eCommerce website without coding skills. 
//         The platform offers a variety of themes and templates to suit different business needs. Users can easily drag and drop elements 
//         to design their storefront, ensuring a visually appealing layout. Shopify provides secure payment gateways, enabling customers 
//         to make transactions safely. It supports multiple currencies and payment methods, making it ideal for global businesses. 
//         </h3>
//     `];
//     }
// });


document.getElementById("g").addEventListener("click", () => {
    let userConfirmed = confirm("You are going to the Shopify Store Build Page!");

    if (userConfirmed) {
        const randomContents = [`<h1><b>This IS Info About Shopify Store<b> </h1><h3>
            Shopify Store Build Page is a dedicated platform that helps entrepreneurs and businesses create their online stores effortlessly. 
            It provides a user-friendly interface that allows users to build, customize, and launch their eCommerce website without coding skills. 
            The platform offers a variety of themes and templates to suit different business needs. Users can easily drag and drop elements 
            to design their storefront, ensuring a visually appealing layout. Shopify provides secure payment gateways, enabling customers 
            to make transactions safely. It supports multiple currencies and payment methods, making it ideal for global businesses. 
        </h3>`];

        document.body.innerHTML = randomContents[0]; // This replaces the entire body content with the new HTML
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(" #b, #c, #three, #first-curve, #second-curve");
    
    const randomContents = [
        `<h1>Welcome to Boco Agency</h1><h3>We provide top-notch digital marketing and e-commerce solutions tailored for your business success.</h3><p>Our expertise spans across Shopify store development, branding, and performance marketing to help your business scale.</p>`,
        `<h1>Explore Our Case Studies</h1><h3>Learn how we have helped brands grow through strategic Shopify store designs and marketing campaigns.</h3><p>Each project we undertake is optimized for high conversion rates, speed, and a seamless user experience.</p>`,
        `<h1>Meet Our Expert Team</h1><h3>Our team of professionals is dedicated to providing you with the best web development and marketing strategies.</h3><p>With years of experience in e-commerce and digital marketing, we ensure that your brand gets the visibility it deserves.</p>`,
        `<h1>Our Global Presence</h1><h3>We have successfully served clients across India, the USA, and Europe, delivering cutting-edge digital solutions.</h3><p>From small startups to enterprise-level businesses, we craft customized solutions that drive success.</p>`,
        `<h1>Talk to Us</h1><h3>We’re here to assist you with your e-commerce journey. Contact us today for expert guidance.</h3><p>Whether you need Shopify development, UX/UI enhancements, or marketing strategy consultation, we are just a message away.</p>`,
        `<h1>Why Choose Boco Agency?</h1><h3>We are committed to delivering excellence in Shopify development and digital marketing.</h3><p>Our track record speaks for itself—90+ successful brand collaborations and counting.</p>`,
        `<h1>Optimized Web Experiences</h1><h3>Speed, stability, and high conversions—our priority for every Shopify store we build.</h3><p>We ensure that your store runs seamlessly, providing the best shopping experience to your customers.</p>`
    ];

    elements.forEach(element => {
        element.addEventListener("click", function() {
            let confirmBox = confirm("Do you want to proceed?");
            if (confirmBox) {
                let randomIndex = Math.floor(Math.random() * randomContents.length);
                document.body.innerHTML = randomContents[randomIndex];
            }
        });
    });
});
