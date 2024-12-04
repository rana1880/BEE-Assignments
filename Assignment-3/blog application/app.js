const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [
    {
        title: "Why Learning JavaScript is Essential in 2024",
        body: "JavaScript remains one of the most powerful and widely-used programming languages, and its importance in 2024 is only growing. From web development to backend services, mobile apps to serverless architecture, JavaScript is at the core of modern software solutions.\n\nKey reasons to learn JavaScript:\n- Ubiquity: It runs everywhere—from browsers to servers (thanks to Node.js).\n- Community: The developer community is massive, with plenty of resources, libraries, and frameworks like React, Angular, and Express.js.\n- Versatility: Whether you're building front-end interfaces, handling backend logic, or even developing mobile apps with frameworks like React Native, JavaScript has you covered.\n\nStart learning today, and you'll be well-equipped for the future of software development!"
    },
    {
        title: "The Rise of AI in Everyday Applications",
        body: "Artificial Intelligence (AI) is no longer a futuristic concept—it's integrated into our daily lives more than ever before. From personal assistants like Siri and Alexa to recommendations on Netflix and Amazon, AI is working behind the scenes to make our experiences more personalized and efficient.\n\nKey areas where AI is making an impact:\n- **Healthcare**: AI is assisting doctors in diagnosing diseases and personalizing treatments.\n- **Finance**: Fraud detection and automated trading systems are powered by AI algorithms.\n- **Transportation**: Autonomous vehicles and smart traffic systems are becoming more prevalent.\n\nAs AI continues to evolve, its applications in everyday life will only expand, making it a must-know technology for the future."
    },
    {
        title: "Understanding Cloud Computing in 2024",
        body: "Cloud computing has transformed how businesses operate, allowing them to scale operations and access data from anywhere in the world. By 2024, it's no longer a question of whether to adopt cloud technologies, but rather how to optimize their use.\n\nWhy cloud computing is essential:\n- **Scalability**: Cloud platforms allow businesses to scale infrastructure up or down as needed, making them cost-effective.\n- **Remote Accessibility**: With cloud storage and services, teams can collaborate from anywhere with an internet connection.\n- **Security**: Leading cloud providers like AWS, Azure, and Google Cloud have robust security measures in place, often more reliable than traditional on-premise solutions.\n\nAs cloud technologies continue to evolve, it's crucial to stay updated with best practices for leveraging them effectively."
    },
    {
        title: "How 5G is Revolutionizing Connectivity",
        body: "The rollout of 5G technology is revolutionizing how we connect to the internet and communicate globally. With lightning-fast speeds and reduced latency, 5G is setting the stage for the next generation of digital innovation.\n\nBenefits of 5G:\n- **Faster Speeds**: With download speeds up to 100 times faster than 4G, 5G will transform streaming, gaming, and downloading large files.\n- **Reduced Latency**: Lower latency means faster response times, which is critical for real-time applications like online gaming and video conferencing.\n- **More Connections**: 5G can support a larger number of devices simultaneously, paving the way for smart cities, IoT (Internet of Things), and autonomous vehicles.\n\nAs 5G networks expand, the possibilities for innovation in industries like healthcare, transportation, and entertainment will be endless."
    },
    {
        title: "The Future of Work: Remote and Hybrid Models",
        body: "The COVID-19 pandemic has accelerated the adoption of remote and hybrid work models. Many companies are embracing these flexible working arrangements even after the pandemic, reshaping the future of work.\n\nWhy remote and hybrid models are here to stay:\n- **Increased Flexibility**: Employees can work from anywhere, creating a better work-life balance.\n- **Cost Savings**: Companies can reduce expenses related to office space, utilities, and commuting.\n- **Access to Global Talent**: Remote work opens up opportunities to hire talent from anywhere in the world, breaking geographical barriers.\n\nWhile remote work presents challenges such as maintaining team collaboration and communication, advancements in collaboration tools like Slack, Zoom, and Microsoft Teams are helping businesses navigate this new landscape effectively."
    }
];



app.get('/', (req, res) => {
    res.redirect('/posts');
});


app.get('/posts', (req, res) => {
    res.render('posts', { posts });
});


app.post('/add-post', (req, res) => {
    const newPost = {
        title: req.body.title,
        body: req.body.body
    };
    posts.push(newPost);
    res.redirect('/posts');
});


app.get('/posts/:title', (req, res) => {
    const postTitle = req.params.title;
    const post = posts.find(p => p.title === postTitle);
    if (post) {
        res.render('post-detail', { post });
    } else {
        res.status(404).send('Post not found');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
